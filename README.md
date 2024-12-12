# Todo

A responsive, browser-based Todo application built with React and Vite. This app fetches a list of todos from a mock API, allows you to mark them as complete, and visually indicates overdue tasks. All interactions happen locally—no data is persisted on the server.

## Features

- **Fetch Todos from Mock API:** On load, the app retrieves a list of todos from a provided endpoint.
- **Mark Todos as Complete:** Toggle the checkbox to mark tasks complete. Changes are reflected immediately in the UI.
- **Overdue & Sorting Logic:**
  - Overdue tasks (past due and incomplete) appear at the top.
  - Incomplete tasks are sorted by due date.
  - Completed tasks appear at the bottom.
- **Responsive UI:** The layout adapts well to both mobile and desktop screens.

## Tech Stack

- **Frontend:** React (with Vite for development/build)
- **Styling:** Basic CSS (easily adaptable to a styling library or framework)
- **API:** Mocked endpoints using Postman’s mock service
- **Build Tooling:** Vite

## Getting Started

1. **Clone the repository:**
   - git clone https://github.com/jakefsullivan/todo.git
   - cd todo

2. **Install dependencies:**

    yarn
    
3. **Environment Variables (Optional): If you have API keys or endpoints, store them in a .env file:**

    VITE_API_GET=https://your-api-endpoint
    VITE_API_KEY_VALUE=your_api_key

4. **Run the development server:**

    yarn dev

5. **Build for production:**

    yarn build

## Project Structure

- **src/App.tsx:** Main entry point for the UI.
- **src/components/TodoList.tsx:** Displays and sorts todos, handles checkbox toggling.
- **.env.example:** Example environment file to guide developers in setting up their own .env.

## Notes for the Employer

- **Code Clarity:**
    The project emphasizes readability and maintainability, with clear component separation, well-defined prop interfaces (if using TypeScript), and documented logic for sorting and filtering tasks.

- **Scalability:**
    The architecture easily supports new features, such as adding todo creation forms, category filters, or integrating a backend API for persistent data.

- **Responsiveness & Accessibility:**
    The layout is responsive and built with semantic HTML. With minor adjustments (adding ARIA attributes, improving keyboard navigation, adjusting color contrast), it can be made more accessible.

- **Testing & Improvements:**
    While not required for this demonstration, the setup can be extended with testing libraries (e.g., Jest, React Testing Library) to ensure ongoing code quality and reliability.
