package com.resume.backend.service;

import org.json.JSONObject;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService{

    private ChatClient chatClient;

    public ResumeServiceImpl(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    @Override
    public JSONObject generateResumeResponse(String userResumeDescription) throws IOException {

        String promptTemplate = this.loadPromptTemplate("resume_ai_prompt.txt");
        String filledPrompt  = this.fillTemplatePlaceholders(promptTemplate, Map.of("userDescription", userResumeDescription));

        Prompt resumePrompt  = new Prompt(filledPrompt);

        String aiResponse  = chatClient.prompt(resumePrompt).call().content();

        JSONObject jsonObject = parsePromptResponse(aiResponse);
        return jsonObject;
    }


    String loadPromptTemplate(String filename) throws IOException {
        Path path = new ClassPathResource(filename).getFile().toPath();
        return Files.readString(path);
    }

    String fillTemplatePlaceholders(String template, Map<String, String> values){
        for(Map.Entry<String, String> entry : values.entrySet()){
            template = template.replace("{{" + entry.getKey() + "}}", entry.getValue());
        }
        return template;
    }


    public static JSONObject parsePromptResponse(String response) {
        JSONObject jsonResponse = new JSONObject();

        // Extract content inside <think> tags
        int thinkStart = response.indexOf("<think>") + 7;
        int thinkEnd = response.indexOf("</think>");
        if (thinkStart != -1 && thinkEnd != -1) {
            String thinkContent = response.substring(thinkStart, thinkEnd).trim();
            jsonResponse.put("think", thinkContent);
        } else {
            jsonResponse.put("think", JSONObject.NULL); // Handle missing <think> tags
        }

        // Extract content that is in JSON format
        int jsonStart = response.indexOf("```json") + 7; // Start after ```json
        int jsonEnd = response.lastIndexOf("```");       // End before ```
        if (jsonStart != -1 && jsonEnd != -1 && jsonStart < jsonEnd) {
            String jsonContent = response.substring(jsonStart, jsonEnd).trim();
            try {
                JSONObject dataContent = new JSONObject(jsonContent);
                jsonResponse.put("data", dataContent);
            } catch (Exception e) {
                jsonResponse.put("data", JSONObject.NULL); // Handle invalid JSON
                System.err.println("Invalid JSON format in the response: " + e.getMessage());
            }
        } else {
            jsonResponse.put("data", JSONObject.NULL); // Handle missing JSON
        }

        return jsonResponse;
    }
}
