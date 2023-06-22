// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getPreloadPath: () => ipcRenderer.sendSync('get-preload-path'),
  logSesuatu: () => ipcRenderer.sendSync('log-sesuatu'),
  installWebDev: () => ipcRenderer.send('install-web-dev'),
});