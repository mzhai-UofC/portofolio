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
p { line-height: 1.6; }
.card {
    border: 1px solid #555;
    border-radius: 8px;
    padding: 15px 20px;
    margin: 15px 0;
    background-color: rgba(255,255,255,0.05);
}
ul { padding-left: 20px; }
.mermaid {
    margin-top: 20px;
    background-color: rgba(255,255,255,0.03);
    border-radius: 10px;
    padding: 20px;
}
</style>
</head>
<body>

<h1>Industrial-Grade OOD - Web Comic System</h1>
<p>Official website for my original comic IP, with free comic reading, updates, e-commerce, and brand promotion.</p>

<h2>Project Background</h2>
<div class="card">
    <p>This project is an official website for my original comic IP, which was nominated in the first global 4-frame comic competition. The IP has accumulated a loyal fanbase, and the website aims to provide an integrated platform for:</p>
    <ul>
        <li>Free comic reading experience</li>
        <li>Publishing latest updates and news</li>
        <li>E-commerce to sell merchandise</li>
        <li>Brand promotion and fan engagement</li>
        <li>Completely cost-free deployment</li>
    </ul>
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
