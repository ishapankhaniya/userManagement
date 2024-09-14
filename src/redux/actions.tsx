import { SETUSERLISTERROR, USERLISTDATA } from "./types";

export function setUserList(data: any,pageNumber:number) {
    return {
      type: USERLISTDATA,
      payload: data,
      pageNumber: pageNumber,
    };
  }
  export const setUserListError = (error: string) => ({
    type: SETUSERLISTERROR,
    payload: error,
});
