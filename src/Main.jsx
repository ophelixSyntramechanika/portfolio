import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import GitHubSection from './Components/GitHubSection'
import Competencies from './Components/Competencies'
import ProfessionalJourney from './Components/ProfessionalJourney'
import Contact from './Components/Contact'

export const Main = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Competencies />
            <GitHubSection />
            <ProfessionalJourney />
            <Contact />

        </div>



    )
}
