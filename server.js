import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';

// Import Routes
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();
connectDB();

const app = express();

// Dynamic Port (Render/Vercel compatible)
const PORT = process.env.PORT || 5000;

// ---------------- CORS (Perfect for Production) ----------------
app.use(cors({
    origin: "*",   // Allow all origins (You can replace * with frontend URL later)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Body Parser
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.send("Portfolio Backend is running!");
});

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
