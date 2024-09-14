import {SETUSERLISTERROR, USERLISTDATA} from '../types';
const initialState = {
  userListData: {
    userList: [],
    currentPageNumber: 1,
    error: null,
  },
};
const UserReducer = (state = initialState, action: any) => {
  
  switch (action.type) {
    case USERLISTDATA:
      let temp;
      if (state.userListData.currentPageNumber + 1 == action.pageNumber) {
        temp = [
          ...state.userListData.userList,
          ...action.payload,
        ];
      } else {
        temp = action.payload;
      }
      return {
        ...state,
        userListData: {
          userList: temp,
          currentPageNumber: action.pageNumber,
        },
      }
      case SETUSERLISTERROR:
        return {
            ...state,
            error: action.payload, // Set error message
        };
    default:
      return state;
  }
};
export default UserReducer;
