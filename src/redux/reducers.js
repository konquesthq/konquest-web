import {OPEN_CONTACT, CLOSE_CONTACT, OPEN_DEMO} from "./actionTypes";

const initialState = {
  isContactOpen: false,
  isDemoRequest: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case OPEN_CONTACT: {
      return {
        ...state,
        isContactOpen: true,
        isDemoRequest: false,
      }
    }
    case CLOSE_CONTACT: {
      return {
        ...state,
        isContactOpen: false
      }
    }
    case OPEN_DEMO: {
      return {
        ...state,
        isContactOpen: true,
        isDemoRequest: true
      }
    }
    default: {
      return state;
    }
  }
};