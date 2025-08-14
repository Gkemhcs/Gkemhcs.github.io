import React from 'react';
import Layout from '@theme/Layout';
import KavachAlert from '../components/KavachAlert';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "gudikotieswarmani@gmail.com",
      link: "mailto:gudikotieswarmani@gmail.com"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Andhra Pradesh, India",
      link: null
    }
  ];

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: "/img/linkedin.png",
      url: "https://www.linkedin.com/in/gkemhcs",
      color: "#0077b5"
    },
    {
      name: "GitHub",
      icon: "/img/github.png",
      url: "https://github.com/Gkemhcs",
      color: "#24292e"
    },
    {
      name: "LeetCode",
      icon: "/img/leetcode.png",
      url: "https://leetcode.com/gudikotieswarmani",
      color: "#ffa116"
    },
    {
      name: "Medium",
      icon: "/img/medium.png",
      url: "https://medium.com/@gudikotieswarmani",
      color: "#00ab6c"
    },
    {
      name: "Hashnode",
      icon: "/img/hashnode.png",
      url: "https://gcpgkemhcs.hashnode.dev/",
      color: "#2962ff"
    }
  ];

  return (
    <Layout
      title="Contact - Gudikoti Eswar Mani"
      description="Get in touch for collaborations, opportunities, or questions about backend development and DevOps projects."
    >
      <KavachAlert />
      <main className={styles.main}>
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.container}>
            <h1>Let's Connect</h1>
            <p>Ready to collaborate on your next cloud project or discuss opportunities?</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className={styles.contactInfo}>
          <div className={styles.container}>
            <h2>Get In Touch</h2>
            <div className={styles.contactGrid}>
              {contactInfo.map((contact, index) => (
                <div key={index} className={styles.contactCard}>
                  <div className={styles.contactIcon}>{contact.icon}</div>
                  <div className={styles.contactDetails}>
                    <h3>{contact.label}</h3>
                    {contact.link ? (
                      <a href={contact.link} className={styles.contactLink}>
                        {contact.value}
                      </a>
                    ) : (
                      <p>{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className={styles.socialMedia}>
          <div className={styles.container}>
            <h2>Connect With Me</h2>
            <p>Follow my journey and stay updated with my latest projects and insights</p>
            <div className={styles.socialGrid}>
              {socialMedia.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                  style={{'--hover-color': social.color} as React.CSSProperties}
                >
                  <div className={styles.socialIcon}>
                    <img src={social.icon} alt={social.name} />
                  </div>
                  <h3>{social.name}</h3>
                  <span className={styles.socialHandle}>
                    {social.name === 'LinkedIn' && 'gkemhcs'}
                    {social.name === 'GitHub' && 'Gkemhcs'}
                    {social.name === 'LeetCode' && 'gkemhcs'}
                    {social.name === 'Medium' && '@gudikotieswarmani'}
                    {social.name === 'Hashnode' && 'gcpgkemhcs.hashnode.dev'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise & Invitation */}
        <section className={styles.expertiseInvite}>
          <div className={styles.container}>
            <div className={styles.inviteContent}>
              <h2>Let's Connect and Innovate Together!</h2>
              <div className={styles.inviteText}>
                <p>
                  As a passionate student with a strong foundation in cloud technologies, I am eager to connect with industry professionals and explore new opportunities. My experience with Google Cloud Platform, Azure, and DevOps practices has equipped me with a diverse skill set that I am excited to apply in real-world scenarios.
                </p>
                <p>
                  I am actively seeking opportunities to work with innovative technologies and collaborate on projects that push the boundaries of what's possible. If you are interested in a dynamic mix of tools and technologies or simply want to discuss the latest trends in cloud computing and DevOps, let's connect!
                </p>
                <p>
                  I look forward to engaging with like-minded individuals and contributing to exciting projects. Reach out to me, and let's make great things happen together!
                </p>
              </div>
              
              <div className={styles.expertiseHighlights}>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>☁️</div>
                  <h4>Cloud Expertise</h4>
                  <p>GCP & Azure certified professional</p>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>🚀</div>
                  <h4>DevOps Skills</h4>
                  <p>CI/CD, Kubernetes, Infrastructure as Code</p>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>💻</div>
                  <h4>Development</h4>
                  <p>Python, Golang, Node.js, Microservices</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Start a Conversation?</h2>
            <p>Whether it's a project collaboration, job opportunity, or just a tech discussion, I'd love to hear from you!</p>
            <div className={styles.ctaButtons}>
              <a href="mailto:gudikotieswarmani@gmail.com" className={styles.primaryCtaButton}>
                📧 Send Email
              </a>
              <a href="https://www.linkedin.com/in/gkemhcs" target="_blank" rel="noopener noreferrer" className={styles.secondaryCtaButton}>
                💼 Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
