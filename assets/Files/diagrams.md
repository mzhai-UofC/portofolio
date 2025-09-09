# FatBuniverse E-Commerce Platform (Advanced Visual)

## System Overview
**Frontend:** Angular 18 + Angular Material + Tailwind CSS  
**Backend:** .NET 8 Web API  
**Database:** MSSQL (SQL Server)  
**Cache:** Redis (Upstash)  
**Payment:** Stripe (PaymentIntent + Webhook + 3D Secure)  
**Deployment:** Azure App Service  

---

## Component & Data Flow Diagram
```mermaid
graph LR
    subgraph Frontend [Frontend: Angular]
        A1[Home Page]:::frontend --> A2[Comic Viewer]:::frontend
        A2 --> A3[Character Bio]:::frontend
        A2 --> A4[Shopping Cart]:::frontend
        A4 --> A5[Checkout Wizard]:::frontend
        A6[Login/Register]:::frontend --> A2
    end

    subgraph Backend [Backend: .NET 8 Web API]
        B1[UserController]:::backend
        B2[ProductController]:::backend
        B3[OrderController]:::backend
        B4[PaymentController]:::backend
        B5[CartService / Redis]:::cache
        B6[Repository & UnitOfWork]:::backend
    end

    subgraph Database [Database & Cache]
        D1[MSSQL: Users, Orders, Products, Characters]:::database
        D2[Redis Cache: Cart/Session]:::cache
    end

    subgraph PaymentSystem [Payment: Stripe]
        P1[Stripe API: PaymentIntent/Webhook]:::payment
    end

    %% Frontend to Backend
    A1 -->|HTTP API Calls| B2
    A2 -->|HTTP API Calls| B2
    A4 -->|HTTP API Calls| B3
    A5 -->|HTTP API Calls| B4

    %% Backend to Database
    B1 --> D1
    B2 --> D1
    B3 --> D1
    B4 --> D1

    %% Backend to Cache
    B5 --> D2

    %% Backend to Payment
    B4 --> P1

    %% SignalR
    B3 -->|Real-time Updates| A4
    B4 -->|Real-time Payment Status| A5

    classDef frontend fill:#f9f,stroke:#333,stroke-width:1px,color:#000
    classDef backend fill:#9cf,stroke:#333,stroke-width:1px,color:#000
    classDef database fill:#fc9,stroke:#333,stroke-width:1px,color:#000
    classDef cache fill:#cfc,stroke:#333,stroke-width:1px,color:#000
    classDef payment fill:#fcc,stroke:#333,stroke-width:1px,color:#000
