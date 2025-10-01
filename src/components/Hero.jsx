import { Download, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-full">
            <Sparkles className="text-cyan-400" size={18} />
            <span className="text-cyan-400 text-sm font-medium">Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Smit Panchal
            </span>
          </h1>

          <div className="space-y-4">
            <p className="text-2xl sm:text-3xl text-gray-300 font-semibold">
              Frontend Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful, responsive, and user-centric web experiences with modern technologies.
              Passionate about clean code and pixel-perfect designs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href="https://drive.google.com/file/d/1hEKHs85tdqb4ARYVIiEWm2B5xSeGVXi2/view?usp=sharing"
              download="Smit_Resume.pdf"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 font-semibold"
              target='_blank'
            >
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('projects')}
              className="group inline-flex items-center px-8 py-4 bg-slate-800 text-white rounded-xl hover:bg-slate-700 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}
