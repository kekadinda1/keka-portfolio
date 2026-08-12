import React from 'react';
import { personalDetails } from '../Data/personalDetails';

// React Icons
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaDatabase,
  FaChartLine,
  FaLaptopCode
} from 'react-icons/fa';
import {
  SiC,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiFastapi,
  SiFlask,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPycharm,
  SiEclipseide
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const SKILL_MAP = {
  python: { icon: <FaPython />, color: 'text-sky-300', bg: 'hover:border-sky-400/60' },
  javascript: { icon: <SiJavascript />, color: 'text-yellow-300', bg: 'hover:border-yellow-400/60' },
  java: { icon: <FaJava />, color: 'text-orange-400', bg: 'hover:border-orange-400/60' },
  c: { icon: <SiC />, color: 'text-blue-400', bg: 'hover:border-blue-400/60' },
  sql: { icon: <FaDatabase />, color: 'text-cyan-300', bg: 'hover:border-cyan-400/60' },
  react: { icon: <FaReact />, color: 'text-cyan-400', bg: 'hover:border-cyan-400/60' },
  fastapi: { icon: <SiFastapi />, color: 'text-teal-300', bg: 'hover:border-teal-400/60' },
  flask: { icon: <SiFlask />, color: 'text-slate-200', bg: 'hover:border-slate-300/60' },
  tailwind: { icon: <SiTailwindcss />, color: 'text-sky-400', bg: 'hover:border-sky-400/60' },
  html: { icon: <FaHtml5 />, color: 'text-orange-500', bg: 'hover:border-orange-500/60' },
  css: { icon: <FaCss3Alt />, color: 'text-blue-400', bg: 'hover:border-blue-400/60' },
  opencv: { icon: <SiOpencv />, color: 'text-emerald-400', bg: 'hover:border-emerald-400/60' },
  'scikit-learn': { icon: <SiScikitlearn />, color: 'text-blue-300', bg: 'hover:border-blue-400/60' },
  pandas: { icon: <SiPandas />, color: 'text-indigo-300', bg: 'hover:border-indigo-400/60' },
  numpy: { icon: <SiNumpy />, color: 'text-cyan-300', bg: 'hover:border-cyan-400/60' },
  matplotlib: { icon: <FaChartLine />, color: 'text-sky-300', bg: 'hover:border-sky-400/60' },
  mysql: { icon: <SiMysql />, color: 'text-blue-400', bg: 'hover:border-blue-400/60' },
  git: { icon: <FaGitAlt />, color: 'text-orange-400', bg: 'hover:border-orange-400/60' },
  github: { icon: <FaGithub />, color: 'text-slate-100', bg: 'hover:border-slate-300/60' },
  'vs code': { icon: <VscVscode />, color: 'text-sky-400', bg: 'hover:border-sky-400/60' },
  pycharm: { icon: <SiPycharm />, color: 'text-emerald-400', bg: 'hover:border-emerald-400/60' },
  eclipse: { icon: <SiEclipseide />, color: 'text-indigo-400', bg: 'hover:border-indigo-400/60' },
};

const getSkillConfig = (skillName) => {
  const normalized = skillName.toLowerCase().trim();
  for (const key of Object.keys(SKILL_MAP)) {
    if (key === 'c' && normalized === 'c') return SKILL_MAP[key];
    if (key !== 'c' && normalized.includes(key)) return SKILL_MAP[key];
  }
  return { icon: <FaLaptopCode />, color: 'text-sky-400', bg: 'hover:border-sky-400/50' };
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-dark-900 relative w-full max-w-full overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="inline-block text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-sky-400/30">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Skills & <span className="text-gradient-blue">Competencies</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base">
            Languages, frameworks, and data science libraries I leverage to build scalable software.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalDetails.skills.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-5 sm:p-6 hover:border-sky-400/50 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-4 sm:mb-5 border-b border-blue-500/20">
                  <h3 className="text-base sm:text-lg font-bold text-sky-200">
                    {category.title}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-sky-300 border border-blue-400/30">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {category.skills.map((skill, idx) => {
                    const { icon, color, bg } = getSkillConfig(skill);
                    return (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 bg-dark-800/90 border border-blue-500/20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl ${bg} hover:bg-dark-700 transition-all duration-200 cursor-default group`}
                      >
                        <span className={`text-base sm:text-lg ${color} transition-transform group-hover:scale-110`}>
                          {icon}
                        </span>
                        <span className="text-slate-200 text-xs sm:text-sm font-medium">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;