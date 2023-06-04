import { app, BrowserWindow, protocol, systemPreferences, desktopCapturer } from "electron";

let mainWindow;

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: {
      standard: true,
      secure: true
    }
  }
])





app.on('ready', () => {

    mainWindow = new BrowserWindow({
    	width: 800,
        height: 600,
        webPreferences: {
        	nodeIntegration: true,
            contextIsolation: false,

        }
    });



    mainWindow.webContents.openDevTools();  

    mainWindow.loadFile('../app/src/index.html');
});