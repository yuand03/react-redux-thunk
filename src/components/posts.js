import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
class Posts extends Component {
    
    render() {
       
        return (
            <Paper zDepth={1}>
             <List>
                <ListItem
                    
                    primaryText="(650) 555 - 1234"
                    secondaryText="Mobile"
                >hjjk</ ListItem>
                <ListItem
                    
                    primaryText="(323) 555 - 6789"
                    secondaryText="Work"
                >kmmm </ListItem>
            </List>
            </Paper>
        );
    }
}

export default Posts;