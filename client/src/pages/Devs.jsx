import React from "react";
import { assets } from "../assets/assets";

export default function DeveloperCards({ developers = [] }) {
  const sample = [
    {
      id: "1",
      name: "Shubham Bhatt",
      role: "FULL STACK Developer",
      avatar: assets.frame2,
      bio: "Focused on building beautiful, accessible UIs. PROBLEM SOLVER",
      skills: ["React", "Tailwind", "Figma", "Node"],
      links: {
        github: "https://github.com/shubhambhatt1775",
        linkedin:
          "https://www.linkedin.com/in/shubham-bhatt-761170316",
      },
      location: "Palanpur",
      portfolio: "https://shubhambhatt1775.github.io/Shubham-Intro",
    },
    {
      id: "2",
      name: "Abhi",
      role: "Backend Developer",
      avatar: assets.abhi,
      bio: "APIs, databases and reliability.",
      skills: ["Node.js", "Express", "MongoDB"],
      links: { github: "#", linkedin: "#" },
      location: "Palanpur",
      portfolio: "#",
    },
    {
      id: "3",
      name: "Ajay",
      role: "Mobile / Full-Stack",
      avatar: assets.ajay,
      bio: "Mobile-first and cross-platform apps.",
      skills: ["React Native", "Flutter", "CI/CD"],
      links: { github: "#", linkedin: "#" },
      location: "Palanpur",
      portfolio: "#",
    },
  ];

  const list = developers && developers.length > 0 ? developers : sample;

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center">
          Meet the <span className="text-green-600">Developers</span>
        </h2>
        <p className="text-gray-500 mb-8 text-center">
          Small, focused team —<span className="text-red-600"> big ideas.</span> Click a card to copy email (if provided).
        </p>

        {/* Always 1 column */}
        <div className="grid grid-cols-1 gap-6">
          {list.map((dev) => (
            <article
              key={dev.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 sm:p-8 overflow-hidden"
            >
              {/* Avatar + Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={dev.avatar}
                  alt={dev.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover"
                />
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        {dev.name}
                      </h3>
                      <p className="text-base text-gray-500 mt-1">{dev.role}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center sm:justify-end gap-2 opacity-0 group-hover:opacity-100 transition">
                      {dev.links?.linkedin && (
                        <a
                          href={dev.links.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          {/* LinkedIn icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7 7h4.8v2.3h.1c.7-1.2 2.6-2.3 5.3-2.3 5.7 0 6.7 3.8 6.7 8.8V24h-5v-7.6c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 3.9V24H7V7z" />
                          </svg>
                        </a>
                      )}
                      {dev.links?.github && (
                        <a
                          href={dev.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          {/* GitHub icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.68 0-1.25.44-2.27 1.16-3.07-.12-.29-.5-1.46.11-3.04 0 0 .95-.3 3.12 1.17.9-.25 1.87-.38 2.83-.38.96 0 1.93.13 2.83.38 2.17-1.47 3.12-1.17 3.12-1.17.61 1.58.23 2.75.11 3.04.72.8 1.16 1.82 1.16 3.07 0 4.41-2.7 5.39-5.27 5.67.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-2 text-gray-600 text-sm">{dev.bio}</p>

                  <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {dev.skills?.slice(0, 6).map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700 hover:bg-green-400 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="text-sm text-gray-500">
                  {dev.location || "Location not provided"}
                </div>
                <div className="flex items-center gap-3">
                  {dev.email && (
                    <button
                      onClick={() => navigator.clipboard.writeText(dev.email)}
                      className="px-3 py-1 rounded-md bg-primary text-white text-sm hover:opacity-90"
                    >
                      Copy Email
                    </button>
                  )}
                  <a
                    href={dev.portfolio || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary underline"
                  >
                    Portfolio
                  </a>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="pointer-events-none absolute -right-8 -top-8 w-36 h-36 bg-primary/5 rounded-full blur-3xl"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
