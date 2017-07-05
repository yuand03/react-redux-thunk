let inistate = {
    newposts:[{id:1,title:1},{id:1,title:1},{id:1,title:1},{id:1,title:1},{id:1,title:1},{id:1,title:1},{id:1,title:1},{id:1,title:1},{id:1,title:1},{id:1,title:1},{id:1,title:1},],
    newphotos:[]

}

const homeReducer = (state=inistate,action)=>{
    switch(action.type){
        case "REQUEST_DATA":
            state={
                ...state,
                newposts: action.newposts,
                newphoto: action.newphotos
            }
            break;
        case "REFRESH_DATA":
            state={
                ...state,
                newposts: action.newposts,
                newphoto: action.newphotos
            }
            break;
        default:
            return state;
    }
    return state;
};

export default homeReducer;