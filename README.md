# Movie Night App

## Features

The Movie Night app allows you to search for your favorite actors, watch trailers, and explore the full career history of any actor. All the data provided is accurate and reliable, making it your go-to platform for movie and media enthusiasts.

- Deployed on [Vercel](https://vercel.com/), ensuring fast and reliable hosting.

## Tech Stack

This project uses the following technologies:

- [Next.js 14](https://nextjs.org/) - The React framework for production.
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling.
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated Redux toolset.
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons as React components.
- [React YouTube](https://www.npmjs.com/package/react-youtube) - YouTube player component for React.
- [Vercel](https://vercel.com/) - A platform for deploying Next.js applications with ease.

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** (version >= 20.11.0)
  - To manage multiple versions of Node.js easily and prevent issues caused by version inconsistencies, use `.nvmrc` (Node Version Manager) for consistent Node versioning across environments.

### Setup Next.js

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mohamed-hassaan3/movie-night-RTK-NEXT.git
   ```
2. **Install npm dependencies**:
   ```bash
   npm install
   ```
3. **Copy the environment variables to .env**:

   ```bash
   cp .env.example .env
   ```

   Copy the contents of .env.example to a new .env file
   Update the values in the .env file as needed for your environment.

4. **Run the development server**:

```bash
npm run dev
```

5. **Engine Locking**:
   To prevent any issues caused by inconsistencies between different versions of Node.js, a .nvmrc file is provided at the root level. Additionally, a .npmrc file is included to lock the Node version and ensure the package manager uses the specified engine version:
   `bash
// package.json
"engines": {
  "node": ">= 20.11.0"
}
    `

## Deployment

The app is deployed using Vercel, which is the recommended platform for Next.js applications:

Deploy on Vercel:
Push your changes to GitHub.
Connect your repository with Vercel for automated deployments.
SEO-Friendly Features
This app has been optimized to be SEO-friendly and dynamic, ensuring:

Meta Tags: Relevant meta tags such as title, description, and open graph are dynamically updated based on the content.
Server-side Rendering: Next.js's built-in SSR capabilities enhance SEO by pre-rendering pages server-side.
Dynamic Routing: URLs are dynamically generated, improving search engine indexing.
Once you've completed these steps, your app will be running locally on http://localhost:3000 and can be deployed to Vercel.
