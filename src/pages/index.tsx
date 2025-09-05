import React from 'react';
import Layout from '@theme/Layout';
import KavachAlert from '../components/KavachAlert';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Gudikoti Eswar Mani - Backend & DevOps Engineer"
      description="Enterprise-grade backend systems, cloud infrastructure, and DevOps automation. Expert in Go, Kubernetes, system design, and scalable architectures."
    >
      <KavachAlert />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1>Gudikoti Eswar Mani</h1>
                <h2>Backend & DevOps Engineer</h2>
                <p>Expert in building scalable backend systems, deploying cloud-native applications, and architecting DevOps solutions. Proficient in both backend development and infrastructure deployment.</p>
                <div className={styles.availability}>
                  <span className={styles.availabilityDot}></span>
                  Available for opportunities
                </div>
              </div>
              <div className={styles.heroImage}>
                <img src="/img/photo.jpg" alt="Gudikoti Eswar Mani" />
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary Section */}
        <section className={styles.summary}>
          <div className={styles.container}>
            <h2>Professional Summary</h2>
            <div className={styles.summaryContent}>
              <p>
                I am a passionate Backend & DevOps Engineer with expertise in building scalable, 
                production-ready systems. My focus is on backend development using Go (Golang), 
                Python, and Node.js, with deep knowledge of cloud-native technologies and DevOps practices.
              </p>
              <p>
                I specialize in designing and implementing microservices architectures, 
                system design (HLD/LLD), and computational thinking for complex problem-solving. 
                Successfully architected systems handling concurrent users, implemented distributed rate limiting, 
                and designed scalable database schemas. My experience spans across Google Cloud Platform, Azure
                with a keen interest in cloud-native tools and practices.
              </p>
              <p>
                I have solved 300+ LeetCode problems, demonstrating strong problem-solving skills 
                and algorithmic thinking. This foundation enables me to design efficient, 
                scalable solutions for enterprise applications. I excel at system design, 
                computational thinking, and translating algorithmic concepts into scalable backend architectures.
                Successfully reduced cloud costs by 60% and improved build speeds by 50% through optimization techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Skills & Technologies Section */}
        <section className={styles.skills}>
          <div className={styles.container}>
            <h2>Skills & Technologies</h2>
            
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>Software Development & Core CS</h3>
                <ul>
                  <li><strong>Programming Languages:</strong> Golang, Python (Flask), Node.js, Bash</li>
                  <li><strong>Core CS Subjects:</strong> Operating Systems, Computer Networks, DBMS</li>
                  <li><strong>Problem Solving:</strong> 300+ LeetCode Problems, Algorithmic Thinking</li>
                  <li><strong>System Design:</strong> HLD/LLD, Scalable Architectures, Microservices</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Cloud & DevOps</h3>
                <ul>
                  <li><strong>Cloud Platforms:</strong> Google Cloud Platform (GCP), Microsoft Azure</li>
                  <li><strong>Kubernetes & Containers:</strong> Kubernetes, Docker, Helm, Istio, External Secrets</li>
                  <li><strong>Infrastructure as Code:</strong> Terraform, Ansible, Crossplane, Bicep</li>
                  <li><strong>CI/CD & GitOps:</strong> GitHub Actions, ArgoCD, Jenkins, Azure Pipelines, Cloud Build</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h3>Monitoring & Serverless</h3>
                <ul>
                  <li><strong>Monitoring & Observability:</strong> Prometheus, Grafana, OpenTelemetry, EFK Stack, Stackdriver</li>
                  <li><strong>Serverless & Event-Driven:</strong> GCP Cloud Run, Cloud Functions, Azure Functions, Dapr, Container Apps</li>
                  <li><strong>Security & Compliance:</strong> RBAC, OAuth 2.0, Secret Management, Audit Trails</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Achievements Section */}
        <section className={styles.technicalAchievements}>
          <div className={styles.container}>
            <h2>Technical Achievements & Impact</h2>
            <div className={styles.achievementsGrid}>
              <div className={styles.achievementCard}>
                <h3>🏗️ System Architecture</h3>
                <p>Designed and implemented distributed rate limiting systems, scalable microservices architectures, and optimized database schemas for high-performance applications.</p>
              </div>
              <div className={styles.achievementCard}>
                <h3>⚡ Performance Optimization</h3>
                <p>Achieved 50% improvement in Docker build speeds using BuildKit caching, implemented efficient caching strategies, and optimized database queries for better response times.</p>
              </div>
              <div className={styles.achievementCard}>
                <h3>💰 Cost Optimization</h3>
                <p>Successfully reduced cloud infrastructure costs by 60% through workload right-sizing, autoscaling policies, and efficient resource utilization across GCP and Azure.</p>
              </div>
              <div className={styles.achievementCard}>
                <h3>🔄 Infrastructure Migration</h3>
                <p>Led complete migration from GCP to Azure with zero downtime, leveraging containers and serverless technologies while maintaining system reliability and performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className={styles.featuredProjects}>
          <div className={styles.container}>
            <h2>Featured Projects</h2>
            <div className={styles.projectGrid}>
              <div className={styles.projectCard}>
                <h3>🛡️ Kavach - Secret Management Platform</h3>
                <p>Enterprise-grade secrets management with multi-cloud integration, built with Go, PostgreSQL, and comprehensive security features.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/Gkemhcs/kavach-cli" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View on GitHub
                  </a>
                  <a href="https://docs.kavach.gkem.cloud" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Documentation
                  </a>
                </div>
              </div>

              <div className={styles.projectCard}>
                <h3>⚙️ TaskPilot - Backend System</h3>
                <p>Production-grade backend system with Go, PostgreSQL, JWT authentication, and RabbitMQ messaging.</p>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/Gkemhcs/Taskpilot.git" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className={styles.quickLinks}>
          <div className={styles.container}>
            <h2>Quick Navigation</h2>
            <div className={styles.linksGrid}>
              <a href="/projects" className={styles.quickLink}>
                <h3>View All Projects</h3>
                <p>Explore my complete portfolio of backend systems and DevOps solutions</p>
              </a>
              <a href="/experience" className={styles.quickLink}>
                <h3>Professional Experience</h3>
                <p>Learn about my work history and achievements in backend development</p>
              </a>
              <a href="/certifications" className={styles.quickLink}>
                <h3>Certifications</h3>
                <p>View my cloud platform and technology certifications</p>
              </a>
              <a href="/contact" className={styles.quickLink}>
                <h3>Get In Touch</h3>
                <p>Ready to discuss opportunities or collaborations</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
