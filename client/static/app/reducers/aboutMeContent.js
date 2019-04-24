const initState={
  name:'',
  sex:'',
  age:0,
  hobbies:''
}

const aboutMeContent = (initState, action) => {
  switch (action.type) {
    case actionTypes.RESPONSE_ABOUTME_DETAIL:
        return {
            ...state
        };
    default:
        return state;
    }
  }
  
  export default aboutMeContent 