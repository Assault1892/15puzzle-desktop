const builder = require('electron-builder');

builder.build({
    config: {
        'appId': '15puzzle.desktop',
        'win':{
            'target': {
                'target': 'zip',
                'arch': 'x64'
            }
        }
    }
});