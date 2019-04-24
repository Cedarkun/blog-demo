const initState={
  type:'HOME',
  path:'/HOME'
}
const navItem = (initState, action) => {
    switch (action.type) {
      case 'SHOWHOME':
        return 'HOME';
      case 'SHOWPHOTOS':
        return 'PHOTOS';
      case 'SHOWABOUTME':
        return 'ABOUTME';
      default:
        return state;
    }
  }
  
  export default navItem
