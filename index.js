const {app, BrowserWindow} = require('electron');

function createWindow() {
    // creating the browser window

    const mainWindow = new BrowserWindow({
        width: 1086,
        height: 751
    });

    mainWindow.loadFile("index.html");

    mainWindow.setMenu(null);

    //mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0)
        createWindow();
})