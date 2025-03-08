# Dynamic E-Commerce Product Catalog

## 🛒 Overview
![ShopSasa Overview](/public/images/SHOPSASA.png)

This project is a **dynamic e-commerce product catalog** aimed at connecting young people in campus (referred to as "Comrades" in Kenya) to sell and purchase products at an affordable price. The platform offers a seamless browsing experience with advanced filtering, sorting, and responsive design to enhance user interaction.

## 🎯 Project Goals

- **API Integration:** Dynamically fetch and display product data.
- **User Convenience:** Implement intuitive filtering and sorting for improved product discovery.
- **Responsive Design:** Ensure a smooth user experience across devices (desktop, tablet, mobile).

## 🚀 Technologies Used

- **Next.js** (React framework for server-side rendering and static site generation)
- **TypeScript** (strong typing for better developer experience)
- **Tailwind CSS** (utility-first CSS framework for modern, responsive styling)
- **Formik** (for handling form inputs, validation, and submission)
- **Lucide React** (for using customizable icons)
- **React Spinners** (for displaying loading indicators)
- **Yup** (for schema validation in forms)

## 🔑 Key Features

1. **API Data Integration**
   - Fetch and display product data dynamically using API calls.
   - Error handling and loading states to improve UX.

2. **Filtering and Sorting**
   - Filter products by category and other criteria.
   - Sort products by price (ascending/descending).
   - Multi-criteria filtering for more refined search results.

3. **Pagination and Infinite Scrolling**
   - Traditional pagination for easy navigation.
   - Infinite scrolling for a smoother browsing experience.

4. **Responsive Design**
   - Optimized for desktop, tablet, and mobile to ensure accessibility and usability across devices.

## 🏗️ Setup Instructions

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/alx-shopsasa.git
cd alx-shopsasa
### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start Development Server

```sh
npm run dev
```

### 4️⃣ Build for Production

```sh
npm run build
```

## 🔄 Git Commit Workflow

### Commit Message Format

Use **Conventional Commits** for clarity:

| Type       | Purpose                                           |
| ---------- | ------------------------------------------------- |
| `feat`     | Adding a new feature                              |
| `fix`      | Bug fix                                           |
| `style`    | UI & styling changes                              |
| `docs`     | Documentation updates                             |
| `chore`    | General maintenance (config, dependencies)        |
| `refactor` | Code restructuring without changing functionality |
| `test`     | Adding or updating tests                          |

### Example Commit Messages:

```sh
git commit -m "feat: add product filtering by category"
git commit -m "fix: resolve pagination state issue"
git commit -m "style: improve mobile responsiveness"
```

## 🚀 Deployment

To deploy the app using **Vercel**:

```sh
npm run build
vercel deploy
```

Or with **Netlify**:

```sh
netlify deploy
```

## 🤝 Contributing

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "feat: your feature description"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## 📜 License

This project is **MIT Licensed**. Feel free to use and contribute!

---

Made with ❤️ by **Brian Wakhale**

