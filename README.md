# User Module App

A full-stack user authentication system built with **Next.js**, **NestJS**, **GraphQL**, and **MongoDB**.

## 🚀 Features

- User Signup and Login
- Secure JWT authentication
- View and update profile
- Change password functionality
- GraphQL API with Apollo Client
- Responsive UI with Tailwind CSS

---

## 📦 Tech Stack

- **Frontend:** Next.js (App Router), Apollo Client, Tailwind CSS
- **Backend:** NestJS, GraphQL, Mongoose
- **Database:** MongoDB Atlas

---

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/user-module-app.git
cd user-module-app
```

2. **Install dependencies**

```bash
cd backend
npm install
cd ../frontend
npm install
```

3. **Set up environment variables**

- In `backend/.env`:
  ```env
  MONGODB_URI=<your-mongodb-uri>
  JWT_SECRET=<your-jwt-secret>
  ```

- (Optional) In `frontend/.env`:
  ```env
  NEXT_PUBLIC_API_URL=http://localhost:3000/graphql
  ```

4. **Run the development servers**

```bash
# In /backend
npm run start:dev

# In /frontend
npm run dev
```

- Frontend: http://localhost:3001
- Backend GraphQL: http://localhost:3000/graphql

---

## 🧪 Usage

- Visit `/signup` to create an account
- Visit `/login` to log in and receive a JWT
- After login/signup, you'll be redirected to `/profile`
- View and update profile, and change your password securely

---

## 📁 Project Structure

```
user-module-app/
├── backend/     # NestJS API
├── frontend/    # Next.js client
└── README.md
```

---

## 🧹 Notes

- Both frontend and backend are in a single monorepo
- Apollo Client handles GraphQL integration on the frontend
- Backend uses Passport JWT strategy for authentication
