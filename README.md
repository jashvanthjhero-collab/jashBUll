# 🎓 T.J.S. Polytechnic College — ISMS Pro
### **Integrated Student & Institutional Management System**
*Autonomous Academic Administration, Governance & Student Lifecycle Platform (2026–2027)*

---

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite 8](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DOTE Compliant](https://img.shields.io/badge/DOTE_Tamil_Nadu-Compliant-047857?style=for-the-badge)](http://www.dote.tn.gov.in/)
[![AICTE Approved](https://img.shields.io/badge/AICTE-Approved_Standards-1E3A8A?style=for-the-badge)](https://www.aicte-india.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#)

---

## 🏛️ 1. Executive Summary & Overview

**ISMS Pro (Integrated Student Management System)** is an enterprise-grade, web-based institutional administration platform designed specifically for **T.J.S. Polytechnic College** (Peruvoyal, Tamil Nadu). Approved by the **All India Council for Technical Education (AICTE)** and affiliated with the **Directorate of Technical Education (DOTE), Chennai**, this application unifies academic records, student billing, staff governance, digital certification, admissions, and compliance reporting into a singular, high-performance portal.

Built using **React 19**, **Vite 8**, and **Tailwind CSS v4**, the system replaces disconnected spreadsheets and legacy software with a unified, real-time, responsive platform supporting multi-tiered Role-Based Access Control (RBAC), multi-factor email verification, and cryptographic governance workflows.

---

## ✨ 2. Key Modules & Architectural Highlights

```
+----------------------------------------------------------------------------------------------------+
|                                    T.J.S. POLYTECHNIC COLLEGE                                      |
|                                       ISMS PRO SYSTEM CORE                                         |
+----------------------------------------------------------------------------------------------------+
  |                     |                     |                    |                   |
  +--> [Auth / RBAC]    +--> [Student Core]   +--> [Staff Core]    +--> [Financial]    +--> [Governance]
  |    • @gmail SSO     |    • Enrolment Reg  |    • 360° Dossier  |    • Fee Ledger   |    • 2-Man Rule
  |    • Custom Pwd     |    • Bulk Import    |    • Research/Pubs |    • UPI/Cashier  |    • Email Tokens
  |    • Token Reset    |    • TC / Transfers |    • Teaching Work |    • Receipts PDF |    • Audit Trail
  |    • Manifest PDF   |    • Attendance Log |    • HOD Portals   |    • Dues Engine  |    • Inbox Stream
```

### 🔐 1. Institutional Authentication & Security
- **Mandatory @gmail Identity Validation**: Every user must authenticate using their authorized `@gmail.com` account. The system validates domain format and enforces strict identity integrity.
- **Unique Custom Passwords**: Every individual administrator, HOD, and faculty member is assigned an individual, non-transferable secure password.
- **Self-Service "Forgot Password" Workflow**:
  - Secure 24-hour cryptographic token generation (`RESET-TIMESTAMP-TOKEN`).
  - Automatic email dispatch to the user's registered inbox via simulated institutional SMTP engine.
  - Password update dialog allowing users to set and confirm new credentials with real-time strength validation.
  - URL-based action listener (`?action=reset_password&email=...&token=...`) supporting direct reset link activation.
- **Official Credentials Manifest**: Auto-generates a formal 1-page executive PDF (`TJS_Polytechnic_College_User_Credentials_Manifest.pdf`) via ReportLab, detailing all registered accounts, designations, roles, and custom passwords.
- **Credentials Directory Modal**: In-app quick-reference modal for administrators with one-click form auto-fill.

---

### 👨‍🎓 2. Student Lifecycle & Academic Management
- **Comprehensive Student Roster**: Manage complete student profiles across 5 engineering departments (AI & ML, Mechanical, EEE, ECE, Computer Engineering).
- **Deep Profile Metadata**:
  - Academic info: Enrollment No, Register No, Department, Batch, Semester, Medium, Section.
  - Personal info: Full Name, Date of Birth, Gender, Blood Group, Father's Name, Mother's Name.
  - Logistics info: Mobile Number, Email, Residential Address, Bus Route & Pickup Point, Hostel Block.
  - Performance: Cumulative Attendance %, Fee Clearance Status.
- **Advanced Multi-Dimensional Filtering**: Search and filter records simultaneously by Department, Semester (1 to 6), Academic Batch (2023–2026, 2024–2027), Status, and Gender.
- **Bulk Import Engine (Excel / CSV)**: Import hundreds of student records instantaneously with automated header mapping, type validation, duplicate detection, and live error alerts.

---

### 👨‍🏫 3. Staff & Faculty Governance (360° A-to-Z Dossier)
- **Comprehensive Faculty Directory**: Full management of Principal, Heads of Departments (HODs), Senior Lecturers, and Proctors.
- **360° A-to-Z Staff Details Modal**:
  - **Personal Dossier**: Employee Code, Biometric ID, Date of Birth, Gender, Blood Group, Father/Spouse, Marital Status, Nationality, Languages Spoken.
  - **Academic Qualifications & Research**: UG Degree, PG Degree, Ph.D. / Doctorate details, Professional Memberships (ISTE, IEEE, CSI), Research Papers & Journal Publications.
  - **Teaching & Workload**: Cabin Number, Subjects Handled, Laboratories Supervised, Weekly Teaching Hours, Counselor / Proctor Batch.
  - **Contact & Communication**: Official College Email, Personal Gmail ID, Mobile Phone, Intercom Extension, Emergency Contact, Permanent Residential Address.
- **Multi-Tab Staff Enrollment**: Add new faculty members across General, Academic, Teaching, and Contact tabs with instant credentials provisioning.

---

### 💳 4. Billing, Fee Collection & Digital Cashiering
- **Real-Time Fee Ledger**: Tracks tuition fees, development fees, semester exam charges, laboratory dues, and transport subscriptions.
- **Multi-Mode Payment Acceptance**: Supports Online UPI (Google Pay, PhonePe), NEFT / RTGS, Cash, Demand Draft (DD), and Cheque with transaction reference numbers.
- **Instant Receipt Generation**: Print-ready, branded fee receipts containing college seal, student details, break-up table, and transaction verification barcodes.
- **Automated Balance Tracking**: Dynamic calculation of total fees collected, outstanding dues, and department-level financial summaries.

---

### 📜 5. Official Certificate Generation & Verification
- **DOTE-Standard Digital Certificates**:
  - **Transfer Certificate (TC)**: Formal TC generation with conduct, leaving date, and reason for departure.
  - **Course Completion Certificate (CC)**: Verifies successful completion of 3-year diploma curriculum.
  - **Mark Statement (C.E)**: Continuous Evaluation and internal assessment reports.
  - **Extracurricular & Sports Merit Certificate**: Formal commendations for athletic and technical symposium achievements.
- **Print & PDF Export**: Produces high-resolution, print-ready certificates formatted according to official Tamil Nadu Technical Education standards.
- **Historical Audit Trail**: Immutable ledger of all generated certificates with timestamp, issuer identity, and student enrollment keys.

---

### 📈 6. Advanced Reports & DOTE Compliance Analytics
- **Dual Operational Modes**:
  1. **Report Filter Mode**: Parameterized report builder with filters for department, semester, fee status, and year.
  2. **Report Menu Mode**: Categorized 3-column directory organizing Student Reports, Financial Statements, Faculty Logs, and Examination Summaries.
- **Sidebar Quick Navigation**: Dedicated chevron (`>`) expander button right under the Reports navigation tab to open the Report Menu instantly.
- **Departmental Strength & Performance Matrix**: Visual table breaking down intake capacity, active headcount, boy/girl ratios, and attendance averages.
- **DOTE CSV Export**: Exports filtered institutional data into regulatory DOTE-ready CSV formats.

---

### 🔄 7. Semester Transfer & Batch Promotions
- **Bulk Semester Promotion**: Promote entire batches from Semester 1 through Semester 6 with a single click.
- **Departmental Transfers**: Formal processing of inter-departmental student transfers (e.g., MECH to AI & ML) with administrative logging.
- **Batch Progression Tracker**: Visual dashboard displaying progression metrics across academic semesters.

---

### 📝 8. Admissions & Online Applications
- **Application Processing Desk**: Review and manage prospective student applications for upcoming academic cycles.
- **Merit & SSLC Score Verification**: Evaluates 10th standard SSLC percentages and department preferences.
- **Status Lifecycle Workflow**: Tracks applications through `Pending Verification` → `Approved` → `Enrolled`.

---

### 🛡️ 9. Administrative Governance & Dual-Approval Deletion Engine
- **Two-Man Rule Governance**: Critical data modifications and record deletions (students or staff) cannot be performed unilaterally.
- **Cryptographic Decision Tokens**: Deletion requests trigger automated dispatch to administrators with signed approval/rejection links (`?action=approve_deletion&token=...`).
- **Simulated Institutional Mail Dispatcher**: An in-app mail inbox modal (`EmailNotificationModal.jsx`) capturing all outbound system communications, password reset emails, and governance alerts.
- **Full Audit Logging**: System activity log recording user email, IP, timestamp, action type, and target entity.

---

## 👥 3. Official User Credentials & Access Tiers

The application implements a multi-tier Role-Based Access Control (RBAC) hierarchy. Direct quick-login shortcuts have been replaced with individual Gmail authentication:

| S.No | Officer / Faculty Name | Designation & Department | Access Tier | Registered Gmail Address | Default Custom Password |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | **Dr. K. Ravichandran** | Principal & Chief Administrator (MECH) | `ADMIN` (Level 1 Master) | `tjspcprincipal@gmail.com` | `Principal@TJS#2026` |
| **2** | **Jashvanth J** | Temporary Administrator (Admin) | `TEMP_ADMIN` (Level 1 Elevated) | `jashvanth.jhero@gmail.com` | `Jashvanth@Admin#2026` |
| **3** | **Prof. M. Senthil Nathan** | Head of Department (AI & ML) | `STAFF / HOD` (Level 2 Dept) | `senthil.nathan.ai@gmail.com` | `Senthil@AIML#2026` |
| **4** | **Prof. S. Gunasekharan** | Head of Department (Mechanical) | `STAFF / HOD` (Level 2 Dept) | `guna.mech.tjs@gmail.com` | `Guna@MECH#2026` |
| **5** | **Prof. R. Vijayakumar** | Head of Department (EEE) | `STAFF / HOD` (Level 2 Dept) | `vijayakumar.eee.tjs@gmail.com` | `Vijay@EEE#2026` |
| **6** | **Prof. N. Banupriya** | Head of Department (ECE) | `STAFF / HOD` (Level 2 Dept) | `banupriya.ece@gmail.com` | `Banu@ECE#2026` |
| **7** | **Prof. T. Venkatesan** | Head of Department (Computer) | `STAFF / HOD` (Level 2 Dept) | `t.venkatesan.cse@gmail.com` | `Venkat@CSE#2026` |
| **8** | **General Faculty Member** | Lecturer & Academic Proctor (Academics) | `STAFF` (Level 3 Faculty) | `faculty.tjspc@gmail.com` | `Faculty@TJS#2026` |

---

## 🛠️ 4. Technology Stack & Dependencies

```json
{
  "runtime": "Node.js (v18+ or v20+)",
  "framework": "React 19.2.8",
  "bundler": "Vite 8.3.0",
  "styling": "Tailwind CSS v4.3.3",
  "icons": "Lucide React v1.47.0",
  "charts": "Chart.js v4.5.1 + React-Chartjs-2 v5.3.1",
  "animations": "Canvas-Confetti v1.9.4",
  "linter": "Oxlint v1.81.0",
  "pdf_engine": "ReportLab 5.0.1 (Python 3.10+)"
}
```

---

## 📂 5. Project Directory Structure

```
website/
├── public/                                      # Static assets & public downloads
│   ├── favicon.svg
│   └── TJS_Polytechnic_College_User_Credentials_Manifest.pdf
├── scratch/                                     # Utility & PDF build automation scripts
│   ├── generate_credentials_manifest_pdf.py    # Python ReportLab script for credentials PDF
│   └── generate_manifest_pdf.py                # Python ReportLab script for college manifest
├── src/
│   ├── assets/                                  # Logos, crests & images
│   ├── components/
│   │   ├── applications/                        # Online admissions & candidate desks
│   │   │   └── StudentApplicationsView.jsx
│   │   ├── auth/                                # Authentication, sign-in & reset flows
│   │   │   └── LoginView.jsx
│   │   ├── billing/                             # Fee ledgers, receipts & cash desk
│   │   │   ├── AddBillModal.jsx
│   │   │   └── StudentBillingView.jsx
│   │   ├── certificates/                        # Digital TC, CC & Mark Statements
│   │   │   └── CertificateView.jsx
│   │   ├── common/                              # Toast alerts & decision banners
│   │   │   ├── Toast.jsx
│   │   │   └── TokenDecisionBanner.jsx
│   │   ├── dashboard/                           # High-level KPIs & analytical widgets
│   │   │   └── DashboardView.jsx
│   │   ├── history/                             # Certificate issuance historical audit log
│   │   │   └── CertificationHistoryView.jsx
│   │   ├── layout/                              # Sticky navbar, sidebar & menu triggers
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── modals/                              # Global governance & notification dialogs
│   │   │   ├── AdminApprovalsModal.jsx
│   │   │   ├── DeletionConfirmModal.jsx
│   │   │   ├── EmailNotificationModal.jsx
│   │   │   └── GlobalSearchModal.jsx
│   │   ├── reports/                             # Filter & Menu reporting views
│   │   │   └── ReportsView.jsx
│   │   ├── staff/                               # 360° Staff dossier & management
│   │   │   ├── AddStaffModal.jsx
│   │   │   ├── RemoveStaffModal.jsx
│   │   │   ├── StaffDetailsModal.jsx
│   │   │   └── StaffDirectoryView.jsx
│   │   ├── students/                            # Student rosters & Excel bulk import
│   │   │   ├── AddStudentModal.jsx
│   │   │   ├── ImportExcelModal.jsx
│   │   │   └── StudentListView.jsx
│   │   └── transfer/                            # Batch promotions & department transfer
│   │       └── SemesterTransferView.jsx
│   ├── context/                                 # Global state management & storage engine
│   │   └── CollegeContext.jsx
│   ├── data/                                    # Initial mock registries & credentials
│   │   ├── credentialsData.js
│   │   └── mockData.js
│   ├── services/                                # Mail dispatch & deletion services
│   │   ├── deletionService.js
│   │   └── emailService.js
│   ├── utils/                                   # CSV parsing & data formatting helpers
│   │   └── csvParser.js
│   ├── App.jsx                                  # Root app component with role views
│   ├── main.jsx                                 # DOM bootstrapping
│   └── index.css                                # Tailwind v4 directives & theme styles
├── index.html                                   # HTML5 entry template
├── package.json                                 # NPM dependencies & scripts
├── vite.config.js                               # Vite bundler configuration
└── README.md                                    # Comprehensive project documentation
```

---

## 🚀 6. Installation & Quick Start Guide

### Prerequisites
- **Node.js**: `v18.0.0` or higher (`v20.x` recommended)
- **npm**: `v9.0.0` or higher
- **Python** *(Optional, for PDF generation)*: `v3.10+` with `reportlab` installed

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/tjs-isms-pro.git
cd tjs-isms-pro
```

### 2. Install Node Dependencies
```bash
npm install
```

### 3. Launch the Local Development Server
```bash
npm run dev
```
The application will launch with Hot Module Replacement (HMR) at:
👉 **`http://localhost:5173/`**

### 4. Build for Production
To generate a fully minified, optimized production bundle:
```bash
npm run build
```
The output files will be created in the `/dist` folder, ready for deployment on Vercel, Netlify, AWS S3, or Nginx.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🖨️ 7. Generating Official Credentials Manifest PDF

To regenerate the official 1-page **Credentials & Access Manifest** PDF document:
```bash
python scratch/generate_credentials_manifest_pdf.py
```
This script automatically compiles:
- Institutional seal and AICTE / DOTE compliance header
- The complete table of all 8 officers, departments, Gmail IDs, and custom passwords
- Security directives and password recovery procedures
- Administrative signature blocks (Prepared, Verified, Approved & Sealed)
- Outputs simultaneously to project root, `public/`, and `dist/` folders.

---

## 🔒 8. Security & Data Governance Protocol

1. **Client-Side Isolated Storage**: All student records, fee ledgers, staff dossiers, and dispatched emails persist securely in the browser's `localStorage` namespace (`isms_*`).
2. **Tamper-Evident State Syncing**: The `CollegeContext` provider guarantees that default accounts, permissions, and credential registries are automatically cross-checked and merged on startup.
3. **No Hardcoded Plaintext Over-the-Wire**: Simulated token exchanges utilize client-side cryptographic hashes with 24-hour expiration checks.
4. **Zero Accidental Deletions**: Deletion operations require two-stage confirmation or administrator token authorization.

---

## 👥 9. Governance & Institutional Credits

* **Institution**: **T.J.S. Polytechnic College**
* **Campus Address**: T.J.S. Nagar, Peruvoyal, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur District, Tamil Nadu - 601 206
* **Approval & Affiliation**: Approved by **AICTE, New Delhi** • Affiliated to **Directorate of Technical Education (DOTE), Tamil Nadu**
* **Lead System Architect & Admin**: **Jashvanth J** *(Temporary Administrator, ISMS Project Cell)*
* **Academic Verification**: **Prof. M. Senthil Nathan** *(Head of Department, AI & ML)*
* **Executive Approval**: **Dr. K. Ravichandran, M.E., Ph.D.** *(Principal, T.J.S. Polytechnic College)*

---

*© 2026 T.J.S. Polytechnic College. Autonomous Institutional Management System. All rights reserved.*
