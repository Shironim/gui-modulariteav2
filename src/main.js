const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

const installFE = (e) =>{
  return new Promise((resolve, reject) => {
    exec(`bash  ${path.join(app.getAppPath(), 'src/shell/ModulFEWeb.sh')}`, (error, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
            // Reject if there is an error:
            return reject(error);
        }
        // Otherwise resolve the promise:
        resolve(e.returnValue = 'Frontend Installed');
    });
  });
}

const installBE = (e) =>{
  return new Promise((resolve, reject) => {
    exec(`bash  ${path.join(app.getAppPath(), 'src/shell/ModulBEWeb.sh')}`, (error, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
            // Reject if there is an error:
            return reject(error);
        }
        // Otherwise resolve the promise:
        resolve(e.returnValue = 'Frontend Installed');
    });
  });
}

const installMobile = (e) =>{
  return new Promise((resolve, reject) => {
    exec(`bash  ${path.join(app.getAppPath(), 'src/shell/ModulMobile.sh')}`, (error, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
            // Reject if there is an error:
            return reject(error);
        }
        // Otherwise resolve the promise:
        resolve(e.returnValue = 'Frontend Installed');
    });
  });
}

const installMultimedia = (e) =>{
  return new Promise((resolve, reject) => {
    exec(`bash  ${path.join(app.getAppPath(), 'src/shell/ModulMultimedia.sh')}`, (error, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
            // Reject if there is an error:
            return reject(error);
        }
        // Otherwise resolve the promise:
        resolve(e.returnValue = 'Frontend Installed');
    });
  });
}

async function runFE(e) {
  await installFE(e);
}
async function runBE(e) {
  await installBE(e);
}
async function runMobile(e) {
  await installMobile(e);
}
async function runMultimedia(e) {
  await installMultimedia(e);
}
// make sure this listener is set before your renderer.js code is called
ipcMain.on('get-preload-path', (e) => {
  e.returnValue = MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY;
});
ipcMain.on('log-sesuatu', (e) => {
  console.log('test coba deh')
});
ipcMain.on('install-web-fe', (e) => {
  runFE(e)
});
ipcMain.on('install-web-be', (e) => {
  runBE(e)
});
ipcMain.on('install-mobile', (e) => {
  runMobile(e)
});
ipcMain.on('install-multimedia', (e) => {
  runMultimedia(e)
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
    webPreferences: {
      preload: path.join(app.getAppPath(), 'src/preload.js'),
      nodeIntegration: false, // <--- flag
      contextIsolation: true,
      enableRemoteModule:false,
      nodeIntegrationInWorker: false, // <---  for web workers
    },
  });

  ipcMain.on('get-preload-path', (e) => {
    e.returnValue = MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY;
  })
  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

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
