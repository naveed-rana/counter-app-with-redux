import { combineReducers } from "redux";
import { SHOW_STATE , ADD_COUNT,DEC_COUNT } from "../actions/index.js";
import countstate from "../data/countstate.json";

function show_State_Reducer(state={count:0,showstate:false},action) {
    switch (action.type) {
        case SHOW_STATE:
        return Object.assign({}, state, {
            count:state.count + 1
          })
          

        case ADD_COUNT:
        
          return Object.assign({}, state, {
              count:state.count + 1
            })
        case DEC_COUNT:
        
            return Object.assign({}, state, {
                count:state.count - 1

              })
        default:
           return state;   }
    
}
const rootReducer = combineReducers({show_State_Reducer});
export default rootReducer;
