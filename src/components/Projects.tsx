const projects = [
    { name: 'BookMyTicket', link: 'https://github.com/PrannavP/BookMyTicket-Frontend' },
    { name: 'BhokMandu', link: 'https://github.com/PrannavP/BhokMandu' },
    { name: 'Service Center Management System', link: 'https://github.com/PrannavP/SCMS' },
    { name: 'URL Shortner', link: 'https://github.com/PrannavP/url-shortner' }
];

export const Projects = () => {
    return(
        <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <a 
                        key={project.name} 
                        href={project.link} 
                        className="project-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.name}
                    </a>
                ))}
            </div>
        </section>
    );
};