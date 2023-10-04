// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project. What is it and why did you make it?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who did you collaborate with ot what technologies did you use? Give any usernames of anyone who did, any third-party assets you used, or tutorials you used.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'If you want people to contribute, how would you like them to contribute?'
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['No License', 'Apache 2.0', 'BSD 3-Clause', 'MIT', 'Mozilla Public License 2.0', 'GNU GPL v3']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err): console.log('Your README file was successfully generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {writeToFile('README.md', data)
});
}

// Function call to initialize app
init();
