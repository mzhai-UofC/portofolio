<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Industrial-Grade OOD - Web Comic System</title>
<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
mermaid.initialize({ 
    startOnLoad: true, 
    flowchart: { 
        curve: 'orthogonal', 
        nodeSpacing: 60, 
        rankSpacing: 80,
        useMaxWidth: true   // 自动撑开节点宽度适应文字
    },
    themeVariables: {
        fontFamily: '"KaiTi", "STKaiti", "KaiTi SC", "Arial", sans-serif',
        fontSize: '1.5rem',
        primaryTextColor: '#ffffff',
        primaryColor: '#fbc02d',
        primaryBorderColor: '#fff',
        primaryTextColorOnPrimary: '#000000'
    }
});
</script>
<style>
body {
    background-color: #1e1e1e;
    color: #fff;
    font-family: 'KaiTi', 'STKaiti', 'KaiTi SC', 'Arial', sans-serif;
    margin: 20px;
    line-height: 1.6;
}
h1, h2 { text-align: center; }
h2 { margin-top: 30px; }
p { line-height: 1.6; 
    font-size:1.5em;}
.card {
    border-radius: 8px;
    padding: 15px 20px;
    margin: 15px 0;
    background-color: rgba(255,255,255,0.05);
}
ul { padding-left: 20px; 
    font-size:1.5em;}
.label {
    display:inline-block;
    background-color:#333;
    color:#fff;
    padding:4px 8px;
    border-radius:4px;
    margin-right:6px;
    font-size:1.5em;
}
.stack-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
}
.stack-icons .label {
    background-color: #444;
}
.mermaid {
    margin-top: 20px;
    background-color: rgba(255,255,255,0.03);
    border-radius: 10px;
    padding: 20px;
}
</style>
</head>
<body>

<h1>Fat Bun Universe - Web Comic & E-Commerce Platform</h1>

<h2>Project Background</h2>
<div class="card">
    <h3>Story</h3>
    <p>I created my own original comic IP <strong>"Pan Pan Rabbit"</strong>, and got nominated for the <img src="./appicon.png" alt="Comic Icon" width="20" style="vertical-align: middle;"> Xingmanhua The 1st Global 4-Panel Comic Competition in 2021. That recognition helped me gather a small but loyal fanbase, and I started thinking: why not give them a proper home to follow the comics, get updates, and even grab some fun merchandise?
    </p>
    <h3>Goals</h3>
    <p>So I set out to build an official website for my brand <strong>"Fat Bun Universe"</strong>, with three main goals:</p>
    <ul>
        <li>Let fans read the comics effortlessly for free.</li>
        <li>Provide official updates and news.</li>
        <li>Offer merchandise and brand goodies.</li>
    </ul>
    <h3>Challenge</h3>
    <p>But I didn’t want to spend any money 💸, so I started reaseaching for how to build a full-featured site with free hosting, CMS, while keeping the system scalable, maintainable, modular, stable, and efficient.</p>
    <p>
    <br>
    <br>
    </p>
    <h3>Solution</h3>
    <p>Finally I used Angular + TypeScript, HTML, CSS for the frontend, C# + .NET for the backend, SQL database, Stripe API for payments, all running in Docker, deployed via Azure Student Plan.</p>
    <h3>Brand Unique selling proposition(USP)</h3>
    <p>We all orbit our own tiny planets. In the boundless Fat Bun Universe, today your planet touches Pan Pan Rabbit’s — let the adventure begin.</p>
</div>

<h2>Technology Stack</h2>
<div class="card">
    <p>Main technologies and services used:</p>
    <div class="stack-icons">
        <span class="label">TypeScript</span>
        <span class="label">Angular</span>
        <span class="label">C#</span>
        <span class="label">.NET</span>
        <span class="label">MS SQL / Free DB</span>
        <span class="label">Docker</span>
        <span class="label">Azure Web Services (AWS)</span>
        <span class="label">Redis (Cache)</span>
        <span class="label">Stripe API</span>
        <span class="label">HTML5</span>
        <span class="label">CSS3</span>
        <span class="label">JavaScript</span>
        <span class="label">Mermaid.js</span>
        <span class="label">Git</span>
        <span class="label">Infrastructure / API</span>
        <span class="label">Figma</span>
        <span class="label">Adobe Photoshop</span>
        <span class="label">VS Code</span>
        <span class="label">Object Oritened Design</span>
    </div>
</div>


<h2>Project Statement</h2>
<div class="card">
    <p>The goal is to create a scalable, maintainable, and visually appealing website that combines comic reading, updates/newsfeed, online shop, and fan interaction using industrial-grade OOD principles. The system is robust, modular, and extensible.</p>
</div>

<h2>OOD Diagram</h2>
<div class="mermaid">
flowchart TD
    A[Backlog] --> B[Sprint Planning]
    B --> C[Content Editing & Upload]
    C --> D[Viewer Feature Implementation]
    D --> E[Merchandise Setup]
    E --> F[Functions Implementation]
    F --> G[API Integration]
    G --> H[Frontend Testing]
    G --> I[Backend Testing]
    H --> J[Deployment & Release]
    I --> J
    J --> K[User Feedback]
    K --> B

    style A fill:#2e3b4e,stroke:#fff,stroke-width:1px
    style B fill:#3b5e7e,stroke:#fff,stroke-width:1px
    style C fill:#2e7d32,stroke:#fff,stroke-width:1px
    style D fill:#388e3c,stroke:#fff,stroke-width:1px
    style E fill:#689f38,stroke:#fff,stroke-width:1px
    style F fill:#fbc02d,stroke:#fff,stroke-width:1px,color:#000
    style G fill:#f57c00,stroke:#fff,stroke-width:1px
    style H fill:#d32f2f,stroke:#fff,stroke-width:1px
    style I fill:#c2185b,stroke:#fff,stroke-width:1px
    style J fill:#0288d1,stroke:#fff,stroke-width:1px
    style K fill:#546e7a,stroke:#fff,stroke-width:1px
</div>

</body>
</html>
