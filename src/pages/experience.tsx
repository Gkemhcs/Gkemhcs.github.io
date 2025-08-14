import React from 'react';
import Layout from '@theme/Layout';
import KavachAlert from '../components/KavachAlert';
import styles from './experience.module.css';

export default function Experience(): JSX.Element {
  const workExperience = [
    {
      title: "DevOps Engineer",
      company: "NYX",
      location: "Remote",
      tenure: "July 2024 - Present",
      logo: "/img/company_nyx.jpeg",
      responsibilities: [
        "Automated infrastructure with Terraform and optimized Kubernetes deployments using GitHub Actions and ArgoCD, implementing GPU-based AI workloads and ArgoCD notifications via Teams",
        "Established observability with Prometheus, Fluentd, and OpenTelemetry, optimized Docker builds with BuildKit caching to reduce build times by 50%, and deployed services on Cloud Run with CloudSQL integration.",
        "Managed data pipeline servers, configured OpenVPN for secure VM access, and handled critical incidents to ensure system reliability and performance.",
        "Led the seamless migration of all services from GCP to Azure, leveraging containers and serverless services to enhance scalability and cost efficiency."
      ],
      technologies: ["Terraform", "Kubernetes", "GitHub Actions", "ArgoCD", "Prometheus", "Docker", "Cloud Run", "Azure", "GCP"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      college: "RGUKT IIIT RK Valley, Kadapa, Andhra Pradesh, India",
      duration: "September 2021 - April 2025",
      description: "Comprehensive study of computer science fundamentals, software engineering principles, and modern computing technologies."
    }
  ];

  return (
    <Layout
      title="Experience - Gudikoti Eswar Mani"
      description="Professional experience and achievements in backend development, DevOps, and cloud infrastructure."
    >
      <KavachAlert />
      <main className={styles.main}>
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.container}>
            <h1>Professional Experience</h1>
            <p>My journey in DevOps, cloud engineering, and software development</p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className={styles.workExperience}>
          <div className={styles.container}>
            <h2>Work History</h2>
            <div className={styles.timeline}>
              {workExperience.map((job, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <div className={styles.markerDot}></div>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.jobCard}>
                      <div className={styles.jobHeader}>
                        <div className={styles.companyInfo}>
                          <img 
                            src={job.logo} 
                            alt={`${job.company} logo`} 
                            className={styles.companyLogo}
                          />
                          <div className={styles.jobDetails}>
                            <h3 className={styles.jobTitle}>{job.title}</h3>
                            <p className={styles.companyName}>{job.company}</p>
                            <p className={styles.jobLocation}>{job.location}</p>
                            <p className={styles.jobTenure}>{job.tenure}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={styles.jobBody}>
                        <h4>Key Responsibilities:</h4>
                        <ul className={styles.responsibilitiesList}>
                          {job.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex}>{responsibility}</li>
                          ))}
                        </ul>
                        
                        <div className={styles.technologiesSection}>
                          <h4>Technologies Used:</h4>
                          <div className={styles.technologiesGrid}>
                            {job.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className={styles.technologyTag}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.education}>
          <div className={styles.container}>
            <h2>Education</h2>
            <div className={styles.educationGrid}>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationCard}>
                  <div className={styles.educationIcon}>
                    <div className={styles.graduationCap}>🎓</div>
                  </div>
                  <div className={styles.educationContent}>
                    <h3>{edu.degree}</h3>
                    <p className={styles.educationField}>{edu.field}</p>
                    <p className={styles.educationCollege}>{edu.college}</p>
                    <p className={styles.educationDuration}>{edu.duration}</p>
                    <p className={styles.educationDescription}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className={styles.skillsSummary}>
          <div className={styles.container}>
            <h2>Core Competencies</h2>
            <div className={styles.skillsCategories}>
              <div className={styles.skillCategory}>
                <h3>Cloud & Infrastructure</h3>
                <p>Expertise in GCP and Azure, Kubernetes orchestration, and infrastructure automation</p>
              </div>
              <div className={styles.skillCategory}>
                <h3>DevOps & CI/CD</h3>
                <p>Proficient in GitHub Actions, ArgoCD, Terraform, and automated deployment pipelines</p>
              </div>
              <div className={styles.skillCategory}>
                <h3>Monitoring & Observability</h3>
                <p>Experience with Prometheus, OpenTelemetry, and comprehensive logging solutions</p>
              </div>
              <div className={styles.skillCategory}>
                <h3>Development</h3>
                <p>Strong background in Python, Golang, and cloud-native application development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Work Together?</h2>
            <p>Let's discuss how my experience can contribute to your next project or team.</p>
            <a href="/contact" className={styles.ctaButton}>
              Get In Touch
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
