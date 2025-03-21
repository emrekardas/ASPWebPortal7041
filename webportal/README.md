# **Cloud Web Portal - ASP Solutions Ltd**

## **📌 Overview**
This project is a **cloud-based e-commerce and service management portal** for ASP Solutions Ltd, built using **React.js (Next.js) for frontend, Node.js (Express.js) for backend, and AWS for cloud services**. The system provides functionalities for sales, order management, consultancy, and training services, fully hosted on **AWS infrastructure**.

---

## **🚀 Tech Stack**

### **Frontend (User Interface)**
- **React.js (Next.js)** - Fast & scalable frontend framework
- **TailwindCSS** - For styling and responsiveness
- **React Router** - Handles navigation
- **Axios** - Fetches data from the backend
- **AWS Amplify / S3 + CloudFront** - For hosting the frontend

### **Backend (Server & API)**
- **Node.js (Express.js)** - REST API framework
- **MongoDB (AWS DocumentDB / MongoDB Atlas)** - NoSQL database
- **JWT (JSON Web Token)** - Secure authentication
- **AWS Lambda** - Serverless functions (optional automation)
- **AWS EC2** - Hosting the backend server

### **Database & Storage**
- **AWS RDS (PostgreSQL / MySQL)** - Relational database for transactions
- **AWS S3** - Stores product images and user documents
- **AWS Cognito** - User authentication & role-based access control

### **Cloud Infrastructure & DevOps**
- **AWS IAM** - User roles & permissions
- **AWS EC2** - Hosting backend services
- **AWS Auto Scaling & Load Balancer** - Handles high traffic loads
- **AWS CloudWatch** - Monitoring & logs

---

## **🛠️ Database Architecture (AWS RDS)**

### **1️⃣ Users Table** (Authentication & Role Management)
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(50) CHECK (role IN ('sales_staff', 'accounts', 'consultants', 'trainers', 'clients')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **2️⃣ Products Table** (Catalog & Inventory)
```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100),
    stock INT DEFAULT 0,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **3️⃣ Orders Table** (Customer Purchases)
```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES users(id),
    total_price DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) CHECK (status IN ('Pending', 'Shipped', 'Delivered', 'Cancelled')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **4️⃣ Order Items Table** (Many-to-Many Relationship Between Orders & Products)
```sql
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL
);
```

### **5️⃣ Transactions Table** (Payments & Billing)
```sql
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    customer_id INT REFERENCES users(id),
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50),
    status VARCHAR(50) CHECK (status IN ('Paid', 'Failed', 'Refunded')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## **📌 Roadmap & Implementation Steps**

### **🔹 Phase 1: Setup AWS Infrastructure**
✅ Configure **IAM Roles & Permissions**
✅ Deploy **AWS RDS (PostgreSQL / MySQL) & create tables**
✅ Configure **AWS S3 for product images storage**
✅ Deploy **AWS EC2 instance for backend server**
✅ Enable **Auto Scaling & Load Balancer**

### **🔹 Phase 2: Develop Backend API**
✅ Setup **Express.js server & connect to RDS**
✅ Implement **CRUD operations for Products & Users**
✅ Secure API with **JWT Authentication**
✅ Implement **Order & Payment Processing**

### **🔹 Phase 3: Develop Frontend UI**
✅ Create **React.js (Next.js) frontend**
✅ Implement **User Authentication with AWS Cognito**
✅ Build **Product Listings, Cart, and Checkout Pages**
✅ Connect frontend to backend API

### **🔹 Phase 4: Testing & Deployment**
✅ Perform **Unit & Integration Testing**
✅ Deploy **Frontend on AWS Amplify or S3 + CloudFront**
✅ Deploy **Backend on AWS EC2 & Connect with RDS**
✅ Configure **CloudWatch for monitoring logs**

---

## **📢 Next Steps**
- ✅ Add **Admin Dashboard for Sales & Accounts Team**
- ✅ Implement **Live Chat for Consultancy & Training Services**
- ✅ Enable **GraphQL API for Faster Data Fetching**
- ✅ Improve **Performance Optimization & Security Enhancements**

---

## **📌 Deployment Guide**
**1️⃣ Deploy Database (AWS RDS)**
```bash
aws rds create-db-instance \
    --db-instance-identifier asp-db \
    --db-instance-class db.t3.micro \
    --engine postgres \
    --allocated-storage 20 \
    --master-username admin \
    --master-user-password password123 \
    --backup-retention-period 7
```

**2️⃣ Deploy Backend on AWS EC2**
```bash
ssh -i "key.pem" ec2-user@ec2-xx-xx-xx-xx.compute-1.amazonaws.com
sudo apt update && sudo apt install nodejs npm -y
npm install express mongoose cors dotenv
node server.js
```

**3️⃣ Deploy Frontend on AWS Amplify**
```bash
git init
git add .
git commit -m "Initial Commit"
amplify init
amplify add hosting
amplify publish
```

---

## **📞 Support & Contact**
For issues or contributions, contact **[Your Name]** at **[Your Email]**

🚀 **Built for ASP Solutions Ltd | Cloud-Powered with AWS**