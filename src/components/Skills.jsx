import { useScrollReveal } from '../hooks/useAnimations';
import { SKILLS, SKILL_TOOLS, SKILL_CATEGORY_CONCEPTS, SKILL_CONTEXT, SKILL_STATUS, ENGLISH_PROFICIENCY, FOUNDATION_CARDS } from '../data/portfolioData';
import TechIcon from './TechIcon';

const CATEGORY_ICONS = {
  'Programming Languages': 'Python',
  'AI / Machine Learning / Data Science': 'PyTorch',
  'Frameworks & Libraries': 'React',
  Databases: 'PostgreSQL',
  'MLOps & Model Deployment': 'Docker',
  'Internet of Things (IoT)': 'ESP32',
  'Tools & Operating Systems': 'Git',
};

const CATEGORY_SYMBOLS = {
  'Computer Science Fundamentals': (
    <svg className="tech-icon tech-icon--symbol" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path d="m9 7-3 3 3 3m6-6 3 3-3 3M8 21h8m-4-4v4" />
    </svg>
  ),
  'Mathematics & Statistics for AI': (
    <svg className="tech-icon tech-icon--symbol" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M8 6h8M8 11h2m4 0h2M8 15h2m4 0h2M8 19h2m4 0h2" />
    </svg>
  ),
  'Machine Learning & Deep Learning Foundations': (
    <svg className="tech-icon tech-icon--symbol" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 5 5m-5 7 5-5m2-1 5-5m-5 7 5 5" />
      <circle cx="4" cy="4" r="2" /><circle cx="4" cy="20" r="2" />
      <circle cx="12" cy="12" r="2" /><circle cx="20" cy="4" r="2" /><circle cx="20" cy="20" r="2" />
    </svg>
  ),
  'English Proficiency': (
    <svg className="tech-icon tech-icon--symbol" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a17 17 0 0 1 0 18 17 17 0 0 1 0-18Z" />
    </svg>
  ),
  'Soft Skills': (
    <svg className="tech-icon tech-icon--symbol" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3" />
    </svg>
  ),
};

function SkillBar({ name, visible, delay }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <span className="skill-label" title={[name, SKILL_STATUS[name], SKILL_CONTEXT[name]].filter(Boolean).join(' — ')} style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)' }}>
          <TechIcon name={name} />
          {name}
          {SKILL_STATUS[name] && <span className="tech-badge skill-learning-label">{SKILL_STATUS[name]}</span>}
        </span>
      </div>
      {/* Decorative animated accent; no unverified proficiency rating. */}
      <div className="skill-bar-track" aria-hidden="true">
        <div
          className="skill-bar-fill"
          style={{ width: '100%', opacity: 0.35, transformOrigin: 'left', transform: visible ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 1.5s ease', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ category, skills, visible, cardDelay }) {
  const foundation = FOUNDATION_CARDS[category];
  return (
    <div
      className={`glass-card skill-category-card reveal-scale ${visible ? 'visible' : ''}`}
      style={{
        borderRadius: '16px',
        padding: '1.75rem',
        transitionDelay: `${cardDelay}ms`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top gradient accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
      }} />

      <div className="skill-card-header" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1.5rem',
      }}>
        <span className="skill-card-icon" style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(6,182,212,0.2))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
        }}>
          {CATEGORY_SYMBOLS[category] ? (
            <span className="tech-icon-group" aria-hidden="true">{CATEGORY_SYMBOLS[category]}</span>
          ) : <TechIcon name={CATEGORY_ICONS[category]} />}
        </span>
        <h3 title={SKILL_CATEGORY_CONCEPTS[category]?.join(' · ')} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>
          {category}
        </h3>
      </div>

      {category === 'English Proficiency' ? (
        <div className="english-proficiency-content">
          <div>
            <p className="english-exam-label">{ENGLISH_PROFICIENCY.label}</p>
            <p className="english-score" aria-label={`TOEIC Listening and Reading: ${ENGLISH_PROFICIENCY.score} out of ${ENGLISH_PROFICIENCY.maxScore}`}>
              <span className="gradient-text">{ENGLISH_PROFICIENCY.score}</span>
              <span className="english-score-total"> / {ENGLISH_PROFICIENCY.maxScore}</span>
            </p>
            <span className="tech-badge" title={`Current Status: ${ENGLISH_PROFICIENCY.status}`}>
              {ENGLISH_PROFICIENCY.badge}
            </span>
          </div>
          <p className="english-description">{ENGLISH_PROFICIENCY.description}</p>
          <div>
            <p className="english-exam-label">Focus</p>
            <div className="english-focus">
              {skills.map((focus) => <span key={focus} className="tech-badge">{focus}</span>)}
            </div>
          </div>
        </div>
      ) : foundation ? (
        <div className="foundation-knowledge-content">
          <span className="tech-badge foundation-status">{foundation.label}</span>
          <ul className="foundation-knowledge-list">
            {skills.map((topic) => (
              <li key={topic}>
                <span>{topic}</span>
                {foundation.learning !== 'all' && foundation.learning.includes(topic) && (
                  <span className="tech-badge skill-learning-label">Learning</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : skills.map((skill, i) => (
        <SkillBar
          key={skill}
          name={skill}
          visible={visible}
          delay={cardDelay + i * 120}
        />
      ))}
      {category === 'Tools & Operating Systems' && (
        <div className="skill-extra-tools">
          {SKILL_TOOLS.map((tool) => (
            <span key={tool} className="tech-badge" title={tool}>
              <TechIcon name={tool} />
              {tool}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  const [headingRef, headingVisible] = useScrollReveal(0.1);
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{
      padding: '6rem 1.5rem',
      position: 'relative',
      background: 'linear-gradient(180deg, transparent, rgba(37, 99, 235, 0.03), transparent)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div
          ref={headingRef}
          className={`reveal ${headingVisible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            Technical Skills
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: '1.1',
            marginTop: '0.75rem',
          }}>
            My{' '}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p style={{
            marginTop: '1rem',
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            maxWidth: '520px',
            margin: '1rem auto 0',
          }}>
            A software engineering foundation, with a growing focus on data and machine learning.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div
          ref={gridRef}
          className="skills-grid"
        >
          {categories.map(([category, skills], i) => (
            <CategoryCard
              key={category}
              category={category}
              skills={skills}
              visible={gridVisible}
              cardDelay={i * 100}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
