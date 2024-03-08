// index.js

// Aquarius - A versatile platform designed to streamline collaboration and enhance productivity for professionals across various industries.

// Aquarius functionality
class Aquarius {
    constructor() {
        this.projects = [];
        this.tasks = {};
    }

    // Method to create a new project
    createProject(projectName, description) {
        const project = {
            name: projectName,
            description: description
        };
        this.projects.push(project);
        this.tasks[projectName] = [];
    }

    // Method to add tasks to a project
    addTask(projectName, taskName) {
        this.tasks[projectName].push(taskName);
    }

    // Method to display all projects and their tasks
    displayProjects() {
        console.log("Projects:");
        this.projects.forEach(project => {
            console.log(`- ${project.name}: ${project.description}`);
            const projectTasks = this.tasks[project.name];
            if (projectTasks.length > 0) {
                console.log("  Tasks:");
                projectTasks.forEach(task => {
                    console.log(`    - ${task}`);
                });
            }
        });
    }
}

// Example usage:
const aquariusApp = new Aquarius();

// Creating projects
aquariusApp.createProject("Website Redesign", "Redesign the company website to improve user experience and accessibility.");
aquariusApp.createProject("Marketing Campaign", "Plan and execute a marketing campaign to increase brand visibility.");

// Adding tasks to projects
aquariusApp.addTask("Website Redesign", "Gather user feedback on current website design.");
aquariusApp.addTask("Website Redesign", "Create wireframes for new website layout.");
aquariusApp.addTask("Marketing Campaign", "Design promotional materials for the campaign.");

// Displaying projects and tasks
aquariusApp.displayProjects();
