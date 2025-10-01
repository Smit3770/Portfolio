import { FileCode, Palette, Layers, Sparkles, Code, Wrench, Database } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'HTML5', icon: FileCode, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: Palette, color: 'from-blue-500 to-cyan-500' },
    { name: 'Bootstrap', icon: Layers, color: 'from-purple-500 to-pink-500' },
    { name: 'React', icon: Sparkles, color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', icon: Code, color: 'from-yellow-500 to-orange-500' },
    { name: 'jQuery', icon: Wrench, color: 'from-blue-600 to-indigo-600' },
    { name: 'C/C++', icon: Database, color: 'from-gray-500 to-slate-600' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Technologies I use to bring ideas to life</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 bg-gradient-to-br ${skill.color} rounded-xl shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <span className="text-3xl font-bold text-cyan-400">{skill.level}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>

                  <div className="relative w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              7+
            </div>
            <div className="text-gray-400">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-400">Hours of Coding</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              ∞
            </div>
            <div className="text-gray-400">Learning Never Stops</div>
          </div>
        </div>
      </div>
    </section>
  );
}
