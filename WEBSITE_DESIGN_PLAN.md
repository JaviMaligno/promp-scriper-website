# Website Design and Implementation Plan

This document outlines the design and step-by-step implementation plan for the Prompt Scripter extension's official website.

## 1. Overview and Goals

*   **Primary Goal:** To create a clean, professional, and trustworthy landing page that clearly communicates the extension's value and encourages users to install it from the Chrome Web Store.
*   **Secondary Goal:** To serve as a host for essential information like the privacy policy, contact details, and demonstrations.
*   **Design Philosophy:** Simple, modern, and focused. The design should be visually appealing without distracting from the core message.

## 2. Technology Stack

*   **Framework:** **Next.js (with React)**. This is the ideal choice for its performance, ease of development, and seamless deployment on Vercel.
*   **Styling:** **Tailwind CSS**. A utility-first CSS framework that will allow for rapid development of a modern, responsive design without writing extensive custom CSS.
*   **Deployment:** **Vercel**. For its excellent free tier, GitHub integration, and native support for Next.js.

## 3. Website Structure and Content

The website will be a single-page layout, which is modern and effective for this purpose. It will consist of the following sections:

1.  **Navigation Bar:**
    *   **Content:** Logo/Name ("Prompt Scripter") on the left. A single, prominent "Install for Chrome" button on the right.

2.  **Hero Section:**
    *   **Headline:** A clear and compelling headline, e.g., "Stop Retyping. Start Scripting."
    *   **Sub-headline:** A brief, one-sentence description of the extension, e.g., "Create, manage, and use powerful prompt templates on all your favorite AI chat platforms."
    *   **Call to Action (CTA):** A primary "Install for Chrome" button.
    *   **Visual:** A high-quality, clean screenshot of the extension in use, or a short, looping video.

3.  **Features Section:**
    *   **Layout:** A 3-column grid showcasing the top features.
    *   **Content (Example Features):**
        *   **Feature 1:** Icon + "Create Reusable Templates" + "Save any prompt as a reusable template with dynamic variables."
        *   **Feature 2:** Icon + "Organize with Workflows" + "Chain templates together with conditional logic to create powerful, guided conversations."
        *   **Feature 3:** Icon + "Works Everywhere You Do" + "Seamlessly integrates with ChatGPT, Gemini, and other major platforms."

4.  **Demo Video Section:**
    *   **Headline:** "See It in Action"
    *   **Content:** A large, embedded YouTube video player showcasing a complete walkthrough of the extension's features.

5.  **Screenshot Gallery:**
    *   **Headline:** "A Look Inside"
    *   **Content:** A grid or carousel displaying the 3-5 high-quality screenshots required for the Chrome Web Store listing.

6.  **Final Call to Action (CTA) Section:**
    *   **Headline:** "Ready to Boost Your Productivity?"
    *   **Content:** A final, large "Install for Chrome" button.

7.  **Footer:**
    *   **Content:** Simple, clean footer with:
        *   © 2025 Prompt Scripter
        *   Link to the Privacy Policy page.
        *   Contact Email Address.

## 4. Design and Aesthetics

*   **Color Palette:**
    *   **Background:** White (`#FFFFFF`) or a very light gray (`#F9FAFB`).
    *   **Primary/Accent:** A deep indigo (`#4F46E5`) for buttons and highlights.
    *   **Text:** A dark slate gray (`#1F2937`) for body text and a slightly lighter gray (`#4B5563`) for sub-headlines.
*   **Typography:**
    *   **Headlines:** A bold, modern sans-serif font like **Inter** or **Manrope** (available from Google Fonts).
    *   **Body Text:** The same font in a regular weight for consistency and readability.
*   **Overall Feel:** Spacious, with plenty of white space. Content sections will be clearly defined. All elements will be fully responsive to look great on desktop, tablet, and mobile.

## 5. Step-by-Step Implementation Plan

This plan breaks the process into small, incremental steps for a frontend developer.

### Step 1: Project Setup

1.  **Initialize Next.js App:**
    ```bash
    npx create-next-app@latest prompt-scripter-website
    ```
2.  **Install Tailwind CSS:** Follow the official Next.js + Tailwind CSS integration guide.
3.  **File Structure:** Create the following directory structure inside the project:
    ```
    /components
    ├── /layout
    │   ├── Navbar.js
    │   └── Footer.js
    ├── Hero.js
    ├── Features.js
    ├── Demo.js
    └── CTA.js
    /pages
    ├── index.js
    └── privacy.js
    ```

### Step 2: Build Core Layout

1.  **`Footer.js`:** Create the footer component with the copyright info, privacy link, and contact email.
2.  **`Navbar.js`:** Create the navigation bar with the logo/name and the "Install" button.
3.  **Modify `_app.js`:** Wrap all pages with the `Navbar` and `Footer` to create a consistent layout.

### Step 3: Build the Homepage Sections

1.  **`Hero.js`:** Build the hero section with the headline, sub-headline, and CTA button. Use a placeholder image for the main visual for now.
2.  **`Features.js`:** Build the features section. Create a reusable `FeatureCard` component and map over an array of feature data to display them in a 3-column grid.
3.  **`Demo.js`:** Build the demo section. Embed the YouTube video using a responsive iframe.
4.  **`CTA.js`:** Build the final call-to-action section.

### Step 4: Assemble the Homepage

1.  **`pages/index.js`:** Import the `Hero`, `Features`, `Demo`, and `CTA` components and arrange them in the correct order to form the homepage.

### Step 5: Create the Privacy Policy Page

1.  **`pages/privacy.js`:** Create the privacy policy page.
2.  Copy the content from `docs/PRIVACY_POLICY.md` into this page.
3.  Apply basic styling for readability (e.g., proper heading sizes, margins, etc.).

### Step 6: Final Touches and Deployment

1.  **Link Buttons:** Ensure all "Install for Chrome" buttons link to the correct Chrome Web Store URL (use a placeholder for now).
2.  **Responsiveness:** Thoroughly test the website on different screen sizes (desktop, tablet, mobile) and fix any layout issues.
3.  **Deployment:**
    *   Create a new repository on GitHub for the website code.
    *   Connect the repository to a new project on Vercel.
    *   Vercel will automatically build and deploy the site. Any future pushes to the `main` branch will trigger a new deployment.

## 6. Implementation Progress (Live Checklist)

- [x] Initialize Next.js app scaffold (containerized dev via Docker Compose)
- [x] Install and configure Tailwind CSS
- [x] Establish file structure: `components/layout`, `components/sections`, `pages/`
- [x] Create `Navbar` with Install button (env-driven URL)
- [x] Create `Footer` with Privacy link and contact
- [x] Build `Hero` section
- [x] Build `Features` section
- [x] Build `Demo` section (YouTube embed placeholder)
- [x] Build `CTA` section
- [x] Assemble homepage from sections
- [x] Create `pages/privacy.tsx` and load policy from `docs/PRIVACY_POLICY.md`
- [x] Add reusable SEO head (title/description + OG/Twitter)
- [x] Add `robots.txt` and static `sitemap.xml`
- [x] Add Open Graph image `public/og.svg`
- [x] Add favicon and link tags in `_document.tsx`
- [x] Add `@tailwindcss/typography` plugin
- [x] Centralize Install URL and Site URL via `.env` (`NEXT_PUBLIC_CHROME_URL`, `NEXT_PUBLIC_SITE_URL`)
- [x] Docker dev workflow in `docker-compose.yml` (Node 20 image)

Remaining
- [ ] Replace demo video URL and add real screenshots gallery (Section 5 in plan)
- [ ] Set real Chrome Web Store URL in `.env` and verify Install buttons
- [ ] Final responsive polish across breakpoints (desktop/tablet/mobile)
- [ ] Accessibility pass (focus rings, landmarks, aria labels)
- [ ] SEO polish: canonical domain, meta tuning, analytics (optional)
- [ ] Prepare GitHub repo and Vercel project, wire env vars, and deploy

Notes
- Navbar/Footer are included per-page to keep flexibility; can be lifted to `_app.tsx` later if desired.
- Privacy content is sourced from the monorepo at build time; consider copying to local MD or rendering MDX later.