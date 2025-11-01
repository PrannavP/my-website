import {
    Github,
    Linkedin,
    Mail,
    Instagram,
    Twitter,
} from 'lucide-react';

const Hero = () => {
    const socialLinks = [
        { icon: <Github size={22} />, url: 'https://github.com/PrannavP', label: 'GitHub' },
        { icon: <Instagram size={22} />, url: 'https://instagram.com/pr4nnv.p', label: 'Instagram' },
        { icon: <Linkedin size={22} />, url: 'https://www.linkedin.com/in/prannav-panta-143359193/', label: 'LinkedIn' },
        { icon: <Twitter size={22} />, url: 'https://x.com/prannavlol', label: 'Twitter' },
        { icon: <Mail size={22} />, url: 'mailto:prannavpanta59@gmail.com', label: 'Email' }
    ];

    return (
        <section className="py-20 text-center" id="hero">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Prannav Panta
            </h1>
            
            <p className="text-2xl text-gray-600 mb-12">
                Full Stack Developer
            </p>
            
            <div className="flex gap-4 justify-center">
                {socialLinks.map((social, idx) => (
                    <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-gray-700 hover:text-blue-500 transition-all duration-200 hover:scale-110"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Hero;