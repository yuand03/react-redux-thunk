import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Post extends Component {
    
   
    render() {
        const st ={
            height: 100,
            width: '80%',
            margin:'0 10%',
            textAlign: 'center',
            display: 'inline-block',
        };
         console.log(this.props.match.params.id);
        return (
            <Paper style={st} zDepth={1}>
            <Card>
                <CardHeader
                    title={this.props.post.title}
                    subtitle="Subtitle"
                    avatar=""
                />
                <CardMedia overlay={<CardTitle title= {this.props.post.title} subtitle="Overlay subtitle" />}>
                <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="" />
                </CardMedia>
                <CardText>
                {this.props.post.body}
                </CardText>
            </Card>
            </Paper>
        );
    }
}
const mapStateToProps = (state) => ({
    post: state.postReducer
});


export default connect(mapStateToProps)(Post);