import { Heart, ArrowUp, Code } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Code className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Smit
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Frontend Developer crafting beautiful web experiences with modern technologies.
              Passionate about clean code, user experience, and continuous learning.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-500 fill-current animate-pulse" size={18} />
              <span>and lots of</span>
              <span className="text-cyan-400 font-semibold">caffeine</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:smit@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  smitpanchal3770@gmail.com
                </a>
              </li>
              <li>
                <a href="+91 7016450426" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  +91 7016450426
                </a>
              </li>
              <li className="text-gray-400">Remote Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Smit Panchal. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg border border-slate-700 hover:border-transparent transition-all duration-300 transform hover:scale-105"
            aria-label="Scroll to top"
          >
            <span className="text-gray-400 group-hover:text-white text-sm font-semibold">Back to Top</span>
            <ArrowUp size={18} className="text-gray-400 group-hover:text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
