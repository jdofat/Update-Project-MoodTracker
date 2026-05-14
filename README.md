Note: Updated Project- Original Project Replacement 5/2026


# MindfulMoods: A Daily Emotion Tracker
Author: Jade Dofat

## Description
MindfulMoods is a React.js application designed to help people track their daily moods. It is easy to lose track of your mental state, so this app offers a space for users to log daily moods and reflect on everyday feelings STRESS FREE!

## Main Features

* User Authentication: Secure Sign-up and Login using Firebase Auth.

* Mood Logging: Create daily entries with a selected mood (emoji/label) and a short text description.

* History Dashboard: A real-time list of all past mood entries.

* Data Persistence: CRUD operations (Create, Read, Delete) linked to a cloud database.

* Responsive Design: Optimized for both desktop and mobile viewing.

* Error Handling: Custom "Not Found" page and form validation feedback.

## Technologies Used

* Frontend: React.js, JavaScript (ES6+), CSS3.

* Routing: React Router v6.

* Backend/Database: Google Firebase (Cloud Firestore).

* Authentication: Firebase Auth.

* Deployment: Netlify

## React Concepts Used

* Functional Components: Modular code structure for reusability.

* Props & State: Managing data flow between parent (Dashboard) and children (MoodForm, MoodList).

* Hooks: useState for local form data and useEffect for Firebase side-effects.

* Dynamic Rendering: Using .map() to generate lists from Firestore data.

* Conditional Rendering: Displaying content based on authentication status and loading states.

* Navigation: Programmatic redirection using useNavigate and declarative routing.

## Challenges Faced

* Setting up the security rules for Firestore was challenging to ensure that users could only see their own data and not the entries of others

* Managing the state between the "Add" form and the "List" display in real-time 

* Layout consistency and functionality

## What Was Learned

I learned how to connect a frontend UI to a live backend, gained experience breaking down a dashboard into smaller components, and worked with data fetching without crashing!

## Future Improvements

An edit function would allow users to update past notes if they wish to add more reflection later.

## Getting Started

Dependencies: Node.js (v16+), npm, Firebase Account

## Installing & Executing

Clone & Install:

`Bash`

`git clone`

`cd mindful-moods`

`npm install`

Config:

Update src/firebase/firebaseConfig.js with your Firebase credentials

Run:

`Bash`

`npm start`

`Help`
