import { OPEN_CONTACT, CLOSE_CONTACT, OPEN_DEMO } from "./actionTypes";

export const openContact = (isDemoRequest = false) => ({
  type: isDemoRequest ? OPEN_DEMO : OPEN_CONTACT
});

export const closeContact = () => ({
  type: CLOSE_CONTACT
});