import { ExternalLink, Github, Star } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Modern shopping experience with advanced cart management, real-time inventory, secure payments, and personalized recommendations.',
      image: 'https://i.pinimg.com/originals/13/df/65/13df65030e87b21dc840689e8daeb82e.jpg',
      technologies: ['JavaScript', 'CSS3', 'Bootstrap'],
      liveLink: 'https://puma-webbb.onrender.com/',
      githubLink: 'https://github.com/Smit3770/Puma_Webbb'
    },
    {
      title: 'Woody Carpentry Services Web Template ',
      description:
        'Created a responsive landing page for carpentry services using HTML, CSS, and Bootstrap..',
      image: 'https://i.pinimg.com/originals/54/4b/cc/544bcc13baa2fe4b166506bcd3fb3705.jpg',
      technologies: ['HTML5','CSS','Bootstrap'],
      liveLink: 'https://683ea075f80bc42112beb823--earnest-zabaione-5afef2.netlify.app/',
      githubLink: 'https://github.com/Smit3770/project_1'
    },
    {
      title: 'Bleak blog Template ',
      description:
        'Created a responsive landing page for carpentry services using HTML, CSS, and Bootstrap..',
      image: 'https://c8.alamy.com/comp/J21CT2/the-blog-word-cloud-as-background-J21CT2.jpg',
      technologies: ['HTML5','CSS','Bootstrap'],
      liveLink: 'https://project-2-1gk8.onrender.com/',
      githubLink: 'https://github.com/Smit3770/project_2'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Showcasing my best work and creative solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-xs font-semibold">
                  <Star size={12} className="fill-current" />
                  <span>Featured</span>
                </div>
              )}

              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.liveLink}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                    aria-label="View live project"
                    target='_blank'
                  >
                    <ExternalLink className="text-slate-900" size={18} />
                    <span className="text-slate-900 font-semibold text-sm">Live</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-900/90 backdrop-blur-sm rounded-lg hover:bg-slate-900 border border-white/20 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="text-white" size={18} />
                    <span className="text-white font-semibold text-sm">Code</span>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-lg border border-slate-600 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
