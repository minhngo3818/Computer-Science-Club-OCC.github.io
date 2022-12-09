const mongoose = require("mongoose")
const { Schema } = mongoose

const projectStatus = ["Initiated", "On Going", "Completed", "Canceled"]

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: projectStatus,
        immutable: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    start_date: Date,
    end_date: Date,
    discord_url: String,
    github_url: String,
    demo_url: String,
    created_at: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    images: {
        type: [{ type: String }],
    },
})

module.exports = {
    ProjectsModel: mongoose.model("projects", projectSchema),
    projectSchema,
}
