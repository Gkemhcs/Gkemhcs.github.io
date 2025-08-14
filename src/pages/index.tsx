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
                <h1 className={styles.heroTitle}>
                  <span className={styles.gradientText}>Backend & DevOps Engineer</span>
                  <br />
                  <span className={styles.name}>Gudikoti Eswar Mani</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  Building enterprise-grade backend systems, cloud-native architectures, and 
                  scalable infrastructure that powers millions of users
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>LeetCode Problems</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>10+</span>
                    <span className={styles.statLabel}>Production Systems</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>5+</span>
                    <span className={styles.statLabel}>Cloud Platforms</span>
                  </div>
                </div>
                <div className={styles.heroActions}>
                  <a href="/projects" className={styles.primaryButton}>
                    🚀 View My Work
                  </a>
                  <a href="/contact" className={styles.secondaryButton}>
                    💼 Let's Collaborate
                  </a>
                </div>
              </div>
              <div className={styles.heroImage}>
                <img src="/img/photo.jpg" alt="Gudikoti Eswar Mani" className={styles.profileImage} />
                <div className={styles.statusBadge}>
                  <span className={styles.statusDot}></span>
                  Available for opportunities
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className={styles.expertise}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.gradientText}>Technical Expertise</span>
            </h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>⚙️</div>
                <h3>Backend Engineering</h3>
                <p>High-performance Go services, microservices architecture, REST/gRPC APIs, and event-driven systems</p>
                <div className={styles.skills}>
                  <span className={styles.skill}>Go (Golang)</span>
                  <span className={styles.skill}>PostgreSQL</span>
                  <span className={styles.skill}>Redis</span>
                  <span className={styles.skill}>RabbitMQ</span>
                  <span className={styles.skill}>gRPC</span>
                </div>
              </div>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>☁️</div>
                <h3>Cloud & DevOps</h3>
                <p>Multi-cloud infrastructure, Kubernetes orchestration, CI/CD pipelines, and infrastructure as code</p>
                <div className={styles.skills}>
                  <span className={styles.skill}>Kubernetes</span>
                  <span className={styles.skill}>Docker</span>
                  <span className={styles.skill}>Terraform</span>
                  <span className={styles.skill}>GCP/Azure</span>
                  <span className={styles.skill}>GitHub Actions</span>
                </div>
              </div>
              <div className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>🏗️</div>
                <h3>System Design</h3>
                <p>Scalable architectures, distributed systems, high-level and low-level design, and performance optimization</p>
                <div className={styles.skills}>
                  <span className={styles.skill}>HLD/LLD</span>
                  <span className={styles.skill}>Microservices</span>
                  <span className={styles.skill}>Event Sourcing</span>
                  <span className={styles.skill}>CQRS</span>
                  <span className={styles.skill}>Load Balancing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Solving Section */}
        <section className={styles.problemSolving}>
          <div className={styles.container}>
            <div className={styles.problemSolvingContent}>
              <div className={styles.problemSolvingText}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.gradientText}>Problem Solver & Algorithm Expert</span>
                </h2>
                <p className={styles.problemSolvingDescription}>
                  Mastered 500+ LeetCode problems across dynamic programming, graph algorithms, 
                  system design, and data structures. Proven ability to tackle complex technical 
                  challenges and optimize solutions for production environments.
                </p>
                <div className={styles.leetcodeStats}>
                  <div className={styles.leetcodeStat}>
                    <span className={styles.leetcodeNumber}>500+</span>
                    <span className={styles.leetcodeLabel}>Problems Solved</span>
                  </div>
                  <div className={styles.leetcodeStat}>
                    <span className={styles.leetcodeNumber}>95%</span>
                    <span className={styles.leetcodeLabel}>Success Rate</span>
                  </div>
                  <div className={styles.leetcodeStat}>
                    <span className={styles.leetcodeNumber}>4.8★</span>
                    <span className={styles.leetcodeLabel}>Average Rating</span>
                  </div>
                </div>
                <a href="https://leetcode.com/gudikotieswarmani" target="_blank" rel="noopener noreferrer" className={styles.leetcodeButton}>
                  🏆 View LeetCode Profile
                </a>
              </div>
              <div className={styles.problemSolvingVisual}>
                <div className={styles.codeWindow}>
                  <div className={styles.codeHeader}>
                    <span className={styles.codeDot}></span>
                    <span className={styles.codeDot}></span>
                    <span className={styles.codeDot}></span>
                  </div>
                  <div className={styles.codeContent}>
                    <pre className={styles.code}>
{`// System Design: Rate Limiter
type RateLimiter struct {
    requests map[string][]time.Time
    limit    int
    window   time.Duration
}

func (rl *RateLimiter) Allow(key string) bool {
    now := time.Now()
    if requests, exists := rl.requests[key]; exists {
        // Clean old requests
        valid := filterValidRequests(requests, now, rl.window)
        if len(valid) >= rl.limit {
            return false
        }
        rl.requests[key] = append(valid, now)
    } else {
        rl.requests[key] = []time.Time{now}
    }
    return true
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className={styles.featuredProjects}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.gradientText}>Featured Projects</span>
            </h2>
            <div className={styles.projectShowcase}>
              <div className={styles.mainProject}>
                <div className={styles.projectContent}>
                  <h3>🛡️ Kavach - Enterprise Secrets Management</h3>
                  <p>Production-grade secrets management platform with multi-cloud integration, 
                     OAuth 2.0, RBAC, and comprehensive audit trails. Built with Go, PostgreSQL, 
                     and modern DevOps practices.</p>
                  <div className={styles.projectActions}>
                    <a href="https://docs.kavach.gkem.cloud" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                      📚 View Documentation
                    </a>
                    <a href="https://github.com/Gkemhcs/kavach" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                      🔗 GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectGrid}>
                <div className={styles.projectCard}>
                  <h4>⚙️ TaskPilot</h4>
                  <p>Production backend system with Go, PostgreSQL, RabbitMQ, and Prometheus</p>
                  <a href="https://github.com/Gkemhcs/Taskpilot.git" target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>
                <div className={styles.projectCard}>
                  <h4>🔄 Microservices Converter</h4>
                  <p>Go-based microservices with gRPC, Kubernetes, and observability stack</p>
                  <a href="https://github.com/Gkemhcs/microservices-converter-golang-grpc.git" target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>
                <div className={styles.projectCard}>
                  <h4>🛒 Vikraya E-commerce</h4>
                  <p>Multi-cluster GKE deployment with Anthos Service Mesh and monitoring</p>
                  <a href="https://github.com/Gkemhcs/vikraya-ecommerce.git" target="_blank" rel="noopener noreferrer">View Project →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className={styles.quickLinks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.gradientText}>Explore My Work</span>
            </h2>
            <div className={styles.linksGrid}>
              <a href="/projects" className={styles.linkCard}>
                <div className={styles.linkIcon}>🚀</div>
                <h3>All Projects</h3>
                <p>Complete portfolio of backend systems and cloud solutions</p>
              </a>
              <a href="/experience" className={styles.linkCard}>
                <div className={styles.linkIcon}>💼</div>
                <h3>Experience</h3>
                <p>Professional journey and technical achievements</p>
              </a>
              <a href="/certifications" className={styles.linkCard}>
                <div className={styles.linkIcon}>🏆</div>
                <h3>Certifications</h3>
                <p>Google Cloud and industry-recognized credentials</p>
              </a>
              <a href="/contact" className={styles.linkCard}>
                <div className={styles.linkIcon}>📧</div>
                <h3>Get In Touch</h3>
                <p>Let's discuss your next backend or DevOps project</p>
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's collaborate on your next enterprise backend system, cloud infrastructure, or DevOps automation project.</p>
            <div className={styles.ctaActions}>
              <a href="/contact" className={styles.ctaPrimary}>
                🚀 Start a Project
              </a>
              <a href="/projects" className={styles.ctaSecondary}>
                📋 View Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
