# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
#   S h o p p i n g P r o j e c t 
 
 ## React Project Documentation / User Manual

This document outlines the structure and usage of various libraries and tools in a React project. The libraries used include:

1. **react-router-dom**: Used for routing within the React application.
2. **react-icons**: For including icons easily in the project.
3. **react-hot-toast**: For displaying notifications.
4. **useState**: A React hook for managing local component state.
5. **Zustand**: For global state management with stores (`useProductStore` and `useCartStore`).
6. **Tailwind CSS**: For utility-first responsive design.

### Project Structure
- **src/**
  - **store/**
    - `useProductStore.ts` (Product store using Zustand)
    - `useCartStore.ts` (Cart store using Zustand)
  - **pages/**
    - `HomePage.tsx` (Main product listing page)
    - `ProductPage.tsx` (Single product detail page)
    - `CartPage.tsx` (Shopping cart page)
  - `main.tsx` (Entry point with routing and Toaster integration)

### Code Usage
#### Entry Point (`main.tsx`)
- Initializes the React app with `BrowserRouter` from `react-router-dom`.
- Sets up basic routing with `<Routes>` and `<Route>` components.
- Integrates `Toaster` for notifications.
- Tailwind CSS container classes ensure responsiveness (e.g., `container mx-auto px-4`).

#### Zustand Stores
- `useProductStore`: Manages the list of products and provides a method to update them.
- `useCartStore`: Manages the shopping cart, including methods to add and remove items with toast notifications.

#### Pages
- **HomePage**: Displays a list of products and links to individual product pages.
- **ProductPage**: Shows product details based on the product ID from the URL.
- **CartPage**: Displays the items in the cart and allows removing them.

### Example Component Integration
- Products are fetched from `useProductStore` and listed.
- When a product is added to the cart, `react-hot-toast` provides user feedback.
- Routing is handled using `react-router-dom` with dynamic paths for individual products and the cart page.
- Tailwind CSS ensures responsive layouts with utility classes like `grid grid-cols-1 md:grid-cols-2`.
