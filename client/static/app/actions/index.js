export const actionsTypes = {
  FETCH_START: "FETCH_START",
  FETCH_END: "FETCH_END",
  USER_LOGIN: "USER_LOGIN"
};

export const login = (username,password) => {
  return {
    type: actionsTypes.USER_LOGIN,
    username,
    password
  }
}