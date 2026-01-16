# Movie Verse (Frontend)

A modern, responsive frontend application for browsing and managing top-rated movies, inspired by IMDb.  
Built with React and integrated with a production-ready backend API, featuring authentication, role-based UI rendering, and a clean user experience.

**Live Website:**  
https://movie-verse-lovat.vercel.app

---

## Table of Contents

- Overview
- Tech Stack
- Features
- Project Structure
- Authentication & State Flow
- API Integration
- Environment Variables
- Scripts
- UI & UX Considerations
- Deployment
- Author

---

## Overview

Movie Verse is a frontend web application built using React.  
It consumes a secure backend API to provide features such as user authentication, movie browsing, admin-only controls, and responsive UI behavior.

The application is deployed on **Vercel** and communicates with a **Railway-hosted backend** using secure, cookie-based authentication.

---

## Tech Stack

- **React.js**
- **Vite**
- **React Router DOM**
- **Context API** (Global state management)
- **Axios**
- **Material UI / Tailwind CSS** (UI styling)
- **Vercel** (Deployment)

---

## Features

### User Authentication
- Login & registration UI
- Secure authentication via HTTP-only cookies
- Automatic session restoration on page refresh
- Logout functionality

### Role-Based UI Rendering
- Conditional navbar items based on user role
- Admin-only actions (Add, Edit, Delete movies)
- Protected UI routes

### Movie Browsing
- List top-rated movies
- Pagination support
- Search and sorting
- Movie details view

### Admin Capabilities
- Add new movies
- Edit existing movies
- Delete movies
- Admin-specific UI controls

### UI & UX
- Fully responsive design
- Clean and intuitive navigation
- Loading states and error handling
- User-friendly forms and feedback

---

## Project Structure

src/
- ├── api/ # Axios configuration
- ├── components/ # Reusable UI components
- ├── context/ # Global state (User Context)
- ├── pages/ # Page-level components
- ├── routes/ # Route definitions
- ├── assets/ # Static assets
- ├── App.jsx # Root component
- ├── main.jsx # App entry point


---


---

## Project Setup / Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/movie-verse.git
cd movie-verse

npm install

VITE_BACKEND_URL=https://imdb-top-rated-movies-production.up.railway.app/api/v1


npm run dev       # Development
npm run build     # Production build
npm run preview   # Preview production build


```

### API Integration 

```bash 
    axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    });

```


## Authentication & State Flow

1. User logs in via login form
2. Backend sets JWT tokens in HTTP-only cookies
3. Frontend calls `/user/view-profile` on app load
4. User data is stored in Context API
5. UI updates automatically based on:
   - `isLoggedIn`
   - `user.role`
6. Admin-specific UI elements are conditionally rendered


### UI & UX Considerations

- Responsive layout for mobile and desktop

- Conditional rendering to avoid unauthorized actions
- 
- Graceful handling of loading and error states
- 
- Consistent component-based design


### Deployment

The frontend is deployed on Vercel.

## Deployment steps:

- Push frontend code to GitHub
- Import repository into Vercel
- Add environment variables in Vercel dashboard
- Deploy with default Vite configuration
- Vercel automatically redeploys on every push to the main branch.

## Author

Ajmal
MERN Stack Developer
