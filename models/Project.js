import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: ""
    },
    repo: {
        type: String,
        default: ""
    },
    technologies: {
        type: [String],
        default: []
    }
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
