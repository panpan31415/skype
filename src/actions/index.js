import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  EDIT_MESSAGE,
  MESSAGE_EDITING
} from "../constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
});

export const editMessage = (message, userId, number) => {
  return { type: EDIT_MESSAGE, payload: { message, userId, number } };
};

export const toggleMessageEdit = ({ editingStatus, activeUserId, number }) => {
  return {
    type: MESSAGE_EDITING,
    payload: {
      editingStatus: editingStatus,
      user_id: activeUserId,
      message_key: number
    }
  };
};
