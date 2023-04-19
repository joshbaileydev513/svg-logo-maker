// imported the correct packages needed for this app
const inquirer = require('inquirer');
const fs = require('fs');

// imported classes from the shapes directory
const { Triangle, Circle, Square } = require('./lib/shapes');

// Need a function that prompts user via the CLI to answer questions and then save that input
function userInput () {
    inquirer 
        .prompt([
// Question 1 - User is prompted for text/logo to dislpay (3 char max)
            {
                type: 'input',
                message: 'Please enter up to 3 characters to display for your SVG Logo',
                name: 'logoText',
            },
// Question 2 - User is prompted for text color to display (enter a color keyword OR a hexadecimal number)
            {
                type: 'input',
                message: 'Please enter a text color to display by providing a color keyword OR a hexadecimal number',
                name: 'textColor',
            },
// Question 3 - User is prompted for list of shapes to choose from: circle, triangle, and square
            {
                type: 'list',
                message: 'Please enter up to 3 characters to display for your SVG Logo',
                choices: ['circle', 'triangle', 'square'],
                name: 'shapeChoice',
            },
// Question 4 - User is prompted for the shape's color THEN user can enter a color keyword (OR a hexadecimal number)
            {
                type: 'input',
                message: 'Please enter a shape color to display by providing a color keyword OR a hexadecimal number',
                name: 'shapeColor',
            },
    ])
};
// Need to write function that writes file using answers from the user has entered for all the prompts- 
// THEN an SVG file is created named `logo.svg` AND the output text "Generated logo.svg" is printed in the command line

