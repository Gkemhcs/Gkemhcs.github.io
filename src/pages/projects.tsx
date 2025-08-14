import React from 'react';
import Layout from '@theme/Layout';
import KavachAlert from '../components/KavachAlert';
import styles from './projects.module.css';

export default function Projects(): JSX.Element {
  const projects = [
    {
      title: "🛡️ Kavach - Enterprise-Grade Secret Management Platform",
      tools: ["Go (Golang)", "PostgreSQL", "OAuth 2.0", "JWT", "RBAC", "Docker", "Terraform", "React", "TypeScript", "Docusaurus", "GitHub Actions", "Multi-Cloud Integration"],
      description: "A comprehensive, enterprise-grade secrets management platform providing secure, scalable, and auditable secret management with multi-cloud provider integration.",
      features: [
        "Enterprise Architecture: Clean architecture with layered design, PostgreSQL with SQLC, and comprehensive RBAC using Casbin",
        "Multi-Cloud Integration: GitHub, Google Cloud Platform Secret Manager, and Azure Key Vault synchronization",
        "Security & Compliance: End-to-end encryption, OAuth 2.0 authentication, JWT tokens, and comprehensive audit trails",
        "CLI Tool: Cross-platform command-line interface with multi-cloud provider integration and version control workflow",
        "Documentation: Professional-grade docs at docs.kavach.gkem.cloud built with Docusaurus and React",
        "Identity & Access Management: Fine-grained RBAC with owner, admin, editor, and viewer roles",
        "Secrets Management: Versioned storage with Git-like workflow, environment-based organization, and AES-256 encryption",
        "DevOps Excellence: Docker, Terraform, GitHub Actions CI/CD, and comprehensive testing with Testify",
        "Performance & Scalability: Database connection pooling, optimized queries, and horizontal scaling capabilities"
      ],
      architectureImage: "/img/kavach-architecture.jpg",
      githubLink: "https://github.com/Gkemhcs/kavach",
      documentationLink: "https://docs.kavach.gkem.cloud",
      category: "Secret Management Tool"
    },
    {
      title: "TaskPilot - Production-Grade Backend System",
      tools: ["Go (Golang)", "PostgreSQL", "JWT Authentication", "REST APIs", "RabbitMQ", "Prometheus", "Docker", "Swagger", "GitHub Actions", "Hexagonal Architecture", "sqlc", "Gin Framework"],
      description: "A clean, modular, and production-grade backend system designed for managing tasks and projects, built with Go, PostgreSQL, JWT Authentication, and REST APIs.",
      features: [
        "Secure JWT Auth: Access + refresh token rotation with context-based auth middleware",
        "Per-IP + Route-Based Rate Limiting: Prevent abuse using github.com/ulule/limiter/v3",
        "Prometheus Metrics: Per-route request counts, error tracking & latency histograms",
        "Clean Hexagonal Architecture: Domain-specific handlers, services, and types",
        "Typed DB Access with sqlc: Go code is generated from raw SQL queries, scoped per domain",
        "One-Command Docker Compose: Boots app, migrations, Prometheus, and PostgreSQL",
        "Auto Swagger Docs: Try-it-out UI + Bearer auth support",
        "Layered Unit Testing: Service logic and HTTP handlers tested with mocks & assertions",
        "Async Import/Export with RabbitMQ: Background job workers for Excel import/export",
        "Pluggable Cloud/Local File Storage: Unified interface to support GCP and local processing",
        "GitHub Actions CI: Automated test and build pipeline"
      ],
      architectureImage: "/img/taskpilot-architecture.jpg",
      githubLink: "https://github.com/Gkemhcs/Taskpilot.git",
      category: "Backend System"
    },
    {
      title: "Microservices Converter golang GRPC",
      tools: ["Kubernetes", "Golang", "GRPC", "Docker Compose", "OpenTelemetry", "Istio", "Helm", "Prometheus", "Google Cloud", "PostgreSQL", "Redis"],
      description: "A Go-based microservices system for media conversion with gRPC, Gin frontend, Cloud Storage, PostgreSQL, Redis, and integrated observability.",
      features: [
        "Microservices Architecture: Built with Go (Golang), this system includes independent services for media conversion tasks such as text-to-speech, video-to-audio, and image-to-PDF.",
        "Frontend Service: Uses the Gin framework to provide a user-friendly interface for users to interact with the services, supporting Google Sign-In for seamless authentication.",
        "gRPC Communication: Backend services communicate via gRPC, ensuring fast and efficient handling of media conversion tasks and file uploads to Google Cloud Storage.",
        "Observability: Each service is designed to be independent, scalable, and easy to maintain, with integrated OpenTelemetry for tracing, Zipkin for visualization, and Prometheus and Grafana for monitoring. The EFK stack (Elasticsearch, Fluentd, Kibana) handles logging and visualization.",
        "Storage: Using Cloud Storage to store output files and storing transactional data in PostgreSQL and storing user-sessions in Redis database"
      ],
      architectureImage: "/img/microservices-converter-golang-grpc-architecture.jpg",
      githubLink: "https://github.com/Gkemhcs/microservices-converter-golang-grpc.git",
      category: "Microservices"
    },
    {
      title: "Vikraya Ecommerce Microservice",
      tools: ["Google Kubernetes Engine", "Anthos Service Mesh", "Prometheus", "Firestore", "Cloud Run", "API Gateway", "Terraform"],
      description: "A simple ecommerce deployed in multiple GKE clusters and served through Multi-Cluster-Gateway",
      features: [
        "Orchestrated an e-commerce platform across multiple GKE clusters with a multi-cluster gateway for seamless service delivery across Global users.",
        "Implemented microservices architecture including frontend, authentication, cart, catalog, and order services, deployed as Kubernetes deployments and services.",
        "Ensured efficient and scalable session management with Redis Memorystore, while utilizing Cloud Firestore for robust data storage of user, catalog, and order information.",
        "Incorporated logging with Python library, Prometheus metrics for monitoring, and API gateway backed by Cloud Run for enhanced vector search capabilities."
      ],
      architectureImage: "/img/vikraya-architecture.jpg",
      githubLink: "https://github.com/Gkemhcs/vikraya-ecommerce.git",
      category: "E-commerce"
    },
    {
      title: "Serverless MicroServices Deployment in Azure",
      tools: ["Azure Functions", "Azure Container Instances", "Azure API Management", "Azure Monitor", "Azure DevOps", "Terraform"],
      description: "Modern serverless microservices architecture deployed on Azure with comprehensive monitoring and CI/CD pipelines.",
      features: [
        "Designed and implemented serverless microservices using Azure Functions and Azure Container Instances for optimal cost and performance.",
        "Integrated Azure API Management for centralized API governance and security.",
        "Implemented comprehensive monitoring with Azure Monitor and Application Insights for real-time observability.",
        "Automated deployment pipelines using Azure DevOps and Terraform for infrastructure as code."
      ],
      architectureImage: "/img/azure-architecture.jpg",
      githubLink: "https://github.com/Gkemhcs/azure-serverless-microservices",
      category: "Serverless"
    }
  ];

  return (
    <Layout
      title="Projects - Gudikoti Eswar Mani"
      description="Explore my portfolio of backend systems, cloud infrastructure, and DevOps projects. Each project demonstrates system design principles, scalability considerations, and production-ready implementation patterns."
    >
      <KavachAlert />
      <main className={styles.main}>
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.container}>
            <h1>My Projects</h1>
            <p>Explore my portfolio of backend systems, cloud infrastructure, and DevOps projects. Each project demonstrates system design principles, scalability considerations, and production-ready implementation patterns.</p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className={styles.projects}>
          <div className={styles.container}>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <div className={styles.projectCategory}>
                      <span className={styles.categoryTag}>{project.category}</span>
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </div>

                  <div className={styles.toolsSection}>
                    <h4>Technologies Used</h4>
                    <div className={styles.toolsGrid}>
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className={styles.toolTag}>{tool}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.featuresSection}>
                    <h4>Key Features</h4>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.projectActions}>
                    {project.architectureImage && (
                      <a 
                        href={project.architectureImage} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.architectureButton}
                      >
                        🏗️ View Architecture
                      </a>
                    )}
                    <div className={styles.projectLinks}>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                        <img src="/img/github.png" alt="GitHub" />
                        View on GitHub
                      </a>
                      {project.documentationLink && (
                        <a href={project.documentationLink} target="_blank" rel="noopener noreferrer" className={styles.docsLink}>
                          📚 View Documentation
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Interested in Collaborating?</h2>
            <p>Let's work together on your next cloud project or discuss potential opportunities.</p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.ctaButton}>
                Get In Touch
              </a>
              <a href="https://leetcode.com/gudikotieswarmani" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                View LeetCode Profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
