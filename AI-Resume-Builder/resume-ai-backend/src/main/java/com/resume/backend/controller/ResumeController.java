package com.resume.backend.controller;

import com.resume.backend.ResumeRequest;
import com.resume.backend.service.ResumeService;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin("*")
@RequestMapping("api/resume")
public class ResumeController {

    private ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping("/build")
    public ResponseEntity<JSONObject> getResume(
            @RequestBody ResumeRequest resumeRequest
            ) throws IOException {
        JSONObject jsonObject = resumeService.generateResumeResponse(resumeRequest.userDescription());
        return new ResponseEntity<>(jsonObject, HttpStatus.OK);
    }
}
