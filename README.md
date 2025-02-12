#Cityscapes Rental

## 📌 Project Overview
The **Property Rental Management System** is a web application designed to manage rental properties efficiently. It provides features for property listing, user authentication, and rental management. The system is built using **Angular 16** for the frontend, **Spring Boot** for the backend, and **MongoDB** as the database.

## 🚀 Features
- User authentication (Login/Signup) with JWT
- Property listing and management
- Search and filter properties
- User dashboard to manage rentals
- Role-based access control (Admin, Owner, Tenant)
- RESTful API integration

## 🛠️ Tech Stack
### Frontend:
- **Angular 16**
- **Bootstrap & Tailwind CSS**
- **TypeScript**
- **RxJS for state management**

### Backend:
- **Spring Boot** (Java)
- **Spring Security (JWT Authentication)**
- **Spring Data MongoDB**
- **RESTful APIs**

### Database:
- **MongoDB** (NoSQL database)

## 🔧 Installation & Setup
### Prerequisites
- **Node.js** (for Angular frontend) - [Download](https://nodejs.org/)
- **Angular CLI** - Install using:
  ```sh
  npm install -g @angular/cli
  ```
- **Java 17+** (for Spring Boot backend)
- **MongoDB** (Ensure MongoDB is running locally or use MongoDB Atlas)

### Backend (Spring Boot)
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/property-rental-system.git
   ```
2. Navigate to the backend folder:
   ```sh
   cd property-rental-system/backend
   ```
3. Configure **application.properties**:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/property-rental
   jwt.secret=your_secret_key
   ```
4. Build and run the project:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```
   The backend should now be running at `http://localhost:8080`.

### Frontend (Angular 16)
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the Angular project:
   ```sh
   ng serve --open
   ```
   The frontend should now be running at `http://localhost:4200`.

## 🔗 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | User login & token generation |
| `GET` | `/api/properties` | Get all properties |
| `POST` | `/api/properties` | Add a new property (Admin/Owner) |
| `PUT` | `/api/properties/{id}` | Update property details |
| `DELETE` | `/api/properties/{id}` | Delete a property |

## 🛡 Security & Authentication
- Uses **JWT (JSON Web Token)** for authentication.
- Role-based access control to restrict access to certain API endpoints.

## 📌 Future Enhancements
- Payment gateway integration
- Reviews & ratings for properties
- Email & SMS notifications
- Advanced search with AI recommendations

## 🤝 Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## 📜 License
This project is licensed under the **MIT License**.

---
### 👨‍💻 Developed By:
**Your Name**  
📧 Email: your.email@example.com  
🔗 LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)  
🚀 Happy Coding!

