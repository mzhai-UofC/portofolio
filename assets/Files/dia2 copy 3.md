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
    background-color: rgba(255,255,255,0.05);
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
li{ padding-left: 20px; 
    font-size:1.2rem;}
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

<h2>How to Read the Code</h2>
<div class="card">
    <ul>
        <li><b>Start with <code>home.component.ts</code> and <code>home.component.html</code></b>: Understand homepage logic, comic loading, and user interactions.</li>
        <li><b>Review <code>Program.cs</code></b>: See backend API configuration, service registration, and endpoint mapping.</li>
        <li><b>Explore <code>core/models</code> and <code>core/services</code></b>: Check TypeScript interfaces and Angular services for data and API communication.</li>
        <li><b>Follow API request flow in Controllers</b>: Cart, Orders, Payments, and Product endpoints.</li>
        <li><b>Understand backend data access</b>: StoreContext, Repository, UnitOfWork, and SpecificationEvaluator for database operations.</li>
        <li><b>Check domain models and interfaces</b>: Review business logic and contracts for maintainability.</li>
</div>

<h2>Object Oriented Design Diagram</h2>
<h2>User Flow</h2>

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

<h2>Project File Structure</h2>
<div class="card">
    <h3>Layer Diagram</h3>
    <pre>
+-------------------+    +-------------------+    +-----------------------+    +-------------------+
|      API Layer    |    |     Core Layer    |    |  Infrastructure Layer |    |   Client Layer    |
+-------------------+    +-------------------+    +-----------------------+    +-------------------+
| Controllers       |    | Entities          |    | Data Access           |    | Components        |
| DTOs              |    | Interfaces        |    | EF Repositories       |    | Routing           |
| Endpoints         |    | Specifications    |    | SpecificationEvaluator|    | Models            |
| Service Injection |    | Business Logic    |    | External Integrations |    | Services          |
+-------------------+    +-------------------+    +-----------------------+    +-------------------+
    </pre>
    <ul>
        <li><b>client/</b>: Contains all Angular frontend code, including UI components, routing, models, and services for communicating with the backend API.</li>
        <li><b>API/</b>: Entry point for backend logic. Controllers expose REST endpoints, coordinate business logic, and handle requests from the frontend.</li>
        <li><b>Core/</b>: Defines domain entities, business rules, and interfaces. This layer is independent and contains no infrastructure or API dependencies.</li>
        <li><b>Infrastructure/</b>: Implements data access, repository patterns, and external integrations (e.g., Stripe, Redis). Contains classes like <code>SpecificationEvaluator.cs</code> for advanced querying.</li>
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

<h2>Main Features & Implementation Process</h2>
<div class="features-grid">
    <div class="card">
        <h3>Browsing Comics</h3>
        <p>Users read comics via an Angular component that dynamically renders chapters and pages. Modal opens for selected chapters, tracks the current page, and provides "Next Chapter" button. Logic managed with Angular state ensures smooth browsing.</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
         <br>
        <br>
        <br>
    </div>
    <div class="card">
        <h3>Login & Registration</h3>
        <p>Users create accounts and log in securely using Angular forms. Credentials stored in SQL via .NET backend. Modular authentication supports future upgrades like OAuth or multi-factor authentication.</p>
                <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
    <div class="card">
        <h3>Product Catalog</h3>
        <p>Merchandise is displayed with images, descriptions, and prices. Angular components fetch data from SQL via RESTful APIs. Catalog supports easy updates and new product types.</p>
                <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
    <div class="card">
        <h3>Add to Cart</h3>
        <p>Users select items for purchase. Cart state managed in Angular, persisted in SQL, and cached in Redis. Reusable module supports wishlists, discounts, and promotions.</p>
                <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
         <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
    <div class="card">
        <h3>Checkout</h3>
        <p>Multi-step Angular wizard lets users review and confirm orders. .NET backend calculates totals, validates addresses, and applies delivery options. Process is extendable to multiple payment or delivery methods.</p>
                <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
         <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
    <div class="card">
        <h3>Stripe API Integration</h3>
        <p>Payments processed via Stripe test keys. C# service handles PaymentIntent creation and webhooks. Integration is modular and can be extended to other payment providers.</p>
                <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
         <br>
        <br>
        <br>
        <br>
    </div>
    <div class="card">
        <h3>Order Generation</h3>
        <p>Completed orders saved in SQL and confirmation emails sent. Runs in Docker on Azure Student Plan. Module follows OOD principles, supporting future reporting and analytics.</p>
                <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
         <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</div>

<style>
.features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px; /* card 之间的间距 */
}


</style>






</body>
</html>
