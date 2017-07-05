const ini={};
const postReducer = (state=ini,action)=>{
    switch(action.type){
        case "GET_POST":
            return action.userpost;
            
       
        default:
            return state;
    }
    
};

export default postReducer;