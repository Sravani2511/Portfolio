/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  Terminal,
  Database,
  Cloud,
  BrainCircuit,
  Wrench
} from 'lucide-react';
import { motion } from 'motion/react';

const SectionTitle = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-2.5 mb-4 border-b border-navy-100 pb-2">
    <Icon className="w-5 h-5 text-navy-700" />
    <h2 className="text-[19px] font-bold tracking-wide text-navy-900 uppercase">{title}</h2>
  </div>
);

const Tag = ({ name, colorClass }: { name: string, colorClass?: string, key?: string }) => (
  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${colorClass || "bg-navy-50 text-navy-700 border-navy-100 hover:bg-navy-100"} transition-all hover:scale-105 cursor-default uppercase tracking-wider`}>
    {name}
  </span>
);

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 selection:bg-navy-100 leading-[1.6] relative">
      {/* Background Watermark */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-[0.08]">
        <img 
          src="https://logos-world.net/wp-content/uploads/2025/01/UNT-Logo.png" 
          alt="UNT Watermark" 
          className="w-[1000px] h-auto grayscale blur-[1px]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Header */}
      <header className="bg-navy-900/95 backdrop-blur-sm text-white pt-20 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start"
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-1 leading-none">
              SRAVANI MEKA
            </h1>
            <p className="text-2xl md:text-3xl font-extrabold text-navy-200 mb-8">
              MSCS | Data Engineer
            </p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-navy-400 font-bold uppercase tracking-widest">
              <a href="mailto:mekasravani24@gmail.com" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> mekasravani24@gmail.com
              </a>
              <span className="text-navy-800">|</span>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> 940-354-0196
              </div>
              <span className="text-navy-800">|</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Denton, TX
              </div>
              <span className="text-navy-800">|</span>
              <a href="https://linkedin.com/in/sravanimeka/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span className="text-navy-800">|</span>
              <a href="https://github.com/Sravani2511" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10 relative z-10">
        {/* Left Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-1 space-y-10"
        >
          {/* Education */}
          <section className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <SectionTitle icon={GraduationCap} title="Education" />
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-navy-900 text-xl tracking-tight group-hover:text-navy-600 transition-colors">University of North Texas</h3>
                  <span className="bg-navy-50 text-navy-700 px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest">GPA: 3.77</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-slate-500 font-semibold text-sm">Master of Science in Computer Science</p>
                  <p className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">Denton, TX</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50">
                  <p className="text-[10px] font-black text-navy-900/60 uppercase tracking-[0.2em] mb-3">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Algorithms', 'Operating Systems', 'Distributed & Parallel Database Systems', 'NLP', 'Big Data Foundations'].map(course => (
                      <Tag key={course} name={course} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group space-y-8">
            <SectionTitle icon={Code2} title="Technical Skills" />
            
            <div className="space-y-6">
              {[
                { label: "Languages", icon: Terminal, skills: ['Python', 'Java', 'SQL', 'PySpark', 'JavaScript', 'C#', 'C++'] },
                { label: "AI / ML", icon: BrainCircuit, skills: ['MLflow', 'HuggingFace', 'FastAPI', 'Scikit-learn', 'NLP', 'LLM Integration', 'GitHub Actions'] },
                { label: "Cloud & Platforms", icon: Cloud, skills: ['Azure ADF', 'ADLS', 'Databricks', 'Synapse', 'AWS Lambda', 'S3', 'DynamoDB', 'Kinesis'] },
                { label: "Data & Databases", icon: Database, skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Snowflake', 'Star-schema', 'ETL/ELT'] },
                { label: "Tools & Practices", icon: Wrench, skills: ['Docker', 'Terraform', 'Git', 'Jenkins', 'JIRA', 'Postman', 'Prometheus', 'Grafana', 'Agile'] }
              ].map((group, idx) => (
                <div key={group.label} className="space-y-2.5">
                  <div className="flex items-center gap-2 text-navy-800">
                    <group.icon className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">{group.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Tag key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <SectionTitle icon={Award} title="Certifications" />
            <a 
              href="https://learn.microsoft.com/api/credentials/share/en-us/SravaniMeka-5905/9F348A7AA6B6413D?sharingId=F0CD4C4F38EEDBE8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-5 border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-navy-200 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-navy-900 group-hover:text-navy-700 transition-colors">Azure Data Fundamentals</h3>
                  <p className="text-xs text-slate-400 font-medium">Microsoft</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-200 group-hover:text-navy-400 transition-colors" />
              </div>
            </a>
          </section>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-2 space-y-12"
        >
          {/* Work Experience */}
          <section className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <SectionTitle icon={Briefcase} title="Work Experience" />
            <div className="space-y-10">
              <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-slate-50">
                <div className="absolute w-4 h-4 bg-navy-900 rounded-full -left-[9px] top-1.5 border-4 border-white shadow-sm" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 leading-tight">Shell India Markets Pvt. Ltd</h3>
                    <p className="text-navy-600 font-bold text-lg">Associate Data Engineer</p>
                  </div>
                  <div className="md:text-right mt-1 md:mt-0">
                    <span className="text-[12px] font-bold text-navy-800 bg-navy-50 px-3 py-1 rounded-full border border-navy-100">2023 – 2024</span>
                    <p className="text-[11px] text-slate-400 mt-2 font-medium uppercase tracking-wider">Bengaluru, India</p>
                  </div>
                </div>
                
                <ul className="space-y-4 text-slate-600 text-[15px]">
                  <li className="flex gap-3">
                    <span className="text-navy-200 font-bold mt-1">•</span>
                    <span>Built and deployed production-grade AI-ready data pipelines using <strong className="text-navy-900">Python, PySpark, and SQL</strong>, processing 100GB+ structured datasets on Azure and AWS cloud platforms.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-navy-200 font-bold mt-1">•</span>
                    <span>Designed and implemented scalable API-integrated data services using <strong className="text-navy-900">FastAPI</strong>, enabling teams to consume clean, versioned datasets through REST endpoints.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-navy-200 font-bold mt-1">•</span>
                    <span>Automated data transformation and validation workflows, reducing manual effort by <strong className="text-navy-900">~30%</strong> and improving reliability via Azure Monitor and Application Insights.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-navy-200 font-bold mt-1">•</span>
                    <span>Collaborated cross-functionally with product managers and scientists to translate requirements into high-quality data solutions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-navy-200 font-bold mt-1">•</span>
                    <span>Wrote secure, maintainable code with unit tests; active participant in code reviews and Agile sprint planning.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Projects */}
          <section className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <SectionTitle icon={Terminal} title="Projects & Achievements" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* GrabNGo */}
              <motion.div 
                variants={itemVariants}
                className="group p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-navy-100 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-navy-700 transition-colors">GrabNGo</h3>
                  <a href="https://github.com/Sravani2511/Grab-N-Go" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-navy-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-[14px] text-slate-500 mb-6 leading-relaxed">
                  Full-stack cafeteria ordering system for academic environments. Handles real-time order management, custom pickup scheduling, and inventory controls.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Laravel', 'PHP', 'MySQL', 'JS'].map(t => (
                    <Tag key={t} name={t} />
                  ))}
                </div>
                <a 
                  href="https://github.com/Sravani2511/Grab-N-Go" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-bold text-navy-900 hover:text-navy-600 transition-colors uppercase tracking-widest"
                >
                  View Repository <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>

              {/* Retail Sales */}
              <motion.div 
                variants={itemVariants}
                className="group p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-navy-100 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-navy-700 transition-colors">Retail Data Warehouse</h3>
                  <a href="https://github.com/Sravani2511/Retail-Sales-Data-Warehouse" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-navy-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-[14px] text-slate-500 mb-6 leading-relaxed">
                  End-to-end data workflow analyzing 1M+ transactions. Implemented star schema architecture and interactive Power BI dashboards for revenue trends.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['PostgreSQL', 'PySpark', 'Power BI'].map(t => (
                    <Tag key={t} name={t} />
                  ))}
                </div>
                <a 
                  href="https://github.com/Sravani2511/Retail-Sales-Data-Warehouse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-bold text-navy-900 hover:text-navy-600 transition-colors uppercase tracking-widest"
                >
                  View Repository <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>

              {/* Hackathon */}
              <motion.div 
                variants={itemVariants}
                className="md:col-span-2 p-8 bg-navy-900/95 backdrop-blur-sm text-white rounded-xl shadow-lg relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-navy-800 rounded-full -mr-24 -mt-24 transition-transform group-hover:scale-110 duration-700 opacity-50" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-navy-800 rounded-xl">
                      <Award className="w-8 h-8 text-navy-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">UNT Sports Analytics Hackathon</h3>
                      <p className="text-navy-400 text-[11px] font-bold uppercase tracking-[0.3em]">2nd Place Winner</p>
                    </div>
                  </div>
                  <p className="text-navy-100 text-[15px] leading-relaxed max-w-2xl">
                    Engineered a custom impact index for IPL ball-by-ball data, incorporating strike rate and phase-wise performance. Built a comprehensive Power BI solution to support data-driven decision making.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </main>

      <footer className="bg-white/95 backdrop-blur-sm border-t border-slate-50 py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-slate-300 text-[12px] font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Sravani Meka | Professional Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
}
