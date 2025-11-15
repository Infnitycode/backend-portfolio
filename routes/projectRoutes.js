import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// POST add new project
router.post("/add", async (req, res) => {
    try {
        const project = new Project(req.body);
        const saved = await project.save();

        res.status(201).json({
            success: true,
            message: "Project added successfully!",
            project: saved
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

export default router;
