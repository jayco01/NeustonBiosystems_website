# Neuston Biosystems Website

## Project Overview

This repository contains the source code for the official corporate website of Neuston Biosystems, a pre-seed stage cleantech startup. The primary goal of this website is to establish a professional online presence to attract angel investors and future R&D partners (specifically, cheese producers).

This project was developed as a volunteer effort by Jay Layco, a Software Development student at SAIT, in collaboration with the founder, Scott Pierobon.

**Live Site:** [[https://www.neustonbiosystems.com/](https://jayco01.github.io/NeustonBiosystems_website/#/)]

---

## Tech Stack

This website is a modern static site built with the following technologies:

* **Framework:** [React](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Routing:** [React Router DOM](https://reactrouter.com/)

---

## Getting Started: Local Development Setup

To run this project on your local machine, please follow these steps.

1.  **Clone the Repository**
    Open your terminal and clone the project from GitHub.
    ```bash
    git clone https://github.com/jayco01/NeustonBiosystems_website.git
    ```

2.  **Navigate to the Project Directory**
    ```bash
    cd neuston-website
    ```

3.  **Install Dependencies**
    This command will install all the necessary packages listed in `package.json`.
    ```bash
    npm install
    ```

4.  **Run the Development Server**
    This command starts the local Vite server.
    ```bash
    npm run dev
    ```
    The website will now be running locally, typically at `http://localhost:5173`.

---

## Project Structure

The project is organized to be clean and easy to navigate for future development.

* `/public`: Contains static assets that are not processed by the build tool.
* `/src`: This is the main folder for all of the website's source code.
    * `/src/assets`: Contains static assets like images, logos, and diagrams that are imported into components.
    * `/src/components`: Contains reusable React components that are used across multiple pages (e.g., `Navbar.jsx`, `Footer.jsx`).
    * `/src/pages`: Contains the main component for each of the 7 pages of the site (e.g., `HomePage.jsx`, `ForInvestorsPage.jsx`).
* `README.md`: This file! The main documentation for the project.

---

## Notes for the Next Developer (Project Handoff)

This section contains important information about the key decisions made during the initial development.

### Design and Content

* **Source of Truth:** The design and layout of this website are based on a **Figma prototype**, which should be considered the primary design reference. You can view it here: [Figma Prototype Link](https://www.figma.com/proto/P1kuvUlSLgFQvwDFfpko7x/Neuston?page-id=0%3A1&node-id=1-1584&p=f&viewport=237%2C440%2C0.12&t=BsnpU6y2rbASsZmw-1&scaling=min-zoom&content-scaling=fixed)
* **Content Management:** All text, headlines, and data points were provided by the client, Scott Pierobon. The content plan is detailed in a series of Relume prompts that were used to generate the initial design.

### Technical Decisions

* **Static Site Architecture:** This website is a "static site," meaning it is just HTML, CSS, and JavaScript with no backend or database. This choice was made for three key reasons:
    1.  **Security:** Static sites have a very small attack surface, making them inherently secure.
    2.  **Performance:** They are incredibly fast to load.
    3.  **Low Maintenance:** They are easy to host and require minimal upkeep.
* **Newsletter Integration (MailerLite):** The newsletter sign-up forms are designed to work with **MailerLite**. This was chosen because it is very user-friendly for the client (Scott) and requires no backend code. To connect the forms, you will need to get the form's `action` URL and input `name` attributes from Scott's MailerLite account.
* **Security & Environment Variables:** The code is stored in a public GitHub repository. **Under no circumstances should any secret keys, API keys, or passwords be committed to the repository.** If any future integrations require secret keys, they must be stored in a `.env.local` file, which is listed in the `.gitignore` file to prevent it from being uploaded.

### Future Maintenance

This website was designed to be low-maintenance. The primary reasons for future updates would be:
* Adding new job postings to the "Careers" page.
* Updating text or data points as the company grows.
* Adding new logos to the "Our Supporters" section on the "About Us" page.

---
