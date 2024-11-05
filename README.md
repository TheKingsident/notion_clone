
# Notion Clone

Welcome to the Notion Clone repository! This project is a fully functional clone of Notion, designed to showcase a modern day application built with cutting-edge technologies. The application supports real-time collaboration, authentication, document management, and more. The project is deployed on Vercel and is accessible [here](https://notion-clone-two-alpha.vercel.app/).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This Notion clone was built to replicate the core functionalities of Notion, a popular productivity app, including document creation, editing, and real-time collaboration. The project demonstrates how to integrate various tools and services, such as Cloudflare Workers, Firebase, and OpenAI, to build a robust and scalable web application.

## Features

- **Real-Time Collaboration:** Users can collaborate on documents in real-time using Liveblocks 2.0.
- **User Authentication:** Authentication is handled via Clerk, allowing users to sign up, log in, and manage their accounts.
- **Document Management:** Users can create, edit, delete, and organize documents. The sidebar displays all documents associated with the user.
- **Real-Time Cursor and Pointer Sharing:** Liveblocks is used to implement live cursor and follow pointer functionality, enhancing the collaborative experience.
- **AI-Powered Features:** The app integrates OpenAI's API to provide document translation and chat-to-document features, enabling AI-driven interactions.
- **Cloudflare Workers Integration:** The app leverages Cloudflare Workers for serverless functions, providing fast and scalable backend services.
- **Custom UI Components:** The user interface is built using Shadcn/ui, ensuring a modern and responsive design.

## Technologies Used

- **React:** The core library for building the user interface.
- **Next.js:** A React framework used for server-side rendering and generating static websites.
- **Firebase:** Used for real-time database services (Firestore) and user management.
- **Clerk:** For managing user authentication and profiles.
- **Liveblocks 2.0:** Enables real-time collaboration features.
- **Cloudflare Workers:** Provides serverless computing for handling API requests and backend logic.
- **OpenAI API:** Powers AI features like document translation and chat-based interactions.
- **Vercel:** Used for deploying the application with easy CI/CD integration.
- **Shadcn/ui:** A component library used to build the user interface.

## Getting Started

To get a local copy of the project up and running, follow these simple steps:

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase account for setting up Firestore and Firebase Admin.
- Clerk account for managing user authentication.

### Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/thekingsident/notion-clone.git
   cd notion-clone
   \`\`\`

2. **Install dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add your environment variables for Firebase, Clerk, OpenAI, and any other necessary services.

4. **Start the development server:**

   \`\`\`bash
   npm run dev
   \`\`\`

   The application should now be running at `http://localhost:3000`.

## Architecture

### Frontend

- **React Components:** The UI is built using modular React components, including a header, sidebar, and document editor.
- **Shadcn/ui:** The UI components are styled with Shadcn/ui, ensuring a consistent and modern design.
- **Real-Time Collaboration:** The frontend integrates Liveblocks for real-time updates, cursor sharing, and collaborative document editing.

### Backend

- **Cloudflare Workers:** Used to handle backend logic, including API requests, data processing, and integration with external services.
- **Firebase Firestore:** Manages real-time data storage for user documents and metadata.
- **Clerk:** Handles authentication and user session management.
- **OpenAI API:** Provides AI-powered features such as document translation and chat-driven document creation.

## Deployment

The application is deployed on Vercel, providing seamless CI/CD integration and automatic deployments on push to the main branch. Vercel's serverless functions are used alongside Cloudflare Workers to handle backend logic efficiently.

## Future Improvements

- **Enhanced Document Permissions:** Implement more granular permissions for document access and editing.
- **Improved AI Features:** Expand the AI capabilities with more advanced NLP models and additional functionalities.
- **Mobile Optimization:** Optimize the UI/UX for mobile devices to enhance accessibility.
- **Plugin Support:** Introduce a plugin system to allow users to customize their workspace with third-party integrations.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
