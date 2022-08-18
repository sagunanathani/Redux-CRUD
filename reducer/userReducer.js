
const initialState = {
      data: [],
};
const userReducer = (state = initialState, action) =>{
      switch(action.type){
            case "ADD_DATA":
                  return {
                        data: [...state.data, action.payload]
                  };
            case "DELETE_DATA":
                  // return {
                  //       ...state,
                  //       data: action.payload
                  // };
                  return {
                        data: state.data.filter((tableData) => {
                              return tableData.index !== action.payload;
                        })
                  };
            case "EDIT_DATA":
                  const UserDataDetails = state.data.filter((userData, index) => {
                        if (index === action.payload.index) {
                              return action.payload.data;
                        }
                        else {
                              return userData;
                        }
                  });
                  return {
                        ...state,
                        data: UserDataDetails,
                  };
            default:
                  return state;
      }
};
export default userReducer;



