import { Target, Zap, Trophy, Heart } from 'lucide-react';

export default function About() {
  const qualities = [
    {
      icon: Target,
      title: 'Focused',
      description: 'Laser-focused on delivering high-quality results that exceed expectations',
      color: 'cyan',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quick to adapt and master new technologies and frameworks',
      color: 'blue',
    },
    {
      icon: Trophy,
      title: 'Achiever',
      description: 'Committed to excellence and continuous improvement in every project',
      color: 'purple',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Love what I do and it shows in the quality of my work',
      color: 'pink',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate frontend developer with a keen eye for design and a love for
                  creating seamless user experiences. My journey in web development started with
                  curiosity and has grown into a career I'm truly passionate about.
                </p>
                <p>
                  I specialize in building responsive, accessible, and performant web applications
                  using modern technologies like React, JavaScript, and CSS frameworks. I believe
                  in writing clean, maintainable code that not only works but is also a pleasure
                  to work with.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new frameworks, contributing to
                  open-source projects, or learning about the latest web development trends. I'm
                  always excited to take on new challenges and collaborate with others.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {qualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="mb-4">
                    <div className={`inline-flex p-3 bg-gradient-to-br from-${quality.color}-500 to-${quality.color}-600 rounded-xl`}>
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{quality.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{quality.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
