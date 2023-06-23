// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  installWebFE: () => ipcRenderer.sendSync('install-web-fe'),
  installWebBE: () => ipcRenderer.sendSync('install-web-be'),
  installMultimedia: () => ipcRenderer.sendSync('install-multimedia'),
  installMobile: () => ipcRenderer.sendSync('install-mobile'),
});