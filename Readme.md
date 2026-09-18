# Interactive Terminal Portfolio Website

An interactive, terminal-themed personal portfolio website hosted on AWS EC2, fully containerized with Docker, and secured with free HTTPS via Let's Encrypt and DuckDNS.

**Live Demo:** [https://adarshcloudev.duckdns.org](https://adarshcloudev.duckdns.org)

---

## 🛠️ Tech Stack & Infrastructure

- **Frontend:** HTML5, CSS3, JavaScript (Terminal Interface)
- **Containerization:** Docker & Docker Compose
- **Web Server & Reverse Proxy:** Nginx
- **Hosting Platform:** AWS EC2 (Ubuntu Linux)
- **Domain & DNS:** DuckDNS
- **SSL/TLS Security:** Let's Encrypt (Certbot)

---

## 🚀 Architecture Overview

1. **Nginx Reverse Proxy:** Handles incoming requests on ports 80 (HTTP) and 443 (HTTPS).
2. **HTTP Redirect:** Automatically redirects all unencrypted HTTP traffic to secure HTTPS.
3. **Docker Compose:** Manages container lifecycles, port bindings, and mounts SSL certificates directly into Nginx.
4. **DuckDNS Integration:** Resolves dynamic DNS to the AWS EC2 Elastic/Public IP.

---

## 📂 Project Structure

```text
portfolio-website/
├── Dockerfile              # Builds Nginx Alpine image with static files
├── docker-compose.yml      # Service definitions, volumes, and port mappings
├── nginx.conf              # Reverse proxy configuration & SSL certificate paths
├── index.html              # Main terminal user interface
├── style.css               # Terminal theme styling
├── script.js               # Command-line logic and interactivity
└── README.md               # Project documentation
