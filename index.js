#!/usr/bin/env node
const fs = require('fs'); // File System module to handle file operations

// Define the project structure: directories and their respective files

const projectStructure = {
  'config': ['key.js', 'db.js'],
  'model':['model1.model.js', 'model2.model.js','model3.model.js'],
  'controller':['controller1.controller.js','controller2.controller.js','controller3.controller.js'],
  'routes':['route1.routes.js','route2.route.js','route3.route.js'],
};

// Iterate over the structure, creating directories and files

Object.entries(projectStructure).forEach(([dir, files]) => {
  fs.mkdirSync(dir, { recursive: true }); // Create directories
  files.forEach(file => fs.writeFileSync(`${dir}/${file}`, '')); // Create files
});

console.log("Project structure created successfully!");