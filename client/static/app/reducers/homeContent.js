const initState={
  category: [],
  articleList: [],
  articleDetail: {},
  pageNum: 1,
  total: 0
}

const homeContent = (initState, action) => {
  switch (action.type) {
    case actionTypes.RESPONSE_ARTICLE_LIST:
        return {
            ...state, articleList: [...action.data.list], pageNum: action.data.pageNum, total: action.data.total
        };
    case actionTypes.RESPONSE_ARTICLE_DETAIL:
        return {
            ...state, articleDetail: action.data
        };

    default:
        return state;
    }
  }
  
  export default homeContent 