import { OPEN_CONTACT, CLOSE_CONTACT } from "./actionTypes";

export const openContact = () => ({
  type: OPEN_CONTACT
});

export const closeContact = () => ({
  type: CLOSE_CONTACT
});