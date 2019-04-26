import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

/* State Shape
{
    quacking: bool,
    distance: number
}
*/

const quackReducer = ( state = false, action ) => {
    switch( action.type ) {
        case "XXX": return true;
        /* ... */
        default: return state;
    }
}

const distanceReducer = ( state = 0, action ) => {
    switch( action.type ) {
        case "YYY": return state + action.payload.distance;
        /* ... */
        default: return state;
    }
}

const AppReducer = (history) => combineReducers( {
    router: connectRouter(history),
    quacking: quackReducer,
    distance: distanceReducer
} );

export default AppReducer;