const initState={
    category: [],
    photoList: [],
    photoDetail: {},
    pageNum: 1,
    total: 0
  }
  
  const photosContent= (initState, action) => {
    switch (action.type) {
      case actionTypes.RESPONSE_PHOTO_LIST:
          return {
              ...state, photoList: [...action.data.list], pageNum: action.data.pageNum, total: action.data.total
          };
      case actionTypes.RESPONSE_PHOTO_DETAIL:
          return {
              ...state, photoDetail: action.data
          };
  
      default:
          return state;
      }
    }
    
    export default photosContent 