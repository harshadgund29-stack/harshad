import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from '@/components/StarBackground';
import { Navbar } from "./Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";



export const Home=()=>{
    return(
        <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
            {/* Theme Toggle */}
            <ThemeToggle/>


            {/* Background Effect */}
            <StarBackground/>


            {/* Navbar */}
            <Navbar/>


            {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>


            {/* Footer */}


        </div>
    );
}