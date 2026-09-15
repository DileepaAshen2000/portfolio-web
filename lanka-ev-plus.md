# LankaEV+ — Connected EV Charging Platform

> A complete digital ecosystem that connects EV drivers, charging stations, station owners, and platform administrators through one coordinated mobile, web, and backend experience.

![LankaEV+ mobile application](lanka-ev-app/flutter_01.png)

## 1. Project Introduction

**Project title:** LankaEV+ — Connected EV Charging Platform  
**Short description:** LankaEV+ is an end-to-end electric-vehicle charging platform designed for the Sri Lankan market. It enables drivers to discover, reserve, pay for, start, monitor, and manage charging sessions while giving operators the tools required to administer chargers, pricing, memberships, settlements, and operational records.  
**Client / Brand:** LankaEV+  
**Industry:** Electric mobility, EV charging infrastructure, energy technology, and financial technology  
**Services provided:** Product strategy, user-experience and interface design, Flutter mobile development, web administration development, backend/API engineering, OCPP integration, payment and wallet integration, database design, authentication, operational tooling, testing, and technical documentation  
**Project duration:** December 2025 – September 2026, based on the available repository history; continued enhancement may follow  
**Platforms:** Android-focused Flutter application, responsive web administration console, REST API, and OCPP 1.6 WebSocket central system

### At a Glance

| Area | Delivery |
| --- | --- |
| Customer experience | Flutter mobile app for authentication, charger access, bookings, charging, wallet activity, memberships, history, and support |
| Operations | React/Vite administration console for users, owners, stations, chargers, pricing, sessions, settlements, payouts, reports, logs, and audits |
| Platform services | Node.js/Express API, OCPP 1.6 communication, real-time charger state, business rules, and background workers |
| Data and infrastructure | MySQL with Prisma, Redis/BullMQ, Firebase, Cloudinary, PayHere, email services, and QR-code generation |

---

## 2. Project Overview

### The Background

An EV charging service is more than a consumer-facing app. A usable charging network must coordinate physical chargers, live device state, customer identity, payments, pricing, reservations, wallet balances, operator revenue, and administrative oversight. Each part depends on the others: a polished interface cannot complete a session if the charger protocol, billing rules, or operational controls are disconnected.

LankaEV+ was created as a unified platform for this full service journey. The project brings together an approachable driver application, a central system capable of communicating with OCPP-compatible charge points, and a web console through which administrators can manage the network and its financial operations.

### The Objective

The objective was to create a scalable digital foundation for an EV charging network: make public charging easier for drivers, give the business visibility and control over day-to-day operations, and establish reliable technical workflows from charger discovery through payment and settlement.

The platform was also designed to accommodate future network growth. Stations, chargers, connectors, pricing plans, station owners, memberships, sessions, and settlements are represented as distinct domain entities rather than being embedded in a single rigid workflow.

---

## 3. Understanding the Problem

### The Challenge

Public EV charging combines a physical action with a time-sensitive digital transaction. Drivers need confidence that they have selected the correct charger, that it is available, that sufficient funds are ready, and that their session is genuinely active or stopped. At the same time, the operator must reconcile device messages, usage measurements, customer balances, owner earnings, reservations, and support records.

The central challenge was therefore to turn a technically fragmented process into one clear service while preserving operational control and traceability behind the scenes.

### Key Problems Identified

#### Problem 1 — A fragmented driver journey

Without one guided flow, a driver may need separate tools to identify a station, determine connector compatibility, reserve capacity, pay, and verify a charging session. This increases uncertainty at the exact moment a user needs a fast and dependable experience.

#### Problem 2 — Physical chargers and business software must remain synchronized

Availability shown in an app is only valuable when it reflects the charge point's real condition. Charger boot events, authorization, status changes, transaction starts and stops, meter values, reservations, and remote commands must be translated into durable application state without losing the underlying device history.

#### Problem 3 — Charging revenue has multiple stakeholders

Wallet top-ups, reserved funds, usage billing, grace periods, station pricing, membership benefits, payment records, owner earnings, payouts, and settlement reversals create a financial workflow that cannot be handled safely as a simple payment form. The system needs explicit records and auditable state transitions.

#### Problem 4 — Operations need one source of truth

As a charging network grows, administrators require visibility across customers, owners, stations, chargers, sessions, protocol logs, pricing, settlements, and platform health. Without a consolidated control surface, investigation and routine administration become slow and error-prone.

### How We Identified the Problems

The repository reflects a domain-led discovery process combining:

- EV charging journey and system-requirements analysis;
- mapping of driver, administrator, station-owner, and charger interactions;
- OCPP 1.6 protocol and charger-command analysis;
- data modelling for identities, chargers, sessions, wallets, ledgers, bookings, memberships, and settlements;
- API and interface audits as the three applications evolved together;
- iterative implementation notes, integration guides, troubleshooting records, and automated backend tests.

### Key Insight

The most important insight was that the charging session must be treated as a coordinated lifecycle, not an isolated screen or API request. Identity, charger state, wallet authorization, live meter data, final billing, and administrative records all need to describe the same event. That insight shaped both the backend domain model and the user experience.

---

## 4. Our Strategy

### Strategic Direction

The solution was organized into three purpose-built layers connected by shared domain rules:

1. A mobile experience optimized for the driver's immediate tasks.
2. A central backend that owns charger communication, authorization, transactions, billing, and persistent records.
3. An administration console that turns complex network data into manageable operational workflows.

This separation allows each interface to remain focused while keeping sensitive business logic and device coordination in the backend.

### Project Goals

- Reduce friction from discovering a charger to completing a paid session.
- Represent charger availability and session activity clearly and consistently.
- Support QR-assisted charger identification and remote start/stop operations.
- Provide wallet funding, billing, receipts, and transaction history in one experience.
- Enable reservations, station memberships, and customer self-service.
- Give administrators practical control over infrastructure, pricing, users, owners, revenue, and exceptions.
- Build an extensible data and service architecture for additional stations and chargers.
- Preserve operational traceability through OCPP logs, ledgers, audit logs, and health checks.

### Target Audience

**EV drivers** need a fast way to find compatible chargers, understand availability and pricing, reserve a connector, fund their account, initiate charging, monitor progress, and review past activity.

**Charging-station owners** need their infrastructure and earnings represented accurately, with a clear settlement and payout trail.

**Platform administrators and operations teams** need secure tools for configuring the network, supporting customers, inspecting live and historical sessions, and resolving device or financial exceptions.

**Finance and audit users** need structured payment, ledger, settlement, payout, and administrative-action records rather than manually reconstructed reports.

---

## 5. Our Solution

### Solution Overview

LankaEV+ combines a driver-facing Flutter app, an OCPP-aware Node.js central system, and a React administration console. Together they cover the complete operating loop: onboard a user, expose station and charger information, reserve or select a connector, validate access and funds, issue charger commands, process live meter events, calculate the final charge, retain a financial trail, and surface the result to both customers and administrators.

### Solution 1 — A guided mobile charging experience

The Flutter application consolidates the driver's essential actions into a protected, mobile-first journey. Firebase-backed authentication, onboarding, email verification, QR scanning, charger browsing, bookings, wallet management, active-session monitoring, receipts, charging history, memberships, profile controls, and help content are connected through guarded application routes.

The result is an experience that gives the driver relevant information before, during, and after charging rather than exposing the complexity of the protocol and transaction layers.

![LankaEV+ application screens](lanka-ev-app/flutter_02.png)

### Solution 2 — An OCPP-enabled charging and transaction core

The backend acts as the system of record and the bridge to physical charge points. Its OCPP 1.6 WebSocket implementation handles boot notifications, authorization, status notifications, transaction events, meter values, heartbeats, and data transfer. It can also issue remote start, remote stop, reservation, and cancellation commands.

REST services coordinate these device events with charger runtime state, bookings, live sessions, wallet holds, ledger entries, billing, grace-period processing, station pricing, PayHere payment status, membership rules, and owner settlements. This design keeps critical rules centralized and makes the user interfaces consumers of consistent domain state.

### Solution 3 — A unified operations and finance console

The web console gives authorized administrators a consolidated view of the network. It includes dashboards, user and owner administration, station and charger configuration, QR management, pricing, station memberships, charging sessions, force-stop controls, OCPP logs, settlements, owner payouts, reports, audit records, and diagnostic tools.

Firebase ID tokens are attached to API requests, and backend authorization protects administrative routes. Operational screens turn protocol and financial data into workflows that non-developer team members can inspect and manage.

![LankaEV+ mobile experience](lanka-ev-app/flutter_03.png)

---

## 6. Design and Development Process

### Discovery and Research

The work began by defining the actors and state transitions involved in an EV charging network. Functional requirements were decomposed into customer actions, charge-point events, administrative controls, and financial consequences. Existing implementation guides show focused investigation of Firebase authentication, PayHere payments, wallet accounting, OCPP charger setup, session release behavior, dashboards, pricing, settlements, logs, and error handling.

### Planning and Concept Development

The platform was planned around domain boundaries rather than individual pages. Users, wallets, ledgers, stations, chargers, connectors, pricing, charging sessions, live session state, bookings, memberships, payments, settlements, OCPP messages, runtime state, and audit logs each have dedicated database representations.

On the frontend, features are organized around user intentions—such as charging, booking, funding a wallet, reviewing receipts, or managing a station—so navigation mirrors the service journey. The administration console mirrors the operator's responsibilities and keeps high-risk actions inside authenticated routes.

### Design

The mobile interface uses a dark green visual language aligned with clean energy and electric mobility, supported by high-contrast cards, status indicators, recognizable charging imagery, and prominent primary actions. Reusable Flutter themes, design tokens, widgets, loading states, and error components maintain consistency across the application.

The web console uses a dashboard-oriented layout with reusable cards, controls, date filters, tables, and Recharts visualizations. Information density is higher for operational users, while destructive or exceptional actions are separated from routine monitoring.

### Development and Implementation

The mobile app was built with Flutter and Dart using Riverpod for state management, GoRouter for navigation, Dio for API communication, secure storage for local credentials, Firebase Authentication, QR scanning, WebSocket support, PDF receipt generation, and PayHere integration.

The administration console uses React 18, a mixed JavaScript/TypeScript codebase, Vite, React Router, Axios, Tailwind CSS, date-fns, Recharts, and Firebase Authentication.

The backend uses Node.js, Express, native WebSockets, Prisma with MySQL, Redis and BullMQ, Firebase Admin, Zod validation, Decimal.js for monetary calculations, Cloudinary, QR generation, email delivery, and PayHere services. HTTP and OCPP traffic share one server while remaining separate application concerns.

### Testing and Refinement

Testing is concentrated around the highest-risk backend rules. Jest unit and integration suites cover wallet behavior, ledger behavior, billing, settlement logic, OCPP flows, and administrative operations. Health endpoints report server, database, and Redis status; request IDs support tracing; centralized error middleware normalizes failures; and OCPP/audit logs help diagnose behavior after deployment.

The UI projects also include structured error handling, loading states, validation utilities, troubleshooting guides, and iterative implementation records. These measures support refinement across the full user-to-charger workflow.

---

## 7. Key Features

### Charger Discovery and Status

Drivers can browse charger information, inspect station and connector details, review pricing, and see operational state. The backend combines persistent configuration with live runtime information so the experience can distinguish registered infrastructure from current availability.

### QR-Assisted Charger Access

Administrators can generate or regenerate charger QR codes, and drivers can scan a code to look up and verify the intended charger before proceeding. This shortens the physical-to-digital handoff and reduces the chance of selecting the wrong unit.

### Remote Charging Lifecycle

Authenticated users can start and stop charging through the application. The central system translates those requests into OCPP commands and processes charge-point responses, status changes, transaction events, and meter values. An active-session interface and session summary keep the user informed throughout the lifecycle.

### Reservations and Booking Management

Drivers can check connector availability, select a time slot, create a booking, review upcoming and historical bookings, and cancel when permitted. Background processing supports reservation expiry and charger-side reservation commands.

### Wallet, Billing, and Receipts

The platform maintains wallets, transactions, locked balances, and double-entry-style ledger records. Funds can be reserved for charging, usage can be billed using precise decimal calculations, unused amounts can be released, and users can review transactions and generate receipt PDFs.

### PayHere Payment Integration

PayHere supports wallet-funding payment flows, including payment preparation, return and cancellation handling, status lookup, and server-side webhook processing. The payment record remains connected to the corresponding user and wallet transaction.

### Pricing and Grace-Period Rules

Administrators can create and assign pricing configurations to stations. Background workers support time-sensitive workflows such as booking expiry and post-session grace handling, allowing operational policies to be enforced consistently.

### Station Memberships

Drivers can submit and monitor membership requests for eligible stations. Administrators can configure payment instructions, record payments, approve or reject requests, update active memberships, and revoke access. This creates a foundation for station-specific benefits and recurring customer relationships.

### Identity and Access Control

Firebase supports mobile and administrator authentication, including email/password flows, Google sign-in, verification, password recovery, and ID-token-based API access. Backend middleware distinguishes authenticated users, active users, and administrators before protected operations are executed.

### Administration and Reporting

The admin console provides network metrics, customer and owner records, charger/station management, pricing, session details, settlements, payouts, revenue-oriented reports, OCPP logs, audit trails, and diagnostic controls. Filters and pagination make operational datasets more manageable.

### Reliability and Observability

Basic and detailed health checks expose service readiness. Request identifiers, structured error handling, persistent OCPP messages, charger runtime state, live-session records, and admin audits provide several layers of traceability when investigating problems.

---

## 8. The Results

### Project Impact

The completed platform replaces a collection of disconnected charging tasks with a coordinated digital service. Drivers receive a clearer path from account creation to charger access and post-session records. Administrators gain a central workspace for managing infrastructure, people, policies, protocol activity, and financial operations. The business gains a domain model and service architecture that can support additional chargers, stations, owners, pricing arrangements, and membership programs.

### Key Results

No verified production analytics or client-approved performance figures are included in this repository, so the outcomes below are intentionally qualitative:

- Established one connected customer journey for charger discovery, booking, payment, charging, and history.
- Connected mobile commands to OCPP-compatible charging infrastructure through a dedicated central system.
- Created clearer operational visibility through live state, health checks, OCPP logs, session records, and audit trails.
- Reduced dependence on manual financial reconstruction by modelling wallets, ledgers, payments, owner earnings, payouts, and settlements explicitly.
- Provided self-service account, wallet, booking, membership, receipt, notification, legal, and support experiences.
- Delivered a scalable three-application foundation that separates customer experience, operational control, and core business logic.
- Added automated coverage around financially and operationally sensitive backend behavior.

---

## 9. Client Testimonial

> A client-approved testimonial was not included in the project materials. Add a verified quotation here before publishing this case study.

**— Client representative, role, LankaEV+**

---

## 10. Conclusion

### Final Outcome

LankaEV+ transforms the complexity of public EV charging into one coherent product ecosystem. A user-friendly Flutter application handles the driver journey, an OCPP-enabled backend coordinates physical chargers and transaction rules, and a React administration console gives the operating team visibility and control. The outcome is not simply an app, but a practical digital foundation for running and expanding an EV charging service.

### What's Next

The architecture supports further development such as broader field validation across charger manufacturers, richer station mapping and route planning, automated owner disbursement, enhanced notification and support workflows, deeper product analytics, iOS release validation, expanded automated UI testing, and deployment observability. Any future phase should be prioritized using real usage, charger reliability, support cases, and settlement data.

---

## 11. Call to Action

### Have a similar challenge?

We help ambitious businesses turn complex, connected-service challenges into clear and effective digital products—from customer interfaces to operational platforms and backend integrations.

**[Start a Project](#contact)** · [Talk to Our Team](#contact)

> Replace the links above with the portfolio owner's real contact or enquiry URL before publication.

---

# Technical Documentation

## System Architecture

```text
┌─────────────────────────────┐       ┌──────────────────────────────┐
│ Flutter customer app        │       │ React admin console          │
│ Auth, scan, booking, wallet │       │ Operations, finance, audit   │
└──────────────┬──────────────┘       └──────────────┬───────────────┘
               │ HTTPS / Firebase ID token           │ HTTPS / Firebase ID token
               └──────────────────┬───────────────────┘
                                  ▼
               ┌──────────────────────────────────────┐
               │ Node.js + Express central system     │
               │ APIs, domain services, billing, jobs │
               └───────┬───────────┬───────────┬──────┘
                       │           │           │
            Prisma     │ Redis /   │ Firebase  │ PayHere / email /
                       │ BullMQ     │ Admin     │ Cloudinary
                       ▼           ▼           ▼
                    MySQL      Background   External services
                                  jobs
                                  │
                                  │ OCPP 1.6 over WebSocket
                                  ▼
                         EV charge points
```

### Main Components

| Directory | Responsibility | Primary technologies |
| --- | --- | --- |
| `lanka-ev-app/` | Customer mobile experience | Flutter, Dart, Riverpod, GoRouter, Dio, Firebase, WebSockets |
| `Backend/` | REST API, OCPP central system, business rules, persistence, and jobs | Node.js, Express, Prisma, MySQL, Redis, BullMQ, WebSocket |
| `Lanka-EV-Admin-Frontend/` | Administrative and operational web console | React, TypeScript/JavaScript, Vite, Tailwind CSS, Axios, Recharts |

## Core Data Model

The Prisma schema includes the following principal entities:

- `User`, `Wallet`, and `Ledger` for identity and account value;
- `Station`, `Charger`, `Connector`, and `ChargerRuntimeState` for infrastructure;
- `Pricing`, `ChargingSession`, and `ChargingSessionLive` for charging activity;
- `Booking` for future connector reservations;
- `Payment` for external payment records;
- `StationMembershipRequest` and `StationMembership` for station-specific programs;
- `Settlement` and `SettlementItem` for owner reconciliation;
- `OcppMessageLog` and `AdminAuditLog` for traceability;
- `GracePeriodJob` and `AppConfig` for operational policy and configuration.

## Repository Structure

```text
lankaevplus_app/
├── Backend/
│   ├── prisma/                 # Schema, migrations, and seed scripts
│   ├── scripts/                # Maintenance and Firebase-user utilities
│   ├── src/api/                # REST routes and controllers
│   ├── src/config/             # Database, Redis, Firebase, and environment setup
│   ├── src/middleware/         # Authentication and error handling
│   ├── src/ocpp/               # OCPP server, handlers, commands, and validation
│   ├── src/services/           # Domain and integration services
│   ├── src/workers/            # Booking, grace-period, and settlement jobs
│   └── tests/                  # Unit and integration tests
├── Lanka-EV-Admin-Frontend/
│   └── src/
│       ├── api/                # Typed API clients
│       ├── components/         # Shared UI elements
│       ├── context/            # Authentication state
│       ├── layouts/            # Admin layout
│       ├── pages/              # Management and reporting screens
│       └── router/             # Protected web routes
└── lanka-ev-app/
    ├── assets/                 # Brand, charger, connector, and app imagery
    ├── android/                # Android platform configuration
    ├── lib/core/               # Networking, theme, configuration, and utilities
    ├── lib/features/           # Feature-oriented mobile modules
    └── test/                   # Flutter tests
```

## Local Development

### Prerequisites

- Node.js 18 or later and npm
- MySQL 8-compatible database
- Redis for background booking, grace-period, and settlement jobs
- Flutter SDK compatible with Dart `^3.7.0`
- Android Studio/Android SDK or another supported Flutter target
- Firebase project for production-style authentication and notifications
- PayHere sandbox credentials for payment testing

### 1. Backend

```bash
cd Backend
npm install
```

Create `Backend/.env` using local or secret-manager values. The exact validation rules are defined in `Backend/src/config/env.js`; typical configuration includes:

```env
DATABASE_URL=mysql://USER:PASSWORD@HOST:3306/DATABASE
PORT=7070
REDIS_URL=redis://localhost:6379
CORS_ORIGIN=http://localhost:3006
NODE_ENV=development

# Firebase Admin — use a secure environment-specific configuration
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-service-account-email
FIREBASE_PRIVATE_KEY=your-private-key

# Configure payment, email, and media credentials as required by the services
```

Prepare and run the service:

```bash
npm run db:generate
npm run db:migrate
npm run dev
```

Default development endpoints:

- REST API: `http://localhost:7070/api`
- OCPP WebSocket: `ws://localhost:7070/`
- Health: `http://localhost:7070/health`
- Detailed health: `http://localhost:7070/health/detailed`

Redis-dependent workers are started when Redis is available. Database seeding is optional; review `Backend/SEED_README.md` before using seed commands.

### 2. Customer Mobile App

```bash
cd lanka-ev-app
flutter pub get
flutter run
```

Create `lanka-ev-app/.env` with environment-appropriate values, for example:

```env
API_BASE_URL=http://10.0.2.2:7070
PAYHERE_SANDBOX=true
PAYHERE_MERCHANT_ID=your-sandbox-merchant-id
```

For an Android emulator, `10.0.2.2` normally resolves to the host machine. Configure Firebase using environment-specific platform files and never place server credentials or merchant secrets in a distributed mobile application.

### 3. Administration Console

```bash
cd Lanka-EV-Admin-Frontend
npm install
npm run dev
```

Create `Lanka-EV-Admin-Frontend/.env`:

```env
VITE_API_URL=http://localhost:7070/api
VITE_FIREBASE_API_KEY=your-web-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Use `npm run build` to produce the deployable `dist/` directory.

## Testing

Run the backend test suite from `Backend/`:

```bash
npm test
npm run test:coverage
```

Run Flutter analysis and tests from `lanka-ev-app/`:

```bash
flutter analyze
flutter test
```

Build the administration console from `Lanka-EV-Admin-Frontend/` as a compile-time verification:

```bash
npm run build
```

Some backend integration tests require reachable test instances of MySQL and Redis. Use isolated test data and configuration.

## Security and Configuration Notes

- Never commit `.env` files, database credentials, Firebase Admin service-account JSON, PayHere merchant secrets, SMTP credentials, Cloudinary secrets, seed credentials, or production signing material.
- Public Firebase client configuration is different from a Firebase Admin private key; the latter must remain server-side.
- Payment hashes and authoritative payment confirmation should be generated or verified by the backend. A merchant secret must not be shipped inside the Flutter application.
- Restrict CORS to known web origins in deployed environments.
- Rotate any credential that has previously been committed or shared; removing it from the latest revision does not remove it from Git history.
- Keep production, staging, development, and test credentials separate.
- The current working copies contain credential-like tracked files. Audit them before making any repository public, revoke exposed secrets, replace sensitive files with safe templates, and clean Git history where necessary.

## Supporting Documentation

More implementation-specific guides are available inside each component:

- `Backend/README.md` — backend installation and operations
- `Backend/OCPP_CHARGER_SETUP.md` — charge-point connection guidance
- `Backend/WALLET_SYSTEM_README.md` — wallet and ledger behavior
- `Backend/PAYHERE_INTEGRATION_README.md` — payment integration
- `Backend/RELEASE_CHARGING_API_README.md` — locked-fund release behavior
- `Lanka-EV-Admin-Frontend/FIREBASE_SETUP.md` — admin authentication configuration
- `Lanka-EV-Admin-Frontend/ERROR_HANDLING_GUIDE.md` — frontend error strategy
- `lanka-ev-app/FRONTEND_INTEGRATION_GUIDE.md` — mobile/backend integration notes

## Portfolio Publication Checklist

Before publishing this document as a public case study:

- Replace the testimonial placeholder with approved client wording or remove that section.
- Replace the call-to-action links with the correct portfolio contact URL.
- Confirm the official client/brand naming and project dates.
- Add approved final screenshots for the admin console and key mobile flows.
- Add verified analytics only when their source and measurement period are known.
- Complete the credential audit described above before exposing source code.

## Contact

Add the portfolio owner's name, role, email address, website, and project-enquiry link here.

---

_This README describes the system evidenced by the repository as of September 2026. Qualitative outcomes are used where production metrics and a client-approved testimonial were not available._
