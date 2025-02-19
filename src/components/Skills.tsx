const skills = ['React', 'Node.js', 'TypeScript', '.NET', 'Java', 'PHP', "React Native"];

export const Skills = () => {
    return(
        <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill} className="skill-item">{skill}</div>
                ))}
            </div>
        </section>
    );
};