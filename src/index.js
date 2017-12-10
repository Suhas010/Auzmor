import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import App from './Components/App/Component/App';
import registerServiceWorker from './registerServiceWorker';

//Matrial UI dependancy for touch tap event. needs to inject manually
injectTapEventPlugin();

ReactDOM.render(

    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    
    ,document.getElementById('root')
);

 registerServiceWorker();
