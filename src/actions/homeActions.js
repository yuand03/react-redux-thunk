
export function fetchData () {
   
    const request = fetch('https://jsonplaceholder.typicode.com/posts').then(
        function(response){
            return response.json();
        }
    );
    
    
    return (dispatch) => {
         
         return  request.then(
             data=>dispatch({type: "REQUEST_DATA", newphotos:[],newposts: data })
          );
    };
      
}
export function refreshData(newdata){
    console.log(newdata);
    return (dispatch) => {
         
         dispatch({type: "REQUEST_DATA", newphotos:[],newposts:newdata })
          
    };
}
