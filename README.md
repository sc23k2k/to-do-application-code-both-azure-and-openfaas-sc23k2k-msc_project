To-Do Application Code - Azure and OpenFaaS.
This repository contains the code for a To-Do application developed as part of an MSc project. The application demonstrates the implementation of a serverless architecture using both Azure Functions and OpenFaaS for the backend, and a simple web-based frontend for user interaction. This project showcases how serverless functions can be deployed across different platforms while maintaining a consistent frontend interface.

Repository Structure
1. Root Directories
.vscode/:

Contains Visual Studio Code configuration files, including settings and extensions that are tailored to the development environment for this project.
todo-app/:

The main application directory, which is divided into backend and frontend sections.
2. Backend Structure
2.1 AzureFunctions/
This directory contains the serverless functions intended to run on Microsoft Azure. Each function corresponds to a specific CRUD operation for managing to-do tasks.

CreateTodo/:

Handles the creation of new to-do items. This function accepts input data, validates it, and stores the new task in a database or other storage service.
DeleteTodo/:

Manages the deletion of existing to-do items. It takes an identifier (such as a task ID) and removes the corresponding item from the storage.
GetTodos/:

Retrieves all to-do items from the storage. This function fetches and returns a list of tasks, with options for filtering or sorting if implemented.
UpdateTodo/:

Updates the details of an existing to-do item. This could involve modifying the task’s description, status, or due date.
host.json:

Configuration file for Azure Functions, defining runtime settings like logging levels, function timeouts, and other environment-specific configurations.
2.2 OpenFaaS/
This directory contains the serverless functions designed to run on the OpenFaaS platform. These functions perform the same CRUD operations as those in AzureFunctions, but they are tailored to work within the OpenFaaS environment.

create-todo/:

Equivalent to CreateTodo in AzureFunctions, responsible for creating new tasks in the OpenFaaS environment.
delete-todo/:

Equivalent to DeleteTodo, responsible for deleting tasks in OpenFaaS.
get-todos/:

Equivalent to GetTodos, responsible for retrieving the list of tasks in OpenFaaS.
update-todo/:

Equivalent to UpdateTodo, responsible for updating tasks in OpenFaaS.
local.settings.json:

Configuration file for local development with OpenFaaS, possibly including environment variables, API endpoints, or other necessary settings.
3. Frontend Structure
3.1 frontend/
This directory contains the frontend code for the To-Do application. It is a simple web-based interface that interacts with the backend APIs to manage tasks.

index.html:

The main HTML file that serves as the structure of the web application. It includes links to the CSS and JavaScript files and defines the basic layout of the to-do list interface.
style.css:

The CSS file that contains styles and layout instructions for the HTML elements. It defines the look and feel of the application, including colors, fonts, and layout positioning.
app.js:

The JavaScript file that handles the logic for interacting with the backend APIs. This includes making HTTP requests to create, retrieve, update, and delete tasks. It also manages the dynamic updating of the UI based on user actions and backend responses.
