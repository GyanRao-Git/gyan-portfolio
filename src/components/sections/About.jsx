import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCss"];
  const backendSkills = ["NodeJs", "ExpressJs", "MongoDB", "Mysql"];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a dedicated full-stack developer driven by a passion for
              building intuitive and high-performing web applications. With a
              strong foundation in the MERN stack, I enjoy tackling challenges,
              optimizing workflows, and transforming ideas into seamless digital
              solutions. My journey in development is fueled by a constant
              desire to learn, adapt, and refine my skills to stay at the
              forefront of technology. Whether it's crafting clean, efficient
              code or designing user-friendly interfaces, I strive to create
              impactful applications that enhance both functionality and user
              experience.
            </p>

            <div className="flex">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Backend </h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 p  x-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-"> Education</h3>
                <ul>
                  <li>
                    <strong>B.E in Information Science </strong> - Nitte
                    Meenakshi Institute of technology{" "}
                    <strong> (2020-2026)</strong>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-"> Skills</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>MERN Stack</li>
                  <li>DSA in C++</li>
                  <li>Machine Learning</li>
                  <li>Power Bi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
