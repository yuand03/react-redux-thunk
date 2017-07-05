export function setPost(post){
    return (dispatch) => {
         console.log(post);
         dispatch({type: "GET_POST", userpost:post})
          
    };
}