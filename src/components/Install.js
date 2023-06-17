const { exec } = require('child_process');

// Path to the .sh file you want to execute
// const filePath = './installationScript.sh';
const filePath = './askUbuntuShell.sh';

// another ways to run list apt from shell 
// cat example.list | xargs sudo apt-get -y install

// Execute the .sh file
exec(`bash ${filePath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing the .sh file: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`Error output from the .sh file: ${stderr}`);
    return;
  }
  
  console.log(`Output from the .sh file: ${stdout}`);
});