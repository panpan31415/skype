import React from "react";
import Chats from "../containers/Chat";
import store from "../store/";
import Header from "./Header";
import MessageInput from "../containers/MessageInput";
import "./ChatWindow";
import _ from "lodash";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeMsgs = state.messages[activeUserId];
  const activeUser = state.contacts[activeUserId];
  const typing = state.typing;
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};
export default ChatWindow;
