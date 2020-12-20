const { app, BrowserWindow } = require('electron');

function createWindow () {
	let win = new BrowserWindow({
		width: 525,
		height: 600,
		resizable: false,
		maximizable: false,
		center: true,
		autoHideMenuBar: true,
		hasShadow: false,
		icon: (__dirname + '/icon.png'),
		backgroundColor: "#222",
		title: "15 Puzzle"
	});
	
	win.loadURL('https://15-puzzle.app');
};

app.on('ready', createWindow);