import React from 'react';
import Layout from '@theme/Layout';
import KavachAlert from '../components/KavachAlert';
import styles from './certifications.module.css';

export default function Certifications(): JSX.Element {
  const certifications = [
    {
      title: "Associate Google Cloud Engineer",
      description: "Demonstrates the ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.",
      credentialLink: "https://google.accredible.com/f574d5d9-d4a9-4870-89b9-74be798211f5",
      icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      category: "Associate Level",
      skills: ["Compute Engine", "Cloud Storage", "Cloud SQL", "VPC", "IAM", "Monitoring"]
    },
    {
      title: "Cloud Architect",
      description: "Shows expertise in designing, developing, and managing robust, secure, scalable, highly available, and dynamic solutions on Google Cloud Platform.",
      credentialLink: "https://google.accredible.com/90bde786-a419-41d2-acf9-417f1984a81c",
      icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      category: "Professional Level",
      skills: ["Architecture Design", "Security", "Scalability", "Cost Optimization", "Compliance", "Networking"]
    },
    {
      title: "Cloud Developer",
      description: "Proves ability to design, build, test, and deploy cloud-native applications that leverage Google Cloud services.",
      credentialLink: "https://google.accredible.com/9fbcf7c0-7c04-4be1-ab5e-383057e79a49",
      icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      category: "Professional Level",
      skills: ["App Engine", "Cloud Functions", "Cloud Run", "API Development", "Testing", "Deployment"]
    },
    {
      title: "Cloud DevOps Engineer",
      description: "Demonstrates expertise in building and managing CI/CD pipelines, monitoring systems, and infrastructure automation on Google Cloud Platform.",
      credentialLink: "https://google.accredible.com/55e687d5-c721-401e-9519-a2c0d761b9f8",
      icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      category: "Professional Level",
      skills: ["CI/CD", "Kubernetes", "Monitoring", "Logging", "Security", "Automation"]
    }
  ];

  return (
    <Layout
      title="Certifications - Gudikoti Eswar Mani"
      description="Professional certifications in Google Cloud Platform and other cloud technologies."
    >
      <KavachAlert />
      <main className={styles.main}>
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.container}>
            <h1>Professional Certifications</h1>
            <p>Google Cloud Professional certifications validating my expertise in cloud technologies</p>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className={styles.certifications}>
          <div className={styles.container}>
            <div className={styles.certificationsGrid}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certificationCard}>
                  <div className={styles.certificationHeader}>
                    <div className={styles.certificationIcon}>
                      <img src={cert.icon} alt="Google Cloud" />
                    </div>
                    <div className={styles.certificationInfo}>
                      <h3 className={styles.certificationTitle}>{cert.title}</h3>
                      <span className={styles.certificationCategory}>{cert.category}</span>
                    </div>
                  </div>
                  
                  <div className={styles.certificationBody}>
                    <p className={styles.certificationDescription}>{cert.description}</p>
                    
                    <div className={styles.skillsSection}>
                      <h4>Key Skills Validated:</h4>
                      <div className={styles.skillsGrid}>
                        {cert.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.certificationActions}>
                    <a 
                      href={cert.credentialLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.credentialButton}
                    >
                      🔗 View Credential
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Journey */}
        <section className={styles.journey}>
          <div className={styles.container}>
            <h2>My Certification Journey</h2>
            <div className={styles.journeyContent}>
              <div className={styles.journeyStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Associate Level</h3>
                  <p>Started with the Associate Cloud Engineer certification to build a solid foundation in Google Cloud fundamentals.</p>
                </div>
              </div>
              <div className={styles.journeyStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Professional Level</h3>
                  <p>Advanced to professional certifications in Cloud Architecture, Development, and DevOps Engineering.</p>
                </div>
              </div>
              <div className={styles.journeyStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Continuous Learning</h3>
                  <p>Maintaining certifications and staying updated with the latest Google Cloud technologies and best practices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Discuss Cloud Solutions?</h2>
            <p>Let's explore how my certified expertise can benefit your next project.</p>
            <a href="/contact" className={styles.ctaButton}>
              Get In Touch
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
