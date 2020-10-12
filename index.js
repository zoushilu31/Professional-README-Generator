const inquirer = require("inquirer");

const generate=require("./utils/generateMarkdown");
const fs=require("fs")

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'title',
            message: 'Enter your project title. (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }else{
                    console.log('You need to enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }else{
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'installation',
            message: 'How to you install your project?',
        },
        {
            type: 'input', 
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'input', 
            name: 'contributing',
            message: 'List the GitHub username(s), if any, of you collaborators.',
        },
        {
            type: 'input', 
            name: 'tests',
            message: 'Is there a test included?',
        },
        {
            type: 'list', 
            name: 'license',
            message: 'Choose a license.',
            choices: ['Apache', 'MIT', 'Mozilla', 'Unlicense']
        },
        {
            type: 'list', 
            name: 'badge',
            message: 'Choose a badge.',
            choices: ['commit', 'issue', 'pull', 'npm']
        },
        {
            type: 'input', 
            name: 'username',
            message: 'Enter your GitHub username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }else{
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'email',
            message: 'Enter your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }else{
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
    ]).then(data => {
            const readmeContent=generate(data)
            writeToFile("./README.md",readmeContent)
    })  ;
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(){
        console.log(data)
    })
}

// function to initialize program
function init() {
    questions()
}

// function call to initialize program
init();
