# todo

Todo App
A responsive, browser-based Todo application built with React and Vite. This app fetches a list of todos from a mock API, allows you to mark them as complete, and visually indicates overdue tasks. All interactions happen locally—no data is persisted on the server.

Features
Fetch Todos from Mock API: On load, the app retrieves a list of todos from a provided endpoint.
Mark Todos as Complete: Toggle the checkbox to mark tasks complete. This change is reflected immediately in the UI.
Overdue & Sorting Logic:
Overdue tasks (past due and incomplete) appear at the top.
Incomplete tasks are sorted by due date.
Completed tasks appear at the bottom.
Responsive UI: The layout is tested to work well on mobile and desktop screens.
Tech Stack
Frontend: React (with Vite for development/build)
Styling: Basic CSS (easily adaptable to a styling library or framework)
API: Mocked endpoints using Postman’s mock service
Build Tooling: Vite
Getting Started
Clone the repository:

git clone https://github.com/jakefsullivan/todo.git
cd todo
Install dependencies:
yarn
Environment Variables (Optional): If you have API keys or endpoints, store them in a .env file:

env
Copy code
VITE_API_GET=https://your-api-endpoint
VITE_API_KEY_VALUE=your_api_key
Make sure .env is in .gitignore and not committed to the repo.

Run the development server:

yarn dev

Build for production:

yarn build

Project Structure
css
Copy code
todo/
├─ src/
│  ├─ components/
│  │  ├─ TodoList.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  └─ ...
├─ .gitignore
├─ .env.example
├─ package.json
├─ vite.config.ts
└─ ...
src/App.tsx: Main entry point for the UI.
src/components/TodoList.tsx: Displays and sorts todos, handles checkbox toggling.
.env.example: Example environment file to guide developers in setting up their own .env.

Notes for the Employer
Code Clarity:
The project emphasizes readability and maintainability, with clear separation of components, well-defined prop interfaces (if using TypeScript), and documented logic for sorting and filtering tasks.

Scalability:
The architecture allows for easy addition of new features (e.g., adding a form to create new todos, filtering tasks by category, or integrating a backend API for persistent data storage).

Responsiveness & Accessibility:
The layout is responsive and uses semantic HTML where possible. With small adjustments, it can be made more accessible by adding ARIA attributes, keyboard navigation, and better contrast.

Testing & Improvements:
Though not required for this demonstration, the setup can be easily extended with testing libraries (like Jest and React Testing Library) to ensure code quality and reliability.