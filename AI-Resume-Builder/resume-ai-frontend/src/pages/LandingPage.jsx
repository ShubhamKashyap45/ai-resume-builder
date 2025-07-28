import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="bg-base-100 text-base-content scroll-smooth">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-base-200 to-base-300">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-semibold text-center whitespace-nowrap">
              Build Your Resume with AI
            </h1>
            <p className="py-6 text-lg text-gray-500">
              Create a job-winning resume effortlessly. Share your story, and
              our AI will turn it into a polished, standout resume in no time.
            </p>
            <Link
              to={"/generate-resume"}
              className="btn btn-primary btn-wide btn-lg shadow-md hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Use Our Builder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-base-100 text-base-content rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">AI That Thinks</h3>
              <p>
                Describe your skills, and let the AI craft content that sounds
                like you—only better.
              </p>
            </div>
            <div className="p-6 bg-base-100 text-base-content rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
              <p>
                Edit every word, choose layouts, and make the resume uniquely
                yours.
              </p>
            </div>
            <div className="p-6 bg-base-100 text-base-content rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
              <p>
                Build and download your resume directly from your phone or
                tablet.
              </p>
            </div>
            <div className="p-6 bg-base-100 text-base-content rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">📤</div>
              <h3 className="text-xl font-semibold mb-2">Instant Download</h3>
              <p>
                One click to get a ready-to-send PDF in your inbox or device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            People Are Talking
          </h2>

          <div className="relative">
            <div className="overflow-x-auto flex space-x-6 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-base-200">
              {[
                {
                  name: "Alex Carter",
                  role: "Full Stack Developer",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  quote:
                    "I was amazed at how fast and accurate the AI was. My resume looked polished and got responses within days!",
                },
                {
                  name: "Emily Davis",
                  role: "UX Designer",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  quote:
                    "The templates are beautiful and easy to use. I finally feel confident applying to jobs!",
                },
                {
                  name: "Ryan Mitchell",
                  role: "Data Analyst",
                  image: "https://randomuser.me/api/portraits/men/75.jpg",
                  quote:
                    "Super easy to use! It helped me structure my resume perfectly and saved me hours of work.",
                },
                {
                  name: "Sophie Lee",
                  role: "Product Manager",
                  image: "https://randomuser.me/api/portraits/women/65.jpg",
                  quote:
                    "Thanks to this AI tool, I landed three interviews in one week! Highly recommend it.",
                },
                {
                  name: "Mark Robinson",
                  role: "Backend Engineer",
                  image: "https://randomuser.me/api/portraits/men/85.jpg",
                  quote:
                    "The AI-generated summary was spot on. Way better than what I had before!",
                },
                {
                  name: "Ava Nguyen",
                  role: "HR Specialist",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                  quote:
                    "Clean UI, amazing suggestions, and instant PDF download. 10/10!",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[280px] max-w-sm bg-base-200 rounded-xl shadow-md p-5 snap-start hover:shadow-lg transition"
                >
                  <p className="text-base-content/80 text-sm mb-4 leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-base-content/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-base-100 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Resume?
          </h2>
          <p className="mb-8 text-lg">
            Get noticed. Get hired. Get hyped. Our AI resume builder is your new
            secret weapon!
          </p>
          <Link to={"/generate-resume"} className="btn btn-primary">
            Build My Resume
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-300 text-base-content py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Brand Info */}
            <div>
              <h4 className="footer-title text-2xl font-bold mb-2">
                AI Resume Builder
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Build standout resumes effortlessly with the power of AI.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-xl hover:text-primary transition">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="text-xl hover:text-primary transition">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" className="text-xl hover:text-primary transition">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-title text-xl mb-3">Quick Links</h4>
              <div className="flex flex-wrap gap-6">
                <a
                  href="/about"
                  className="link link-hover hover:text-primary transition"
                >
                  About Us
                </a>
                <a
                  href="/services"
                  className="link link-hover hover:text-primary transition"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="link link-hover hover:text-primary transition"
                >
                  Contact
                </a>
              </div>
            </div>
            {/* Legal Links */}
            <div>
              <h4 className="footer-title text-xl mb-3">Legal</h4>
              <div className="flex flex-wrap gap-6">
                <a
                  href="#"
                  className="link link-hover hover:text-primary transition"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="link link-hover hover:text-primary transition"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AI Resume Builder. Just a Fun
            Project. No rights reserved. 🙂
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
