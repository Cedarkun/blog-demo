const initState={}

const frontContent = (initState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return 1;
      case 'LOGOUT':
        return 0;
      default:
        return state;
    }
  }
  
  export default user