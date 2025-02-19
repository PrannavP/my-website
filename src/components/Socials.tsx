import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

export const Socials = () => {
    const socialLinks = [
        {
            icon: <FaGithub />,
            url: "https://github.com/PrannavP"
        },
        {
            icon: <FaInstagram />,
            url: "https://instagram.com/pr4nnv.p"
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/prannav-panta-143359193/"
        },
        {
            icon: <FaTwitter />,
            url: "https://x.com/prannavlol"
        },
        {
            icon: <FaEnvelope />,
            url: "mailto:prannavpanta59@gmail.com"
        }
    ];

    return(
        <section className="socials-sections" style={{marginTop: "2rem", marginBottom: "0.5rem"}}>
            <div className="socials-container">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                    {link.icon}
                    </a>
                ))}
            </div>
        </section>
    );
};