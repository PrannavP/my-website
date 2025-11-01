export default function Skills() {
    const skills = ['React', 'Node.js', 'TypeScript', '.NET', 'AWS Cloud', 'Next.js', 'React Native', 'Python', 'SQL', 'RabbitMQ'];

    return (
        <section className="py-16" id="skills">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h2>
        
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="bg-gray-800 text-white rounded-lg p-4 text-center font-medium hover:bg-gray-700 transition-colors duration-200"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};