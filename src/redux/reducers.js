import {OPEN_CONTACT, CLOSE_CONTACT} from "./actionTypes";

const initialState = {
  isContactOpen: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case OPEN_CONTACT: {
      return {
        ...state,
        isContactOpen: true
      }
    }
    case CLOSE_CONTACT: {
      return {
        ...state,
        isContactOpen: false
      }
    }
    default: {
      return state;
    }
  }
};