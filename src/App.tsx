import { useEffect } from "react";

// import { Header } from "./components/Header";
import Hero  from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Header from "./components/Header"
import Experience from "./components/Experience";

import './styles/main.css'

type VisitorData = {
    platform: string,
    userAgent: string,
    screen: {
        width: number,
        height: number,
        pixelRatio: number
    },
    language: string
};

const App = () => {
    // call visitor tracking api
    useEffect(() => {
        const data: VisitorData = {
            screen: {
                width: window.screen.width,
                height: window.screen.height,
                pixelRatio: window.devicePixelRatio
            },
            language: navigator.language,
            platform: navigator.platform,
            userAgent: navigator.userAgent
        };

        logVisitor(data);
    }, []) // no deps cause one time calling

    const logVisitor = async (data: VisitorData) => {
        try{
            const response = await fetch("http://localhost:3005/visit", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data })
            });

            console.log(response);
        }catch(err){
            throw new Error("Error logging visitor data.")
        }
    };

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