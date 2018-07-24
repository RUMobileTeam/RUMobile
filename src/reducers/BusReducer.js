import { COLLAPSE_BUS_ROW,
  NEARBY_DATA_PULL,
  PULLING_NEARBY_DATA,
  PULLING_NEARBY_DATA_2,
  ALL_DATA_KEYS,
  ADK_HERE,
  NB_ALL_DATA,
  ALL_DATA,

  //Xu --1
  NEARBYBUS,
  ALLBUS,
  ACTIVEROUTES,
  INACTIVEROUTES,
  //end --1

} from '../actions/types';

const INITIAL_STATE = {
  collapse: false, nbd_here: 'not pulling', nearbydata: null, nearbydata2: {}, allkeys: {}, khere: 'no', procc: '', alldata: [],

  //Xu --2
  nearbyBus: [], allBus: [], activeRoutes: [], inactiveRoutes: [],
  //end --2
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case COLLAPSE_BUS_ROW:
      return { ...state, collapse: action.payload };

    //Xu --3
    case NEARBYBUS:
      return { ...state, collapse: action.payload };
    case ALLBUS:
      return { ...state, collapse: action.payload };
    case ACTIVEROUTES:
      return { ...state, collapse: action.payload };
    case INACTIVEROUTES:
      return { ...state, collapse: action.payload };
    //end --3

    case NEARBY_DATA_PULL:
      return {...state, nearbydata: action.payload };
    case PULLING_NEARBY_DATA:
      return {...state, nbd_here: action.payload };
    case PULLING_NEARBY_DATA_2:
      return {
        ...state,
        nearbydata2: [...state.nearbydata2, action.payload]
      };
    case ALL_DATA_KEYS:
      return {...state, allkeys: action.payload};
    case ADK_HERE:
      return {...state, khere: action.payload};
    case NB_ALL_DATA:
      return {...state, procc: action.payload};
    case ALL_DATA:
      return {
        ...state,
        alldata: [...state.alldata, action.payload]
      };
    default:
      return state;
  }
};
