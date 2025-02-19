import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";

import './styles/main.css';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
            </main>
        </div>
    );
};

export default App;