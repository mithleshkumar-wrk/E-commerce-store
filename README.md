# Mstore E-commerce React App

Mstore is a modern e-commerce web application built with React and Vite. It provides a seamless shopping experience for users, featuring product browsing, filtering, cart management, authentication, and responsive design.

## Features

- **Product Listing:** Browse products with category, brand, and price filters.
- **Product Details:** View detailed information for each product.
- **Cart Management:** Add, remove, and update product quantities in the cart.
- **Checkout:** Fill delivery information and proceed to checkout.
- **Authentication:** Secure user authentication using Clerk.
- **Location Detection:** Detect and autofill user location for delivery.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Pagination:** Easily navigate through product pages.
- **Toast Notifications:** User feedback for cart actions and errors.
- **Loading Animations:** Smooth loading experience with Lottie animations.

## Technologies Used

- **React**: UI library for building interactive interfaces.
- **Vite**: Fast development server and build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Routing and navigation.
- **Clerk**: Authentication and user management.
- **Axios**: HTTP client for API requests.
- **React Icons**: Icon library for UI elements.
- **Lottie React**: Animation library for loaders and empty states.
- **React Toastify**: Toast notifications for user feedback.
- **Slick Carousel**: Product carousel/slider.

## Project Structure

- `src/components/`: Reusable UI components (Navbar, Footer, Carousel, ProductCard, etc.)
- `src/pages/`: Main pages (Home, Products, Cart, About, Contact, SingleProduct, CategoryProducts, PageNotFound)
- `src/context/`: Global state management (CartContext, DataContext)
- `src/utils/`: Utility functions and providers (ToastProvider)
- `public/`: Static assets (images, SVGs, Lottie JSON)
- `.env`: Environment variables (Clerk publishable key)
- `vite.config.js`: Vite configuration
- `eslint.config.js`: ESLint configuration

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

## Author

- Mithlesh Kumar

---

Enjoy shopping with Mstore!