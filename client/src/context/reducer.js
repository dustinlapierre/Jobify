import {DISPLAY_ALERT} from "./actions";

const reducer = (state, action) => 
{
    //like setState this returns the state for a given action
    if(action.type === DISPLAY_ALERT)
    {
        return {
            ...state,
            showAlert: true,
            alertType: "danger",
            alertText: "Please provide all values!"
        };
    }
    throw new Error(`no such action : ${action.type}`);
};

export default reducer;