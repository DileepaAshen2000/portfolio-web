# Green Light Solar Lanka — Digital Commerce and Operations Platform

> A full-stack solar-energy platform that brings company presentation, solar-system discovery, product commerce, customer accounts, online payments, publishing, and internal administration into one connected digital experience.

## 1. Project Introduction

**Project title:** Green Light Solar Lanka — Digital Commerce and Operations Platform  
**Short description:** A responsive, full-stack platform designed to help customers understand solar-energy options, estimate potential savings, explore completed installations, purchase solar products, and track orders. A separate administrative application gives authorized staff a central place to manage the content and commerce data shown on the public website.  
**Client / Brand:** Green Light Solar Lanka  
**Industry:** Renewable energy, solar installation, and solar-product retail  
**Services provided:** Digital strategy, user-experience planning, responsive UI design, frontend development, backend API development, database design, e-commerce implementation, payment integration, authentication, role-based administration, content management, SEO foundations, accessibility, and performance optimization  
**Project duration:** Not recorded in the repository; add the confirmed start and completion dates before publishing this case study  
**Project status:** Implemented application with production-readiness guidance included in the repository  

### Cover Image

Use a polished desktop screenshot of the home-page hero or a composite showing the public storefront beside the admin dashboard. The image should communicate both sides of the platform: a customer-facing renewable-energy experience and the operational system behind it.

<!-- Portfolio owner: replace this note with a real image, for example:
![Green Light Solar Lanka platform shown on desktop and mobile](docs/images/green-light-solar-cover.jpg)
-->

---

## 2. Project Overview

### The Background

Green Light Solar Lanka operates in a category where customers need more than a simple brochure website. Choosing a solar solution requires education, trust, technical context, visibility into previous work, and a clear path from initial interest to enquiry or purchase. At the same time, the business needs a practical way to maintain products, stock, orders, project stories, blog content, and user access without editing source code.

The project therefore extends beyond a conventional marketing site. It combines a public brand experience, a solar-product store, self-service customer tools, and an internal management application. All three applications share a backend domain model so that published information and operational data remain connected.

### The Objective

The objective was to create a modern digital experience that clearly communicates Green Light Solar Lanka's expertise, helps customers make more informed solar decisions, supports product purchases and secure payments, and gives the internal team a scalable foundation for managing day-to-day digital operations.

The platform was intended to:

- Present solar services and company credibility in a clear, professional format.
- Turn customer interest into useful actions such as calculating savings, requesting a quote, contacting the team, or buying a product.
- Provide a complete commerce journey from product discovery through checkout, payment, confirmation, and order tracking.
- Allow customers to create accounts, maintain profile details, and review their orders.
- Give administrators and staff controlled access to products, orders, projects, blogs, and user records.
- Establish a maintainable technical architecture that can grow with future business requirements.

---

## 3. Understanding the Problem

### The Challenge

The central challenge was to translate a service-led solar business into a coherent digital journey. A prospective customer may arrive with only an electricity bill and a general interest in solar, while another may already know which panel, inverter, battery, or system component they want to purchase. The experience needed to serve both audiences without making either path feel secondary.

Behind that public experience, product availability, orders, project examples, and educational content also needed structured ownership. Without an administrative layer, every update would depend on a developer and business information could quickly become inconsistent.

### Key Problems Identified

#### Problem 1 — A complex customer decision

Solar investment involves unfamiliar concepts such as system capacity, expected generation, installation context, payback period, and environmental benefit. Presenting only service descriptions would leave customers without enough guidance to move confidently toward an enquiry. The project needed to make a technical decision easier to understand without pretending that a browser-based estimate replaces a professional site assessment.

#### Problem 2 — Fragmented customer journeys

Brand information, consultation, product shopping, payment, and after-purchase support can easily become disconnected experiences. That fragmentation increases friction and makes it harder for customers to know what to do next. The platform needed clear pathways for both consultation-led solar projects and transactional product orders.

#### Problem 3 — Operational content required a central system

Products, inventory, order statuses, installation projects, blog articles, and team access all change over time. Static page content alone could not support those operational needs. The business required a protected interface backed by structured data, publication states, permissions, and reusable APIs.

#### Problem 4 — Trust, security, and reliability

An energy and commerce platform handles customer identities, addresses, order data, inventory, and payment state. The solution needed authentication, server-side authorization, validated input, verified payment callbacks, transactional stock handling, and predictable error responses—not only an attractive frontend.

### How We Identified the Problems

The implemented repository reflects a discovery process centered on the complete user and operational journey:

- Review of the company's services, proof points, contact details, and customer calls to action.
- Mapping of customer paths from awareness to calculator, enquiry, product selection, checkout, payment, and tracking.
- Content modeling for products, projects, articles, users, orders, line items, and payments.
- Separation of public and administrative responsibilities to reduce complexity and protect internal functions.
- Definition of `CUSTOMER`, `STAFF`, and `ADMIN` roles around actual management tasks.
- UI and accessibility review covering responsive layouts, focus states, semantic labels, loading feedback, and form errors.

This documentation does not claim stakeholder interviews, analytics analysis, or quantified customer research because supporting evidence for those activities is not stored in the repository.

### Key Insight

The strongest customer experience would come from connecting education, estimation, evidence, and action. A visitor should be able to learn what the company offers, estimate a suitable system, view real installation work, and then contact the team or complete a purchase—all within one consistent platform. The same content and transactions should then be manageable by the business through controlled workflows.

---

## 4. Our Strategy

### Strategic Direction

The solution was structured as a connected ecosystem with three purpose-built applications:

1. A public web application for brand communication, customer education, solar estimation, commerce, accounts, and support.
2. An administrative application for products, orders, projects, blogs, and users.
3. A backend API and relational database acting as the shared source of truth and enforcing business rules.

This separation keeps the public experience focused and fast while giving internal users a workspace designed around management tasks. It also allows each application to be deployed, maintained, and scaled independently.

### Project Goals

- Make Green Light Solar Lanka's services, experience, and value easier to understand.
- Give visitors useful decision-support tools and prominent enquiry routes.
- Deliver a consistent end-to-end product purchasing and order-tracking journey.
- Replace developer-dependent updates with structured administrative workflows.
- Protect sensitive operations through verified identity and role-based authorization.
- Build a modular foundation for new content, product categories, integrations, and reporting.

### Target Audience

The primary audience includes Sri Lankan homeowners, businesses, and industrial decision-makers exploring solar-energy solutions. These users need straightforward explanations, evidence of delivery capability, an initial indication of system size and economics, and an easy way to request professional guidance.

A second customer segment consists of buyers looking for solar panels, inverters, batteries, accessories, or complete systems. Their journey prioritizes product information, pricing, availability, cart and checkout usability, payment confidence, and post-purchase visibility.

The internal audience includes staff who maintain products, fulfil orders, publish articles and project case studies, and administrators who manage user access. Their interface prioritizes clarity, status visibility, efficient data entry, and controlled permissions.

---

## 5. Our Solution

### Solution Overview

The completed solution unifies a content-rich corporate website, solar decision-support tool, online shop, customer portal, and operational dashboard. The public site turns information into clear next steps; the API manages the core business entities and rules; and the admin panel lets authorized users keep the experience current.

### Solution 1 — Guided public solar experience

The public website communicates the company story through service pages, experience statistics, testimonials, completed-project galleries, educational articles, and clear contact routes. Residential, commercial, and industrial needs are presented within a shared design system, while dedicated project pages add evidence through client, location, system type, capacity, completion date, highlights, and testimonial fields when available.

An interactive solar calculator converts a monthly electricity bill into an indicative recommended capacity, estimated cost, monthly and annual savings, payback period, and annual carbon-dioxide reduction. This creates a more useful first interaction and gives the sales conversation a clearer starting point. Calculator values are estimates based on constants in the application and should be reviewed against current tariffs and market pricing before production use.

**Recommended portfolio images:** home-page hero, service overview, calculator input/results, project gallery, and responsive mobile navigation.

### Solution 2 — Integrated e-commerce and customer self-service

The shop retrieves structured product data from the API and supports browsing by category, product-detail exploration, merchandising tags, related products, cart management, checkout, and order creation. The cart persists in browser storage so accidental navigation does not immediately lose a customer's selections.

PayHere is integrated as the online payment provider. Payment initiation is prepared on the server, including the provider hash, and the callback path verifies the notification before updating payment and order state. The order workflow also accounts for stock deduction and restoration, helping keep commercial state consistent when a payment fails or an order is cancelled.

Customers can authenticate with Firebase, synchronize their identity with the application database, edit profile information, review their orders, and track an order using its reference. Success, return, and cancellation views provide clear feedback around the payment lifecycle.

**Recommended portfolio images:** shop grid, product detail, cart, checkout, payment redirect, confirmation, account orders, and tracking timeline.

### Solution 3 — Role-based operations and content management

The standalone admin dashboard gives authenticated team members management views for products, orders, installation projects, and blog posts. Administrators additionally receive user-management access. Public and internal API routes are separated, and protected mutations use Firebase token verification together with server-side role guards.

Products support price, original price, discount, stock, SKU, category, image, tags, and active status. Orders contain customer, address, total, line-item, status, audit, and payment relationships. Projects and blog posts have draft/published states so content can be prepared before it appears publicly. Image upload uses a Cloudinary unsigned upload preset, avoiding exposure of a Cloudinary API secret in frontend code.

**Recommended portfolio images:** dashboard summary, product editor, order management table, project/blog editor, image uploader, and user-role controls.

---

## 6. Design and Development Process

### Discovery and Research

The project began by organizing the business offering around the questions a solar customer is likely to ask: What solutions are available? Is the company credible? What might an appropriate system look like? What has the company delivered before? Can I buy equipment directly? How do I get help?

Those needs were mapped against the business's internal responsibilities. This produced the principal domains—users, products, orders, payments, projects, and blogs—and clarified which information should be public, customer-specific, staff-managed, or administrator-only.

### Planning and Concept Development

The public information architecture was organized into Home, About, Services, Calculator, Blog, Gallery, Contact, Shop, Account, Order Tracking, Privacy, and Terms. Commerce-specific screens cover product detail, cart, checkout, payment, return/cancellation, and confirmation.

The admin architecture mirrors real content and commerce domains rather than the public site's visual structure. Its dashboard provides entry points into Products, Orders, Projects, Blogs, and Users. A REST API sits between both interfaces and the database, preventing either frontend from becoming the authority for sensitive rules.

### Design

The visual system uses a renewable-energy palette led by green, supported by high-contrast neutral typography and generous white space. Reusable buttons, cards, form controls, badges, avatars, modals, loaders, containers, and sections produce consistency across a sizeable route set.

The experience adds motion with Framer Motion and custom intersection/count-up hooks. Animation is used to reveal content, emphasize statistics, and give controls responsive feedback. Responsive Tailwind layouts adapt the experience across desktop and mobile. Accessibility considerations include a skip link, keyboard-friendly navigation, visible focus treatment, semantic landmarks, labelled loading states, dialog semantics, and errors announced with `role="alert"`.

### Development and Implementation

The system is implemented in TypeScript across all three applications:

- **Public frontend:** React 18, Vite, React Router, Tailwind CSS, Framer Motion, Axios, React Hook Form, Zod, and Firebase Authentication.
- **Admin frontend:** React 18, Vite, React Router, Tailwind CSS, React Query, Axios, Lucide icons, Firebase Authentication, and Cloudinary uploads.
- **Backend:** NestJS, Prisma ORM, relational database migrations, class-validator/class-transformer, Firebase Admin, and PayHere integration.

Frontend route-level lazy loading and `Suspense` reduce the initial bundle burden. Shared contexts coordinate authentication and the cart. API modules isolate network operations by domain. On the backend, NestJS modules separate products, orders, projects, blogs, users, administration, authentication, health checks, Prisma access, and payments.

The relational schema preserves the relationships between orders and items, products and purchased items, users and their actions, authors and blog posts, and orders and payment records. Decimal database fields are used for monetary values, while unique IDs, slugs, SKUs, order numbers, and payment-provider identifiers protect record integrity.

### Testing and Refinement

The repository includes production and implementation checklists documenting TypeScript compilation, Vite builds, route lazy loading, accessibility states, responsive behavior, validation, loading feedback, and visual refinements. The backend package also provides Jest unit, coverage, watch, and end-to-end test commands, although no test files are present in the reviewed source tree; comprehensive automated coverage should therefore be treated as future work rather than a completed result.

Before a live release, the recommended verification scope includes:

- Build and lint all three applications.
- Exercise anonymous, customer, staff, and administrator journeys.
- Test successful, failed, cancelled, duplicate, and delayed PayHere callbacks in the appropriate sandbox.
- Confirm stock consistency under concurrent order and cancellation scenarios.
- Validate Firebase token expiry and role enforcement at both UI and API levels.
- Recheck calculator assumptions, contact content, legal copy, SEO metadata, and production environment values.
- Run accessibility, responsive-browser, performance, and security checks.

---

## 7. Key Features

### Solar Savings Calculator

Transforms a monthly electricity bill into an indicative solar-system recommendation, investment estimate, savings projection, payback period, and carbon-reduction estimate. It gives early-stage customers a concrete starting point and encourages a more informed consultation.

### Service-led Marketing Experience

Dedicated company, service, contact, and conversion sections explain the offer and repeatedly connect information to a next step. Direct WhatsApp access reduces friction for visitors who prefer conversational enquiries.

### Dynamic Project Gallery

Published installation projects can be browsed and opened as individual case studies, with support for featured status, system type, system size, location, completion date, client attribution, highlights, and testimonials.

### Blog and Educational Content

Category-aware article listings and slug-based detail pages provide a foundation for solar education, maintenance advice, industry news, and organic search growth. Draft and published states support a controlled editorial workflow.

### Product Catalog and Merchandising

The store supports categories, prices, discounts, stock, SKUs, product imagery, status, and promotional tags such as new or best-selling. Product details and related-product discovery help customers evaluate and continue browsing.

### Persistent Shopping Cart and Checkout

Customers can add products, adjust quantities, review totals, retain their cart locally, enter shipping information, select a payment method, and create a structured order containing immutable line-item prices.

### PayHere Payment Lifecycle

Server-generated initiation data, hashed requests, callback verification, payment records, and status mapping provide a locally appropriate payment journey while keeping merchant secrets and trust decisions on the server.

### Customer Accounts and Order Tracking

Firebase email/password authentication is linked to application profiles. Customers can manage their details, view order history, inspect order information, and track progress by order number or account context.

### Inventory-aware Order Management

Orders, line items, products, and payments are connected in the database. The service layer manages stock movement around order creation and cancellation, reducing the risk of the interface displaying a commercial outcome that the underlying inventory does not support.

### Admin Dashboard and Publishing Workflows

Staff can maintain operational and editorial data without code changes. Dashboard pages cover products, orders, projects, and blogs, while administrator-only user management keeps elevated access more tightly controlled.

### Role-based Security

The backend verifies Firebase bearer tokens and applies `ADMIN` and `STAFF` rules to protected controllers. Authorization is enforced server-side rather than relying only on hidden frontend navigation.

### Search and Social Foundations

Reusable SEO metadata supplies page titles, descriptions, keywords, canonical information, Open Graph data, and Twitter-card information, helping content present consistently to search engines and shared links.

### Responsive, Accessible, Animated UI

Reusable interface components, mobile layouts, lazy-loaded routes, focus states, semantic roles, scroll-triggered reveals, staggered cards, and animated statistics create a polished experience without sacrificing clarity.

---

## 8. The Results

### Project Impact

The completed platform gives Green Light Solar Lanka a unified digital foundation instead of a collection of disconnected customer touchpoints. Visitors can move from learning about solar to estimating a system, reviewing evidence, contacting the company, or purchasing products. Existing customers gain account and tracking tools, while the internal team receives structured control over the content and records that power the public experience.

From a technical perspective, the project establishes clear boundaries between presentation, administration, business logic, identity, payment processing, and data persistence. That structure makes future development safer and more manageable than embedding all behavior in a single frontend.

### Key Results

No verified analytics, revenue, conversion, performance benchmark, or operational time-saving measurements were found in the repository, so numerical outcomes have intentionally not been invented. Observable delivered outcomes include:

- Clearer communication of residential, commercial, and industrial solar services.
- A guided decision journey through education, estimation, proof, and conversion.
- One consistent route from product discovery to payment and order tracking.
- A professional, responsive, and visually consistent brand presence.
- Reduced dependence on developers for products, projects, articles, and order updates.
- Centralized operational data with structured publication and order statuses.
- Safer separation of public browsing, customer identity, staff workflows, and administrator privileges.
- A modular platform capable of supporting future integrations and business growth.

### Recommended Measurement Plan

After launch, impact should be measured with agreed definitions and a fixed comparison window. Useful indicators include calculator completion rate, quote-form conversion, WhatsApp clicks, product-detail-to-cart rate, cart abandonment, successful payment rate, order-tracking usage, organic landing-page traffic, Core Web Vitals, content publishing time, and average order-processing time. These figures should only be added to the portfolio after they have been verified.

---

## 9. Client Testimonial

No approved client testimonial was found in the repository. Replace the placeholder below with a genuine, attributed statement before publishing:

> “Add an approved client quotation describing the collaboration, the value of the connected platform, and the outcome for customers or the internal team.”

**— Client name, position, Green Light Solar Lanka**

---

## 10. Conclusion

### Final Outcome

Green Light Solar Lanka's platform turns a complex, high-consideration service into a clear digital journey while also supporting direct product commerce and internal operations. The solution connects an educational public website, calculator, project and blog publishing, shopping and payments, customer accounts, order tracking, role-based administration, and a structured backend. The result is a more coherent customer experience and a scalable technical foundation for the business.

### What's Next

The strongest next phase would focus on measured optimization and operational maturity:

- Connect production analytics and define conversion funnels for enquiries, calculator use, and commerce.
- Add automated unit, integration, and end-to-end coverage for critical identity, inventory, order, and payment paths.
- Introduce transactional email or messaging for order and payment events.
- Connect contact and quotation forms to a CRM or managed lead pipeline.
- Move calculator assumptions into managed configuration and keep tariffs and costs current.
- Add richer product search, sorting, filtering, stock alerts, and merchandising controls as the catalog grows.
- Expand dashboard reporting for revenue, order status, inventory, content performance, and enquiry attribution.
- Complete formal accessibility, security, performance, backup, monitoring, and incident-response reviews.

---

## 11. Call to Action

### Have a similar challenge?

We help ambitious businesses turn complex services, customer journeys, and operational requirements into clear, effective digital platforms.

**Start a Project** · **Talk to Our Team**

---

## Technical Architecture

```text
Customers                         Administrators and staff
    │                                       │
    ▼                                       ▼
Public React application          Admin React application
    │  content, shop, account               │  management workflows
    └──────────────────┬────────────────────┘
                       ▼
                 NestJS REST API
              authentication + roles
              validation + business rules
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
    Prisma/database  Firebase     PayHere
    business data    identity     payments
          ▲
          │
      Cloudinary
    managed images
```

### Repository Structure

```text
green-light-solar/
├── green-light-solar-web/       # Public website, shop, calculator, and customer portal
├── green-light-solar-admin/     # Protected content and commerce management dashboard
├── green-light-solar-api/       # NestJS API, Prisma schema, migrations, and payment logic
└── README.md                    # Portfolio case study and system overview
```

### Core Data Model

| Domain | Purpose |
| --- | --- |
| User | Links Firebase identity to profile, status, and `CUSTOMER`, `STAFF`, or `ADMIN` role |
| Product | Stores catalog copy, price, discount, inventory, SKU, image, category, tags, and status |
| Order | Records customer and fulfilment information, total, status, notes, and audit ownership |
| OrderItem | Preserves the purchased product, quantity, and price for an order |
| Payment | Tracks provider, amount, verification state, provider reference, method, and status |
| Project | Powers installation case studies, featured content, technical facts, and testimonials |
| Blog | Supports authored, categorized, tagged, draft or published educational content |

### Security and Configuration Notes

- Firebase client configuration is supplied through `VITE_` environment variables; the API uses Firebase Admin credentials to verify ID tokens.
- Protected API mutations use role guards. UI protection improves navigation but is not treated as the security boundary.
- PayHere merchant credentials and hash generation belong on the backend. Payment status is updated from verified provider notifications.
- Cloudinary uploads use a cloud name and upload preset in the admin frontend. A Cloudinary API secret must never be placed in frontend variables or committed to source control.
- Database, Firebase service-account, payment, origin, and public URL values should be provided through deployment secrets rather than committed configuration.
- Environment files and service-account material should remain excluded from version control, and any previously exposed secret should be rotated immediately.

## Portfolio Publishing Checklist

Before placing this document on a public portfolio:

- Add confirmed project start and completion dates.
- Add an approved cover image and supporting screenshots with meaningful alt text.
- Replace the testimonial placeholder with an approved client quotation—or remove the section.
- Add only verified performance or business metrics, including the measurement period and source.
- Confirm permission to publish the client's name, interface, project records, and operational screens.
- Blur customer details, order references, email addresses, credentials, revenue, and other sensitive data in screenshots.
- Review calculator values and all business facts with the client.
- Add the live site and source-code links only if they are public and approved.

---

*This README was prepared from the implementation present in the repository. Unverified dates, research activities, testimonials, and numerical outcomes have been clearly identified instead of being presented as fact.*
