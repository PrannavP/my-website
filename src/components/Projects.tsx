import { ExternalLink, } from 'lucide-react';

const Projects = () => {
    const projects = [
        { name: 'BookMyTicket', link: 'https://github.com/PrannavP/BookMyTicket-Frontend' },
        { name: 'BhokMandu', link: 'https://github.com/PrannavP/BhokMandu' },
        { name: 'Service Center Management System', link: 'https://github.com/PrannavP/SCMS' },
        { name: 'URL Shortener', link: 'https://github.com/PrannavP/url-shortner' },
        { name: 'HR Analytics System', link: 'https://github.com/PrannavP/hrm-system-hr-frontend' },
        { name: 'File Sharing Web App', link: 'https://github.com/PrannavP/File-Sharing-Webapp' }
    ];

    return (
        <section className="py-16" id="projects">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition-all duration-200 group"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-500 transition-colors duration-200">
                                {project.name}
                            </h3>
                            <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;