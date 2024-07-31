const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information for your project.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please provide contribution guidelines for your project.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please provide test instructions for your project.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license for your project.',
      choices: [
        'MIT',
        'BSD',
        'ISC',
      ],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your GitHub username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email address.',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateMarkdown(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('README file is successfully created!')
    );
  });
