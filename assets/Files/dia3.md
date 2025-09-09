<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Industrial-Grade OOD - Web Comic System</title>
<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true, flowchart: { curve: 'orthogonal' } });
</script>
<style>
body {
    background-color: #1e1e1e;
    color: #fff;
    font-family: 'Arial', sans-serif;
    margin: 20px;
}
h1, h2 {
    text-align: center;
}
h2 { margin-top: 30px; }
p { line-height: 1.6; }
.card {
    border: 1px solid #555;
    border-radius: 8px;
    padding: 15px 20px;
    margin: 15px 0;
    background-color: rgba(255,255,255,0.05);
}
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
        <li>Completely cost-free deployment (no domain, free hosting, free CMS)</li>
    </ul>
</div>

<h2>Project Statement</h2>
<div class="card">
    <p>The goal of this project is to create a scalable, maintainable, and visually appealing website that combines a comic reading platform, update/newsfeed, online shop, and fan interaction, using industrial-grade Object-Oriented Design principles. The system is robust, modular, and extensible for future growth.</p>
</div>

<h2>OOD Diagram</h2>
<div class="mermaid">
%%{init: {'themeVariables': {'flowchart.curve': 'orthogonal'}}}%%

classDiagram

%% ==============================
%% Frontend Classes
%% ==============================
class HomePage {
    +render()
    +navigateToComic()
}
class ComicViewer {
    +displayComics()
    +viewComicDetails()
    +addToCart()
}
class CharacterBio {
    +showBio()
}
class ShoppingCart {
    +addItem()
    +removeItem()
    +getCart()
}
class CheckoutWizard {
    +startCheckout()
    +submitOrder()
}
class LoginRegister {
    +login()
    +register()
}

%% ==============================
%% Backend Controllers
%% ==============================
class UserController {
    -UserRepository
    +Login()
    +Register()
    +GetProfile()
    +UpdateProfile()
}
class ProductController {
    -ProductRepository
    +ListProducts()
    +GetProductDetails()
    +AddProduct()
    +UpdateProduct()
    +DeleteProduct()
}
class OrderController {
    -OrderRepository
    +CreateOrder()
    +GetOrder()
    +UpdateOrderStatus()
    +ListUserOrders()
}
class PaymentController {
    -StripeService
    +CreatePaymentIntent()
    +WebhookListener()
    +RefundPayment()
}
class CartService {
    -RedisCache
    +AddItem()
    +RemoveItem()
    +GetCart()
    +ClearCart()
}
class RepositoryUnitOfWork {
    +Commit()
    +Rollback()
}

%% ==============================
%% Database Classes
%% ==============================
class MSSQLDatabase {
    -Users
    -Orders
    -Products
    -Characters
}
class RedisCacheDB {
    -Cart
    -Session
}
class StripeService {
    +ProcessPayment()
    +Refund()
}

%% ==============================
%% Frontend Relationships
%% ==============================
HomePage --> ComicViewer
ComicViewer --> CharacterBio
ComicViewer --> ShoppingCart
ShoppingCart --> CheckoutWizard
LoginRegister --> ComicViewer

%% ==============================
%% Backend Relationships
%% ==============================
UserController --> MSSQLDatabase
ProductController --> MSSQLDatabase
OrderController --> MSSQLDatabase
PaymentController --> MSSQLDatabase
CartService --> RedisCacheDB

%% ==============================
%% Frontend -> Backend (Dependency)
%% ==============================
HomePage ..> ProductController
ComicViewer ..> ProductController
ShoppingCart ..> OrderController
CheckoutWizard ..> PaymentController

%% ==============================
%% Payment System
%% ==============================
PaymentController --> StripeService

%% ==============================
%% Aggregation / Composition
%% ==============================
ShoppingCart o-- "1..*" ComicViewer
UserController *-- UserRepository
ProductController *-- ProductRepository
OrderController *-- OrderRepository
PaymentController *-- StripeService
CartService *-- RedisCacheDB

%% ==============================
%% Layout hints (simulate columns)
%% ==============================
HomePage --- LoginRegister
ComicViewer --- ShoppingCart
UserController --- ProductController
OrderController --- PaymentController
MSSQLDatabase --- RedisCacheDB
</div>

<h2>Technology Stack</h2>
<div class="card stack-icons">
    <!-- Most important first -->
    <span class="label">TypeScript</span>
    <span class="label">Angular</span>
    <span class="label">C#</span>
    <span class="label">.NET</span>
    <!-- Others -->
    <span class="label">HTML5</span>
    <span class="label">CSS3</span>
    <span class="label">JavaScript</span>
    <span class="label">Mermaid.js</span>
    <span class="label">MSSQL / Free DB</span>
    <span class="label">Redis (Cache)</span>
    <span class="label">Stripe API</span>
    <span class="label">GitHub Pages</span>
    <span class="label">Netlify</span>
</div>

<h2>IGL Development Workflow</h2>
<div class="mermaid">
flowchart TD
    A[Spread Planning] --> B[Implementation]
    B --> C[Testing & QA]
    C --> D[Deployment]
    D --> E[Reveal / Public Launch]

    A --> A1[Tools: Trello, Google Docs, Miro]
    A --> A2[Tasks: Storyboard, Asset Plan, Timeline]
    
    B --> B1[Tools: VS Code, GitHub, Unity, Photoshop]
    B --> B2[Tasks: Sprite Creation, Animation, Feature Coding]
    
    C --> C1[Tools: Cypress, Manual QA, Browser DevTools]
    C --> C2[Tasks: Bug Fix, Functionality Testing, Cross-Browser Check]
    
    D --> D1[Tools: GitHub Pages, Netlify]
    D --> D2[Tasks: Publish, Configure CI/CD, Cache Setup]
    
    E --> E1[Tools: Social Media, YouTube, Discord]
    E --> E2[Tasks: Public Launch, Community Announcement, Feedback Collection]
</div>

<h2>Summary</h2>
<div class="card">
    <p>This system integrates comic browsing, e-commerce, updates, and brand promotion into a single platform. Using industrial-grade OOD principles ensures modularity and scalability. The combination of free hosting, GitHub Pages/Netlify deployment, and open-source technologies creates a cost-effective, maintainable, and visually professional solution.</p>
</div>

</body>
</html>
