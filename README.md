# Resume Builder App Documentation

This documentation provides an overview of the Resume Builder app, a web application designed to assist users in creating and managing professional resumes. The app is built using modern web technologies, including React, TypeScript, Tailwind CSS, and utilizes various components for a user-friendly experience.

<!-- ![Screenshots](https://i.ibb.co/DMb3qyP/Screenshot-from-2023-11-05-11-54-21.png) -->

## Table of content

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Tech Stack](#techstack)
4. [Features](#features)
5. [Installation](#installation)
6. [Structure](#structure)

## Introduction

Welcome to our Resume Builder project! This README provides an overview of the purpose and goals of our application. The Resume Builder App is designed to streamline the process of creating professional resumes. It leverages modern web technologies, such as React for a dynamic user interface, TypeScript for type safety, and Tailwind CSS for responsive and visually appealing styling.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   [Node.js](https://nodejs.org/) (v14 or later)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## TechStack

**Client:** React, Next Js, TailwindCSS, ShadCN UI, Uploadthing, Context API & SCSS.
**Server:** Node, Prisma & PostgreSQL.

## Features

-   **User-Friendly Interface:** Intuitive design for easy navigation and use.
-   **Dynamic Resume Building:** Users can add, edit, and rearrange sections of their resume.
-   **Preview Functionality:** Utilizes DND-Kit for drag-and-drop functionality.
-   **Responsive Design:** !The app is designed to work on desktop and mobile devices.
-   **Export Options:** Resumes can be exported in different formats (e.g., PDF).

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/devanondo/resume__builder

    ```

2. **Navigate to the project directory:**

    ```bash
    cd resume__builder

    ```

3. **Install the project dependencies:**

    ```bash
     npm install
     # or
     yarn
    ```

## Structure

```bash
.
├── resume__builder         # Root folder for image gallery
│   ├── app/                # Routes and Providers for app
│   ├── components/         # All components have their own
│       ├── resume_builder/ # Image Gallery components
│   ├── lib/                # Additional healper functions.
└── ...
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`UPLOADTHING_SECRET`

`UPLOADTHING_APP_ID`

### Notes

`All crutial information has shown on the .env file.`

## Acknowledgements

-   [Next.js](https://nextjs.org/docs)
-   [TypeScript](https://www.typescriptlang.org/docs)
-   [Tailwind CSS](https://tailwindcss.com/docs)
-   [DND-Kit](https://docs.dndkit.com/)

## Contact

If you have any questions or need assistance, please don't hesitate to contact us at [dev.abormon28@gmail.com].

Happy image gallery management!
