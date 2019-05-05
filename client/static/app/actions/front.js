export const actionsTypes = {
    GET_LIST:"GET_LIST",
    RESPONSE_LIST: "RESPONSE_LIST",
    GET_DETAIL:"GET_DETAIL",
    RESPONSE_DETAIL: "RESPONSE_DETAIL"
  };

export const get_list = (count) => {
    count+=2;
    return {
      type: actionsTypes.GET_LIST,
      count
    }
  }