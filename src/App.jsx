import './App.css'
import AboutSection from './component/About'
import CoreCompetencies from './component/coreCompe'
import EducationSection from './component/Education'
import Footer from './component/footer'
import PortfolioHeader from './component/Navbar'
import ProjectShowcase from './component/ProjectShowCase'
import SoftSkillsSection from './component/softskill'

function App() {

  return (
    <>
      <PortfolioHeader/>
      <AboutSection/>
      <CoreCompetencies/>
      <ProjectShowcase/>
      <EducationSection/>
      <SoftSkillsSection/>
      <Footer/>
    </>
  )
}

export default App
