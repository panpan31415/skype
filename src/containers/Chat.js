import React, { Component } from "react";
import { SET_TYPING_VALUE } from "../constants/action-types";
import "./Chats.css";
import store from "../store";
import { toggleMessageEdit } from "../actions";
const Chat = ({ message, number }) => {
  const { text, is_user_msg } = message;
  const { activeUserId, MessageEditing } = store.getState();
  const { editingStatus, user_id, message_key } = MessageEditing;
  const onEdit = () => {
    let _onEdit = false;
    if (activeUserId === user_id && number === message_key) {
      _onEdit = editingStatus;
    }
    return _onEdit;
  };

  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
      <svg
        className={`Chat__close ${onEdit() ? "btn-active" : ""}`}
        onClick={() => {
          MessageToggle({ editingStatus, activeUserId, number, text });
        }}
      >
        <use href={"./symbol-defs.svg#icon-pencil"} title={"Edit message"} />
      </svg>
      {text}
    </span>
  );
};

const MessageToggle = ({ editingStatus, activeUserId, number, text }) => {
  if (editingStatus) {
    store.dispatch(toggleMessageEdit({ editingStatus, activeUserId, number }));
    store.dispatch({ type: SET_TYPING_VALUE, payload: "" });
  } else {
    store.dispatch(toggleMessageEdit({ editingStatus, activeUserId, number }));
    store.dispatch({ type: SET_TYPING_VALUE, payload: text });
  }
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };
  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat
            message={message}
            number={message.number}
            key={message.number}
          />
        ))}
      </div>
    );
  }
}

export default Chats;
