# assignment1
Assignment 1: Google Sheets Clone

This project implements a web application that mimics the core functionalities and user interface of Google Sheets. The application supports dynamic data entry, basic mathematical and data quality functions, and formatting options in a grid-like interface.

Features

1. Spreadsheet Interface

Grid Structure: Displays a grid layout for data input.

Toolbar and Formula Bar: Provides input fields for entering values and formulas.

Drag Functionality: Allows users to drag content across cells.

Cell Dependencies: Automatically updates dependent cells when source data changes.

Row and Column Operations: Users can add, delete, and resize rows and columns.

2. Mathematical Functions

SUM: Calculates the sum of values within a specified range of cells.

AVERAGE: Computes the average of numeric values in a given range.

MAX: Finds the maximum value from a range.

MIN: Identifies the minimum value.

COUNT: Counts numeric entries within a specified range.

3. Data Quality Functions

TRIM: Removes leading and trailing spaces from cell text.

UPPER: Converts text to uppercase.

LOWER: Converts text to lowercase.

REMOVE_DUPLICATES: Eliminates duplicate rows from a selected range.

FIND_AND_REPLACE: Searches for specific text and replaces it.

4. Data Entry and Validation

Supports multiple data types: numbers, text, and dates.

Implements basic validation to ensure cells contain appropriate data.

5. User Testing Tools

Allows users to input and test custom data.

Provides buttons or UI elements to execute and display function results.

Tech Stack

Frontend

React.js: Used for dynamic UI rendering and state management.

CSS: Provides styling for the grid and toolbar elements.

Backend

Node.js (Express) or Python Flask (as per choice): Handles data persistence and computation requests.

Database: MongoDB or SQLite for managing saved spreadsheet data.

Data Structures

Grid Data Structure: A 2D array to represent the spreadsheet grid.

Formula Parsing: A custom parser or math.js for evaluating expressions and tracking dependencies.

Dependency Graph: Used to manage relationships between cells for automatic recalculations.

Instructions

Setup

Clone the repository: git clone https://github.com/sriharipamidimarri/assignment1.

Navigate to the src directory for code.

Install dependencies for backend (if applicable):

npm install
node server.js

Start the frontend:

npm start

Usage

Use the grid to input data.

Apply functions like SUM or AVERAGE in formula fields (e.g., =SUM(A1:A5)).

Utilize formatting options to bold or color text.

Test custom data using the UI's action buttons.

Bonus Features (Planned)

Save/Load Functionality: To store and retrieve spreadsheets.

Chart/Graph Integration: Data visualization using Chart.js.

Advanced Formulas: Support for relative/absolute references.

Future Improvements

Security Enhancements: Input sanitization and validation.

Performance Optimizations: Efficient rendering for large grids.

Cross-Browser Compatibility.

Acknowledgments

This project is inspired by the interface and functionality of Google Sheets, focusing on educational and personal learning purposes.

For further details, visit the GitHub Repository.

