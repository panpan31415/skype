import React from "react";
import store from "../store";
import {
  setTypingValue,
  sendMessage,
  editMessage,
  toggleMessageEdit
} from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
  const state = store.getState();
  const { editingStatus, user_id, message_key } = state.MessageEditing;
  const { activeUserId } = state;
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
    if (activeUserId === user_id && editingStatus) {
      store.dispatch(editMessage(e.target.value, activeUserId, message_key));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (activeUserId === user_id && editingStatus) {
      store.dispatch(toggleMessageEdit(editingStatus, user_id, message_key));
    } else {
      const { typing, activeUserId } = state;
      store.dispatch(sendMessage(typing, activeUserId));
    }
    store.dispatch(setTypingValue(""));
  };
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
