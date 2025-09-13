
import './Skills.css';

interface SkillsProps {
  skills: {
    category: string;
    items: string[];
  }[];
  certifications?: string[];
  awards?: string[];
}

export const Skills = (props: SkillsProps) => {
  const { skills, certifications = [], awards = [] } = props;
  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="skill-tags">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {(certifications.length > 0 || awards.length > 0) && (
          <div className="credentials">
            {certifications.length > 0 && (
              <div className="credentials-section">
                <h3 className="credentials-title">Certifications</h3>
                <ul className="credentials-list">
                  {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* {awards.length > 0 && (
              <div className="credentials-section">
                <h3 className="credentials-title">Awards & Recognition</h3>
                <ul className="credentials-list">
                  {awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        )}
      </div>
    </section>
  );
};
