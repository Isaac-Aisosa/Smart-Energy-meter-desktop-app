import { app, BrowserWindow} from 'electron';

const EventEmitter = require('events')
const loadingEvents = new EventEmitter()


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let splash;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    icon: __dirname +  './assets/icons/logo.png'
  });

  mainWindow.hide();
    // create a new `splash`-Window 
  splash = new BrowserWindow({width: 700, height: 700, transparent: true, frame: false, alwaysOnTop: true,icon: __dirname +  './assets/icons/logo.png'});
  splash.loadURL(`file://${__dirname}/page/splash.html`);
  

  // Our loadingEvents object listens for 'finished'
  loadingEvents.on('finished', () => {
    splash.destroy();
    mainWindow.loadURL(`file://${__dirname}/page/index.html`)
    mainWindow.show();

  })
  setTimeout(() => loadingEvents.emit('finished'), 9000)
  // Open the DevTools.
 // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;

   
      
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
