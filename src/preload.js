// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { remote } = require('electron');
window.ipcRenderer = require('electron').ipcRenderer;