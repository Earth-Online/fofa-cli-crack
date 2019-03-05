//'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
app.commandLine.appendSwitch('disable-http-cache');
app.commandLine.appendSwitch('no-proxy-server');
app.commandLine.appendSwitch('ignore-certificate-errors');
let mainWindow;
//禁止同时打开两个APP
const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore()
	mainWindow.show();
    mainWindow.focus();
  }
})

if (isSecondInstance) {
  app.quit();
  return;
}
function createWindow () {
  //var argv = require('minimist')(process.argv.slice(1));
  //var devMode = argv.dev || false;
  mainWindow = new BrowserWindow({width: 550, height: 350,title:"FOFA",icon: __dirname + '/images/64.png',backgroundColor:'#FFFFFF',autoHideMenuBar :false
//,transparent: true,frame: false
  });

  // 指定一个入口的html文件
  mainWindow.loadURL('file://' + __dirname + '/tpl/login.html');

  // 打开调试工具，其实就是chrome的那套调试工具
  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
	//app.quit();
    mainWindow = null;
  });
}

app.on('ready', function(){
    createWindow();
    //var Menu = require("menu");
	if(process.platform == 'darwin'){
		const {app, Menu} = require('electron')
		const template = [
		  {
			label: 'Edit',
			submenu: [
			  {role: 'undo'},
			  {role: 'redo'},
			  {type: 'separator'},
			  {role: 'cut'},
			  {role: 'copy'},
			  {role: 'paste'},
			  {role: 'pasteandmatchstyle'},
			  {role: 'delete'},
			  {role: 'selectall'},
			  {role: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
			]
		  }
		]
		const menu = Menu.buildFromTemplate(template);
		Menu.setApplicationMenu(menu);
	}


});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
	
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});