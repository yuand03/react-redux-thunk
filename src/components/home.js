import  React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './posts';
import {fetchData ,refreshData} from '../actions/homeActions';
import {setPost} from '../actions/postActions';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
class Home extends Component {
    
    componentWillMount() {
        console.log(fetchData() );
       this.props.requestData();
    }
    componentDidMount() {
        console.log('sve',this.props.posts.newposts);
    }
    shouldComponentUpdate(){
        //console.log('update',this.props.posts.newposts);
        return true;
    }
    getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}
    addrecorder(){
        this.props.addData([{id:999,title:'boss',body:"test test"}]);
    }
    getPostFromClick(post){
        this.props.setPostTo(post);
    }
    render() {
        const posts= this.props.posts.newposts;
        //const items= this.getRandom(posts, 10).map((post,i)=>(
            const items=  posts.map((post,i)=>(
            
                <Card>
                   <CardHeader
                    title={post.title}
                    subtitle="Subtitle"
                    avatar=""
                    actAsExpander={true}
                    showExpandableButton={true}
                    /> 
                    <CardText expandable={true}>
                        <a href={'#/post/'+post.id} onClick={()=>this.props.setPostTo(post)}>
                            <div >{post.id}</div>
                        </a>
                        
                         <div style={{color:"red"}}>{post.body}</div>
                        
                    </CardText>
                </Card>            

            
        ));
        const st ={
            height: 100,
            width: '80%',
            margin:'0 10%',
            display: 'inline-block',
        };
        return (
            <Paper style={st} zDepth={1}>
                <Posts />
                {items}
                <button onClick={this.addrecorder.bind(this)}>add new post</button>
            </Paper>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.homeReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
         requestData:()=>dispatch(fetchData()),
         addData:(newdata)=>dispatch(refreshData(newdata)),
         setPostTo:(post)=>dispatch(setPost(post))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);