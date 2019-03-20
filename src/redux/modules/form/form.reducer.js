import {
  CHANGE_BRAND_NAME,
  CHANGE_DESCRIBE,
  CHANGE_OBJECTIVES,
  CHANGE_ACTIVE_TAB,
} from '../../../constants/actionTypes';

const initialState = {
  brandName: null,
  describe: null,
  objectives: [],
  activeTab: 'About',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_BRAND_NAME:
      return {
        ...state,
        brandName: action.payload,
      };
    case CHANGE_DESCRIBE:
      return {
        ...state,
        describe: action.payload,
      };
    case CHANGE_OBJECTIVES:
      return {
        ...state,
        objectives: action.payload,
      };
    case CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
}
