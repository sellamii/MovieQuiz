/* eslint-disable default-case */
const initialState = {
    actors: []
  }
  
  const actorsReducer = (state=initialState,action) => {
    switch(action.type){
      case "GET_ALL_ACTORS_SUCCEED":{
          return{
            ...state,
            actors: action.payload[0].results
          }
      }
      case "UPDATE_ALL_ACTORS": {
        return{
            ...state,
            actors: action.payload
        }
      }
      case "CLEAR_ACTORS":{
        return state = []
      }
      default: {
        return state;
      }
    }
  }
  
  export default actorsReducer;
  