/* eslint-disable default-case */
const initialState = {
    movie: []
  }
  
  const moviesReducer = (state=initialState,action) => {
    switch(action.type){
      case "GET_ALL_MOVIES_SUCCEED":{
          return{
              ...state,
              movie: action.payload[0].results,
              statue: "complete"
          }
      }
      case "UPDATE_ALL_MOVIES":{
          return{
            ...state,
            movies: action.payload
        }
      }
      case "CLEAR_MOVIES":{
        return state = []
      }
      default: {
        return state;
      }
    }
  }
  
  export default moviesReducer;
  