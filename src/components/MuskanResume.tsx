// src/components/MuskanResume.tsx
import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Linkedin,
  Languages,
} from "lucide-react";

const MuskanResume: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-2 md:p-4 font-sans text-xs">
      <div className="max-w-5xl mx-auto border border-gray-300 shadow-md rounded-lg p-2 md:p-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-xl md:text-2xl font-bold text-indigo-700 leading-tight mb-1">
            Muskan Mujawar
          </h1>
          <p className="text-gray-600 text-xs">
            Software Engineer | MCA Student | Full Stack Developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[2px] gap-y-[1px]">
          {/* Left Column */}
          <div className="space-y-[4px]">
            {/* DETAILS */}
            <section className="space-y-[2px]">
              <h2 className="text-sm font-semibold text-indigo-600">Details</h2>
              <p className="flex items-center gap-1">
                <MapPin size={10} /> Ashta, PIN-416301
              </p>
              <p className="flex items-center gap-1">
                <Phone size={10} /> 9156070412
              </p>
              <p className="flex items-center gap-1">
                <Mail size={10} /> muskanmujawar995@gmail.com
              </p>
            </section>

            {/* LINKS */}
            <section className="space-y-[2px]">
              <h2 className="text-sm font-semibold text-indigo-600">Links</h2>
              <p className="flex items-start gap-1">
                <Linkedin size={10} className="mt-0.5" />
                <a
                  href="https://www.linkedin.com/in/muskan-mujawar-5723342bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline break-all"
                >
                  https://www.linkedin.com/in/muskan-mujawar-5723342bb
                </a>
              </p>
            </section>

            {/* TECHNICAL SKILLS */}
            <section className="space-y-[2px]">
              <h2 className="text-sm font-semibold text-indigo-600">
                Technical Skills
              </h2>
              <p>
                <strong>Frontend:</strong> React, JavaScript, HTML5, CSS3
              </p>
              <p>
                <strong>Backend:</strong> Spring Boot, Java, Node.js, REST APIs
              </p>
              <p>
                <strong>Database:</strong> MySQL, PostgreSQL, MongoDB
              </p>
            </section>

            {/* LANGUAGES */}
            <section className="space-y-[2px]">
              <h2 className="text-sm font-semibold text-indigo-600">Languages</h2>
              <p className="flex items-center gap-1">
                <Languages size={10} /> Marathi, Hindi, English, Urdu
              </p>
            </section>

            {/* STRENGTHS */}
            <section className="space-y-[2px]">
              <h2 className="text-sm font-semibold text-indigo-600">Strengths</h2>
              <ul className="list-disc ml-4 text-xs">
                <li>Good Listener</li>
                <li>Leadership Qualities</li>
                <li>Strong Communication Skills</li>
                <li>Challenge-Oriented</li>
                <li>Highly Disciplined</li>
                <li>Excellent analytical and logical thinking</li>
                <li>Quick learner and adaptable</li>
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-[4px]">
            {/* PROFILE */}
            <section className="space-y-[2px]">
              <h2 className="text-sm font-semibold text-indigo-600">Profile</h2>
              <p>
                Passionate and dedicated Software Engineer pursuing MCA, eager to
                build modern web solutions and gain hands-on industry experience.
                Strong understanding of core technologies, with a commitment to
                continuous learning and growth.
              </p>
            </section>

            {/* EMPLOYMENT */}
            <section className="space-y-[2px]">
              <h2 className="text-sm font-semibold text-indigo-600">Employment History</h2>
              <div className="flex gap-1">
                <CheckCircle size={10} className="text-green-500 mt-0.5" />
                <div>
                  <strong>Intern</strong> at ChampionXI Games Pvt Ltd
                  <br />
                  <span className="text-[10px] text-gray-600">Jan 2025 – Jun 2025</span>
                </div>
              </div>
            </section>

            {/* EDUCATION */}
            <section className="space-y-[2px]">
              <h2 className="text-sm font-semibold text-indigo-600">Education</h2>
              <ul>
                <li className="flex gap-1">
                  <CheckCircle size={10} className="text-green-500 mt-0.5" />
                  <div>
                    <strong>MCA</strong>, D.Y. Patil Technical University, Kolhapur
                    <br />
                    <span className="text-[10px] text-gray-600">2023 – Present</span>
                  </div>
                </li>
                <li className="flex gap-1">
                  <CheckCircle size={10} className="text-green-500 mt-0.5" />
                  <div>
                    <strong>B.Sc (CS)</strong>, Patangrao Kadam Mahavidyalaya — 77.72%
                    <br />
                    <span className="text-[10px] text-gray-600">2021 – 2023</span>
                  </div>
                </li>
                <li className="flex gap-1">
                  <CheckCircle size={10} className="text-green-500 mt-0.5" />
                  <div>
                    <strong>HSC</strong>, Patangrao Kadam Mahavidyalaya — 61.23%
                    <br />
                    <span className="text-[10px] text-gray-600">2019 – 2020</span>
                  </div>
                </li>
                <li className="flex gap-1">
                  <CheckCircle size={10} className="text-green-500 mt-0.5" />
                  <div>
                    <strong>SSC</strong>, Vilarasao Shinde School — 76.80%
                    <br />
                    <span className="text-[10px] text-gray-600">2017 – 2018</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* PROJECTS */}
            <section className="space-y-[2px]">
              <h2 className="text-sm font-semibold text-indigo-600">Projects</h2>
              <div>
                <div>
                  <strong>Nipser – Scholarship Portal</strong>
                  <br />
                  <span className="text-[10px] text-gray-600">
                    (React + Spring Boot + PostgreSQL)
                  </span>
                  <ul className="list-disc ml-4 text-xs">
                    <li>Led team to develop portal for scholarships.</li>
                    <li>Frontend in React, backend in Spring Boot.</li>
                    <li>Secure login and role-based access.</li>
                  </ul>
                </div>
                <div>
                  <strong>School Management System</strong>
                  <br />
                  <span className="text-[10px] text-gray-600">
                    (React + Spring Boot + MySQL)
                  </span>
                  <ul className="list-disc ml-4 text-xs">
                    <li>Automated school tasks like admission, grades.</li>
                    <li>Role-based dashboards using React.</li>
                    <li>MySQL optimized for performance.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* COURSES */}
            <section className="space-y-[2px]">
              <h2 className="text-sm font-semibold text-indigo-600">Courses</h2>
              <p>AWS for Beginners — D.Y. Patil University (Present)</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuskanResume;
