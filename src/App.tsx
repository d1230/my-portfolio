import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { portfolioData } from './data/portfolio';
import './App.css';

function App() {
  const { personal, projects, skills, certifications, awards, social, openSource } = portfolioData;

  return (
    <div className="app">
      <Header 
        name={personal.name}
        role={personal.role}
        location={personal.location}
        valueStatement={personal.valueStatement}
        email={personal.email}
        resumeUrl={personal.resumeUrl}
      />
      
      <Projects projects={projects} />
      
      <Skills 
        skills={skills}
        certifications={certifications}
        awards={awards}
      />
      
      <Footer 
        social={social}
        openSource={openSource}
      />
    </div>
  );
}

export default App
