// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env
dotenv.config();

const app = express();

// ✅ Apply middleware before routes
app.use(cors());            // Allow requests from frontend
app.use(express.json());    // Parse JSON bodies

// ---------- MongoDB Connection ----------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected!"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// ---------- Mongoose Model ----------
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// ---------- Routes ----------

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

// Signup (Add user)
app.post("/add-user", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Optional: prevent duplicate emails
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).send("User already exists!");

    const user = new User({ name, email, password });
    await user.save();

    res.send("User saved successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Login (Check credentials)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.password !== password)
      return res.status(400).json({ message: "Invalid password" });

    res.json({ message: "Login successful!", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all users (for testing)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ---------- Start Server ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
