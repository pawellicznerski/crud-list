// import _ from 'lodash';

function initialData(state = [], action) {
  switch(action.type) {
    case 'FETCH_INITIAL-DATA_PENDING' :
      // console.log("gggggggFETCH_INITIAL-DATA_PENDING!!");
      return [
        ...state
      ]
    case 'FETCH_INITIAL-DATA_FULLFILED' :
      // console.log("ggggggggggFETCH_INITIAL-DATA_FULLFILED!");
      return [
        ...state,
        ...action.data
      ]
    case 'FETCH_INITIAL-DATA_REJECTED' :
      // console.log("ggggggggggFETCH_INITIAL-DATA_REJECTED!");
      return [
        ...state,
      ]
    default:
      return state;
  }
}


export default initialData;
