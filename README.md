# BlogPlat 🚀

A modern and responsive blogging platform built using **React**, **Tailwind CSS**, **DaisyUI**, and **Firebase Authentication**. Users can create blogs, like/dislike posts, comment on blogs, reply to comments, and manage their own content securely.

---

# 🌟 Features

- 🔐 Google Authentication with Firebase
- 📝 Create Blog Posts
- ✏️ Edit Your Blogs
- 🗑️ Delete Your Own Blogs
- ❤️ Like / 👎 Dislike System
- 🔄 Toggle Like & Dislike
- 💬 Comment System
- ↪️ Nested Replies on Comments
- 👤 User Profile Page
- 📱 Responsive UI
- 💾 LocalStorage Persistence
- ☁️ Firebase Hosting Deployment

---

# 🛠️ Tech Stack

- React.js
- React Router DOM
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- Firebase Hosting
- LocalStorage

---

# 📂 Project Structure

```txt
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Blogcard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── CreateBlog.jsx
│   ├── EditBlog.jsx
│   ├── BlogDetails.jsx
│   └── Profile.jsx
│
├── firebase.js
├── App.jsx
└── main.jsx
```

---

# 🔑 Authentication

Users can:

- Login using Google Account
- Logout securely
- Access protected actions only after login

Protected actions:
- Create blog
- Like / dislike
- Comment
- Reply
- Edit/Delete own blogs

---

# ❤️ Like & Dislike Logic

- A user can:
  - Like once
  - Dislike once
  - Toggle like/dislike
- Cannot like and dislike simultaneously

---

# 💬 Comment System

Users can:
- Add comments
- Reply to comments
- View nested replies

---

# 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/blogplat.git
```

Move into project folder:

```bash
cd blogplat
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# 🔥 Firebase Setup

Create a Firebase project.

Enable:
- Authentication → Google Provider
- Hosting

Add Firebase config inside:

```txt
src/firebase.js
```

---

# 🌐 Deploy to Firebase

Build project:

```bash
npm run build
```

Deploy:

```bash
firebase deploy
```

---

# 📸 Screenshots

Add screenshots here later:

- Home Page
- Login Page
- Create Blog
- Comment Section
- Profile Page

---

# 🔮 Future Improvements

- 🔥 Firestore Database
- 📷 Image Upload
- 🧠 AI Blog Suggestions
- 🔎 Search Blogs
- 🏷️ Tags & Categories
- 📈 Trending Blogs
- 🌙 Dark / Light Theme Toggle

---

# 👨‍💻 Author

Made with ❤️ by **Malika**

---

# 📄 License

This project is open-source and available under the MIT License.
