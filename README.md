# Pick Your Snack e-Shop

A curated online shop for healthy snacks, aimed to combat the 3pm sugar crash. This full-stack web application offers a user-friendly experience where customers can browse, select, and purchase a variety of snacks. The project uses React for the frontend and Firebase Firestore for the backend, making the site dynamic and responsive.

## Demo

- [Pick Your Snack e-Shop](https://jennyzhong2022.github.io/e-shop/) - Say goodbye to the 3pm sugar crash! Shop curated healthy snacks and gifts.
  ![Demo](./src/assets/demo-e-shop.gif)

---

## Table of Contents

- [Purpose](#purpose)
- [Requirements](#requirements)
- [Build Setup](#build-setup)
- [Design Goals](#design-goals)
- [Features](#features)
- [Challenges](#challenges)
- [Known Issues](#known-issues)
- [Future Goals](#future-goals)

---

## Purpose

The **Pick Your Snack e-Shop** project aims to build an MVP (Minimum Viable Product) for a dynamic e-commerce platform where users can browse and purchase healthy snacks. The project is a full-stack application that leverages React for the frontend and Firebase Firestore for the backend.

The purpose of this project includes:

- **Learning Goal**: Practicing React along with Firestore as a full-stack solution.
- **Product Goal**: Delivering a fully functional, user-friendly online shop with a responsive layout.
- **Dynamic Data**: Products, including their variants and stock, are stored and managed in Firestore, making the website dynamic and scalable.

---

## Requirements

### Minimum Viable Product (MVP)

- **Home Page** with a grid of products and a carousel of featured items.
- **Product Pages** for different types of snacks.
- **Shopping Cart**: Users can add products to the cart, edit quantities, and remove items.
- **Firestore Backend**:
  - Products must include details such as quantity, price per unit, brand, and available variants.

---

## Build Setup

### Frontend:

1. **Vite Setup**:
   ```bash
   npm create vite@latest
   cd project-name
   npm install
   npm run dev
   ```
2. **React**: Install necessary dependencies for React:
   ```bash
   npm install react react-dom
   ```
3. **Development Server**: Run the development server::
   ```bash
   npm run dev
   ```

## Backend (Firestore):

1. Create a Firebase account and set up a Firestore database.
2. Add Firebase to your React project:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

## Design Goals

- **Frontend**: Build a dynamic and interactive website using React that provides a seamless user experience.
- **Backend**: Use Firestore to store and manage all product data, including snack variants, pricing, and stock availability.
- **Responsive**: Ensure the website is fully responsive and works well across various screen sizes.

---

## Features

- **Navbar**: With links to home, product categories, and a shopping cart.
- **Product Grid**: Displays products with details fetched dynamically from Firestore.
- **Add to Cart**: Users can add products to the cart. Multiple clicks increment the product quantity.
- **Edit Cart**: Users can adjust the quantity of products in the cart. A confirmation alert is triggered when trying to remove an item.
- **Featured Products Carousel**: Displayed on the home page.
- **Success Popup**: A message appears when items are successfully added to the cart.
- **Loading Spinner**: Displays a loading animation while fetching data.
- **Responsive Design**: Works smoothly on desktop, tablet, and mobile devices.

---

## Challenges

- **Carousel Implementation**: Initially struggled with implementing the product carousel. Determining how many products should be displayed per slide and managing the transition when reaching the end were particularly difficult. After refining calculations, the feature was successfully implemented.

---

## Known Issues

- **UI Not Updating**: The add, edit, and delete product functionality works in the backend (Firestore) but does not reflect changes on the UI.
- **Quantity Selection**: Products can be added multiple times, but there's no manual quantity selector when adding an item from the product details. Instead, the quantity can only be adjusted from the cart.

---

## Future Goals

1. **User Authentication**: Add Firebase Authentication so users can log in and admins can manage products (add, edit, delete).
2. **Advanced Cart Features**: Implement a more intuitive quantity selector for products on the product page itself.
3. **Persistent Cart**: Use local storage or session storage to persist the cart, and consider adding a dedicated "Cart" collection in Firestore.
4. **Wishlist**: Allow users to save products to a wishlist.

---

## Conclusion

This project demonstrates the integration of React with Firebase Firestore to create a functional, dynamic e-commerce application. Despite facing challenges with UI updates and carousel implementation, the project provides a strong foundation for further development. Future goals include user authentication, enhanced cart functionality, and more advanced features.
