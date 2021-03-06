import initialState from "./initialState";
import {userTypes} from "../actions/userTypes";


export default function (state = initialState.exams, action) {
    switch (action.type) {
        case userTypes.FETCH_USERS:
            console.log("FETCH_EXAMS TEST: ",action.payload);
            return {
                ...state,
                users: action.payload
            };
            case userTypes.FETCH_USER:
            console.log("FETCH USER TEST: ",action.payload);
            return {
                ...state,
                user: action.payload
            };


        default:
            return state;
    }
}
