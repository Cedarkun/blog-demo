const initialState = {
    userInfo: {}
};
const login=(state=initialState,action)=>{
    switch (action.type){
        case 'USER_LOGIN': return {userInfo:{username:state.username, password:state.password}};
        default: return state;
    }       
}
export default login;