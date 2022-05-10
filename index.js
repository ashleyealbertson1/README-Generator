// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inq.prompt([{
    name: "title",
    type: "input",
    message: "What is the title of your project?",
}, 
{
    name: "description",
    type: "input",
    message: "What is the description of your project?",
},
{
    name: "license",
    type: "list",
    message: "What type of license does your project use?",
    choices: ["MIT", "Apache2.0", "GNU v3.0", "None"],
}, 
{
    name: "installation",
    type: "input",
    message: "What is the installation command?",
}, 
{
    name: "userName",
    type: "input",
    message: "What is your GitHub username?",

}, {
    name: "projectRepo",
    type: "input",
    message: "What is the name of your project repo?",
}, 
{
    name: "projectUsage",
    type: "input",
    message: "What is this project used for?",

}, 
{
    name: "testing",
    type: "input",
    message: "What kind of testing was done on the project?", 
}, 
{
    name: "email",
    type: "input",
    message: "What is your email address?",

}]).then((answers) => {
    const { title, description, license, installation, userName, projectRepo, projectUsage, testing, email } = answers;

    const writeFile = 
`# TITLE
${title}

## LICENSE
${license}

## DESCRIPTION
${description}

## TABLE OF CONTENTS
- Installation
- Usage
- Contributions
- Testing
- Questions

## INSTALLATION
${installation}

##GITHUB USERNAME
${userName}

## USAGE
${projectUsage}

## TESTING
${testing}

## CONTACT INFO
${email}
`

    fs.writeFileSync('./README.md', writeFile)
})
