const initialState = {
  user: null,
};

export const Reducer = (state = initialState, action) => {
  if (action.type === "USER_LOGIN") {
    return {
      user: action.payload,
    };
  }
  return state;
};
