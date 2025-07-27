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
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Sets Us Apart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="card-title text-2xl">Smart Resume Builder</h3>
                <p className="text-gray-500">
                  Leverage intelligent suggestions to craft professional resumes
                  in seconds.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="card-title text-2xl">Beautiful Designs</h3>
                <p className="text-gray-500">
                  Choose from a variety of modern, recruiter-approved templates.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="card-title text-2xl">Fast & Easy</h3>
                <p className="text-gray-500">
                  Create, customize, and download your resume in just a few
                  clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-base-200 to-base-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
              <div className="card-body">
                <p className="text-gray-600">
                  “I was amazed at how fast and accurate the AI was. My resume
                  looked polished and got responses within days!”
                </p>
                <div className="flex items-center mt-6">
                  <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Alex Carter</h4>
                    <p className="text-sm text-gray-500">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
              <div className="card-body">
                <p className="text-gray-600">
                  “The templates are beautiful and easy to use. I finally feel
                  confident applying to jobs with my new resume!”
                </p>
                <div className="flex items-center mt-6">
                  <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Emily Davis</h4>
                    <p className="text-sm text-gray-500">UX Designer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
              <div className="card-body">
                <p className="text-gray-600">
                  “Super easy to use! It helped me structure my resume perfectly
                  and saved me hours of work.”
                </p>
                <div className="flex items-center mt-6">
                  <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Ryan Mitchell</h4>
                    <p className="text-sm text-gray-500">Data Analyst</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
              <div className="card-body">
                <p className="text-gray-600">
                  “Thanks to this AI tool, I landed three interviews in one
                  week! Highly recommend it to job seekers.”
                </p>
                <div className="flex items-center mt-6">
                  <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src="https://randomuser.me/api/portraits/women/65.jpg"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Sophie Lee</h4>
                    <p className="text-sm text-gray-500">Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-100 text-base-content py-8">
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
            &copy; {new Date().getFullYear()} AI Resume Builder. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
