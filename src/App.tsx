// import { Header } from "./components/Header";
import Hero  from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Header from "./components/Header"
import Experience from "./components/Experience";

import './styles/main.css'

const App = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-6xl mx-auto px-6">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default App;