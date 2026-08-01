import express from "express";
import noteRoutes from "./router/employee.routes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://assesment1frontend.onrender.com",
    ],
    credentials: true,
  })
);
app.use("/api/employees", noteRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Employee Management API is running 🚀",
  });
});

export default app;