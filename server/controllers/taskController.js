const Task = require("../models/Task");
const router = require("../routes/authRoutes");
const { route } = require("../routes/authRoutes");



//@desc  Get all tasks (admin: all, User: only assigned tasks)
//@route GET /api/tasks/
//@access Private 
const getTasks = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });

    }
};

//@desc  Get tasks by ID
//@route GET /api/tasks/:id
//@access Private 

const getTaskById = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });

    }
};

//@desc  create a new task (admin only)
//@route POST /api/tasks/
//@access Private (admin)
const createTask = async (req, res) => {
    try {
        const {
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            attachments,
            todoChecklist,
        } = req.body;
        if (!Array.isArray(assignedTo)) {
            return res.status(400).json({ message: "assignedTo must be an array of users IDs" });

        }
        const task = await Task.create({
            title, 
            description, 
            priority, 
            dueDate, 
            assignedTo, 
            createdBy: req.user._id, 
            todoChecklist, 
            attachments,
        });

        res.status(201).json({ message: "task created successfully", task });

    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });

    }
};

//@desc  Update task details
//@route PUT /api/tasks/
//@access Private 
const updateTask = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });

    }
};


//@desc  delete  task details (admin only)
//@route delete /api/tasks/:id
//@access Private 
const deleteTask = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });

    }
};


//@desc  Update task status
//@route PUT /api/tasks/:id/status
//@access Private 
const updateTaskStatus = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });

    }
};


//@desc  Update task checkList
//@route PUT /api/tasks/:id/todo
//@access Private 
const updateTaskChecklist = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });

    }
};

//@desc  Dashboard Data (admin only)
//@route PUT /api/tasks/dashboard-data
//@access Private 
const getDashboardData = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });

    }
};

//@desc  dashboard data (user-specific)
//@route PUT /api/tasks/user-dashboard-data
//@access Private 
const getUserDashboardData = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message });

    }
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist,
    getDashboardData,
    getUserDashboardData
};




