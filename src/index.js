import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute,HashRouter ,Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import Post from './components/post';


const Parent = () => (
            <div>
                <Route path='' component={App} />
                <Route exact path='/' component={Home} />
                <Route path='/post/:id' component={Post} />
                <Route path='' component={Footer} />
            </div>
            );
             injectTapEventPlugin();

ReactDOM.render(
   
    <MuiThemeProvider muiTheme={getMuiTheme('darkBaseTheme')}>
               
        <Provider store={store}>  
            <HashRouter> 

                <div>
                    <Header/>
                    <Route path='/' component={Parent} />

                    
                </div>  
            
            </HashRouter>
            
        </Provider>
    </MuiThemeProvider> ,
 document.getElementById('root')
 );
registerServiceWorker();
