const mongoose = require("mongoose");
const { create } = require("./User");

const todoSchema = new mongoose.Schema({
    text: {type: String, required: true},
    completed: {type: Boolean, default: false},
});

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    priority: { type: String, enum: ["low", "medium", "high"], default: "low"},
    status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending"},
    dueDate: { type: Date, required: true},
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    attechments: { type: String, default: null},
    progress: { type: Number, default: 0},
},
{
    timestamps: true,
});

module.exports = mongoose.model("Task", taskSchema);