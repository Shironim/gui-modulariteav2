const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

// make sure this listener is set before your renderer.js code is called
ipcMain.on('get-preload-path', (e) => {
  e.returnValue = MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY;
});
ipcMain.on('log-sesuatu', (e) => {
  console.log('test coba deh')
});
ipcMain.on('install-web-dev', () => {
  exec(`bash  ${path.join(app.getAppPath(), 'src/shell/test.sh')}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing the .sh file: ${error.message}`);
      return;
    }
    
    if (stderr) {
      console.error(`Error output from the .sh file: ${stderr}`);
      return;
    }
    
    console.log(`Finished install`);
  });
});
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    title:"Modularitea App",
    // frame:false,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'src/preload.js'),
      nodeIntegration: false, // <--- flag
      contextIsolation: true,
      enableRemoteModule:false,
      nodeIntegrationInWorker: false, // <---  for web workers
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// app.whenReady().then(() => {
//   // Other app initialization code...

//   ipcMain.on('execute-shell-script', () => {

//     // const scriptPath = '/path/to/your/script.sh';

//     // exec(`sh ${scriptPath}`, (error, stdout, stderr) => {
//     //   if (error) {
//     //     console.error(`Error executing shell script: ${error}`);
//     //     return;
//     //   }

//       console.log('Shell script executed successfully');
//     //   console.log('stdout:', stdout);
//     //   console.log('stderr:', stderr);
//     });
//   });

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
