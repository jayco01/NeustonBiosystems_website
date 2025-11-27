# **Neuston Biosystems Website**

## **Project Overview**

This repository contains the source code for the official corporate website of Neuston Biosystems, a pre-seed stage cleantech startup. The primary goal of this website is to establish a professional online presence to attract angel investors and future R\&D partners (specifically, cheese producers).

This project was developed as a volunteer effort by Jay Layco, during his second semester as a Software Development student at SAIT, in collaboration with the founder, Scott Pierobon.

**Live Site:** [https://www.neustonbiosystems.com/](https://www.neustonbiosystems.com/#/)

## **Tech Stack**

This website is a modern static site built with the latest frontend technologies:

* **Framework:** [React v19](https://react.dev/)  
* **Build Tool:** [Vite](https://vitejs.dev/)  
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)  
* **Routing:** [React Router v7](https://reactrouter.com/)

## **Getting Started: Local Development Setup**

To run this project on your local machine, please follow these steps.

1. Clone the Repository  
   Open your terminal and clone the project from GitHub.
   ```shell
   git clone https://github.com/jayco01/NeustonBiosystems_website.git
   ```
3. **Navigate to the Project Directory**
   ```shell
   cd NeustonBiosystems_website
   ```
5. Install Dependencies  
   This command will install all the necessary packages listed in package.json.  
   ```shell
   npm install
   ```
7. Run the Development Server  
   This command starts the local Vite server.  
   ```shell
   npm run dev
   ```
   The website will now be running locally, typically at http://localhost:5173.

## **Project Structure**

The project is organized to be clean and easy to navigate for future development.

* /public: Contains static assets that are not processed by the build tool (e.g., favicon).  
* /src: This is the main folder for all of the website's source code.  
  * /src/assets: Contains static assets like images, logos, and diagrams imported into components.  
  * /src/components: Contains reusable React components (e.g., Navbar.jsx, Footer.jsx).  
  * /src/pages: Contains the main component for each of the **8 pages** of the site (e.g., HomePage.jsx, ForInvestorsPage.jsx, ThankYouPage.jsx).  
  * main.jsx: The application entry point where routing logic is initialized.  
* README.md: This file\! The main documentation for the project.

## **Key Technical Decisions (Project Handoff)**

This section contains important context for future developers maintaining this repository.

### **1\. Static Site Architecture & CI/CD**

This website is a **Static Single Page Application (SPA)**.

* **Hosting:** It is hosted on **GitHub Pages**.  
* **Deployment:** We use a **GitHub Actions CI/CD pipeline** (defined in .github/workflows). Any code pushed to the main branch is automatically built (npm run build) and the resulting artifact is deployed to the live site.

### **2\. Domain & DNS Configuration**

While the code lives on GitHub, the domain neustonbiosystems.com is managed via **Squarespace**.

* **Connection:** The domain is connected to GitHub Pages via **DNS CNAME records**.  
* **SSL/HTTPS:** Security certificates are automatically managed by GitHub Pages (Enforce HTTPS is enabled).  
* **Important:** If you change the repository name, you must update the "Custom Domain" setting in the repository's "Pages" settings to prevent the site from going down.

### **3\. Client-Side Routing Strategy**

You will notice the live URL uses a hash (e.g., /\#/about).

* **Implementation:** We use HashRouter instead of the standard BrowserRouter in main.jsx.  
* **Reason:** GitHub Pages is a static server and does not support client-side routing natively (it throws 404 errors on refresh). The hash strategy prevents these crashes by ensuring the server always loads index.html first.

### **4\. Tailwind CSS v4 Configuration**

This project uses the new **Tailwind v4** engine.

* **Design System:** The actual theme configuration (custom colors like neuston-Amber, fonts, and breakpoints) is defined using the modern CSS-first approach in src/index.css with the @theme directive.

### **5\. Newsletter Integration (Brevo)**

The newsletter sign-up forms are integrated with **Brevo** (formerly Sendinblue).

* **Mechanism:** The form submits directly to a Brevo endpoint URL defined as BREVO\_ACTION\_URL in CommonNewsletterForm.jsx.  
* **No Backend:** This is a purely frontend integration; no server-side code is required to collect emails.

## **Future Maintenance**

The primary reasons for future updates would be:

* **Careers:** Adding new job postings to src/pages/CareersPage.jsx.  
* **Content:** Updating text or data points in the relevant Page components.  
* **Supporters:** Adding new logos to the "Our Supporters" section on the "About Us" page.
