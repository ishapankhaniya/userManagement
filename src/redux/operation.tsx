import { setUserList, setUserListError } from "./actions";

export const getUserList = (params: number) => async (dispatch: any) => {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=10&page=${params}`);
        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Dispatch the success action with the fetched data
        dispatch(setUserList(data?.results, params));

    } catch (error:any) {
        // Log the error for debugging purposes
        console.error("Error fetching user list:", error);
        // Dispatch an error action with the error message
        dispatch(setUserListError(error.message));
    }
};
