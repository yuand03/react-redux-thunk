import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Link} from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import ListIcon from 'material-ui/svg-icons/action/list';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" containerElement={<Link to="/home" />} />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);
const LeftListMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton  ><ListIcon color='white'/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" containerElement={<Link to="/home" />} />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);
Logged.muiName = 'IconMenu';
LeftListMenu.muiName = 'IconMenu';
/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Header extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        <Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        />
        <AppBar
          title="Title" 
          iconElementLeft= {<LeftListMenu style={{color:'white'}}/>}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
      </div>
    );
  }
}

export default Header;