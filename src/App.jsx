import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="#home" className="logo">
          DY<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            href="/Durgesh_Yadav%20Resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            download="Durgesh_Yadav_Resume.pdf"
            >
            Download Resume ↓
          </a>
        </div>
      </nav>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <p className="tag">AVAILABLE FOR INTERNSHIPS</p>

            <p className="intro">HELLO, I'M</p>

            <h1>
              Durgesh Kumar
              <br />
              <span>Yadav.</span>
            </h1>

            <h2>Data Analyst | Data Science Enthusiast</h2>

            <p className="description">
              I transform raw data into meaningful insights using Python,
              SQL, Power BI, Excel, and Machine Learning.
            </p>

            <div className="buttons">
              <a href="#projects" className="btn primary">
                Explore My Projects ↗
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>

            <div className="socials">
              <a
                href="https://www.linkedin.com/in/dky68/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="https://github.com/DurgeshJii" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="mailto:justdurgesh68@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-glow"></div>

            <img
              src="profile.png.png"
              alt="Durgesh Kumar Yadav - Data Analyst"
              className="hero-photo"
            />

            <div className="photo-caption">
              <span>✳</span> DATA ANALYST & ML ENTHUSIAST
            </div>
          </div>
        </section>

        <section className="section container" id="about">
          <p className="tag">01 — ABOUT ME</p>
          <h2 className="section-title">Curiosity meets data.</h2>

          <p className="section-text">
             I'm a Computer Science undergraduate pursuing my B.Tech at CCS
              University (2023–2027). I have practical experience in Data Analytics
              and Data Science through internships and projects. I'm passionate
              about Python, SQL, Power BI, Machine Learning, and transforming
              complex data into meaningful business insights.
          </p>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <p className="tag">02 — MY SKILLS</p>
            <h2 className="section-title">Tools of my trade.</h2>

            <div className="skills-grid">
              {[
                "Python",
                "SQL",
                "Excel",
                "Power BI",
                "Pandas",
                "NumPy",
                "Machine Learning",
                "Statistics",
                "Scikit-learn",
                "Data Visualization",
                "Git & GitHub",
              ].map((skill) => (
                <div className="skill" key={skill}>
                  <span>✳</span> {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <p className="tag">03 — PORTFOLIO</p>
          <h2 className="section-title">Featured projects.</h2>

          <div className="projects-grid">
            <article className="project">
              <span className="project-no">PROJECT 01</span>
              <h3>Credit Card Fraud Detection</h3>
              <p>
                Machine learning models for identifying potentially fraudulent
                transactions in an imbalanced dataset.
              </p>
              <div className="tech-list">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>SMOTE</span>
              </div>
              <a href="https://github.com/DurgeshJii/-Credit-Card-Fraud-Detection-using-Machine-Learning" target="_blank" rel="noreferrer">
                View Project ↗
              </a>
            </article>

            <article className="project">
              <span className="project-no">PROJECT 02</span>
              <h3>Heart Attack Prediction</h3>
              <p>
                A predictive modeling project exploring health-related
                features and machine learning techniques.
              </p>
              <div className="tech-list">
                <span>Python</span>
                <span>Pandas</span>
                <span>ML</span>
              </div>
              <a href="https://github.com/DurgeshJii/Heart-Disease-Prediction-Using-Machine-Learning-" target="_blank" rel="noreferrer">
                View Project ↗
              </a>
            </article>

            <article className="project">
              <span className="project-no">PROJECT 03</span>
              <h3>American Express Stock Prediction</h3>
              <p>
                Historical stock data analysis using date-based features and
                Random Forest regression.
              </p>
              <div className="tech-list">
                <span>Python</span>
                <span>Pandas</span>
                <span>Random Forest</span>
              </div>
              <a href="https://github.com/DurgeshJii/-AmEx-Stock-Price-Prediction-using-Machine-Learning" target="_blank" rel="noreferrer">
                View Project ↗
              </a>
            </article>

            <article className="project">
              <span className="project-no">PROJECT 04</span>
              <h3>Blinkit Sales Analytics Dashboard"</h3>
              <p>
                Sales analysis and business performance visualization using
                KPIs and interactive dashboards.
              </p>
              <div className="tech-list">
                <span>Power BI</span>
                <span>Excel</span>
                <span>SQL</span>
              </div>
              <a href="https://github.com/DurgeshJii/Blinkit-Sales-Analytics-PowerBI" target="_blank" rel="noreferrer">
                View Project ↗
              </a>
            </article>
          </div>
        </section>

        <section className="section container" id="experience">
            <p className="tag">04 — EXPERIENCE</p>
            <h2 className="section-title">My professional journey.</h2>

            <div className="experience-timeline">

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span>Aug 2026 — Sep 2026</span>
                  <h3>Data Analyst Intern</h3>
                  <h4>InAmigos Foundation</h4>
                  <p>
                    Conducted NGO research, prepared AI-driven data analysis reports,
                    and explored volunteer opportunities to support social impact initiatives.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span>Jun 2026 — Sep 2026</span>
                  <h3>Data Science Intern</h3>
                  <h4>iStudio Technologies</h4>
                  <p>
                    Worked on machine learning model development, training, testing,
                    and evaluating predictive models.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span>Sep 2025 — Oct 2025</span>
                  <h3>Data Analyst</h3>
                  <h4>CodeAlpha</h4>
                  <p>
                    Analyzed sales data using Excel and SQL, performed exploratory
                    data analysis with Python, and developed Power BI dashboards.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span>Feb 2025 — Aug 2025</span>
                  <h3>Data Analyst Intern</h3>
                  <h4>iStudio Technologies</h4>
                  <p>
                    Gained practical experience in data cleaning, data manipulation,
                    exploratory analysis, and data visualization.
                  </p>
                </div>
              </div>

            </div>
          </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <p className="tag">05 — CONTACT</p>
            <h2>
              Let's build something
              <br />
              <span>meaningful.</span>
            </h2>

            <p>
              I'm open to Data Analyst, Data Science, and AI/ML internship
              opportunities.
            </p>

            <a
              href="https://www.linkedin.com/in/dky68"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Connect With Me ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a href="#home" className="logo">
          DY<span>.</span>
        </a>
        <p>© 2026 Durgesh Kumar Yadav</p>
        <a href="#home">Back to Top ↑</a>
      </footer>
    </div>
  );
}

export default App;