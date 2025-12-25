import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'Full Stack Developer',
            company: 'Aegis Software Pvt. Ltd.',
            period: 'May 2025 - Present',
            description:
                'Joined as an intern and later promoted to trainee. Initially worked on an OTA (Online Travel Agency) platform, contributing to the Admin Portal using Next.js, .NET, and PostgreSQL. Currently working on the company’s core legacy HMS ERP (Hotel Management System – Enterprise Resource Planning), focusing on maintaining and enhancing ERP modules, implementing new features, optimizing backend logic and APIs, managing schemas, and improving UI performance and scalability.'
        },
        {
            role: 'Web Developer Intern',
            company: 'E-Prabidhi Pvt. Ltd.',
            period: 'June 2023 - July 2023',
            description:
                'Learning and applying full-stack development fundamentals, focusing on PHP and database management. Building and integrating backend APIs with frontend interfaces to create dynamic, data-driven web applications while improving understanding of server-client communication and deployment workflows.'
        }
    ];

    return (
        <section className="py-16" id="experience">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Experience</h2>
                
                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative pl-20 pb-12 last:pb-0">
                            {/* Timeline dot */}
                            <div className="absolute left-6 top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-50"></div>
            
                            {/* Content card */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition-all duration-200">
                                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                                        <p className="text-gray-600 font-medium flex items-center gap-2">
                                            <Briefcase size={16} />
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    );
};

export default Experience;