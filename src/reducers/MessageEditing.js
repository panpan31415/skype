import { MESSAGE_EDITING } from "../constants/action-types";
export default (
  state = {
    editingStatus: false,
    user_id: null,
    message_key: null
  },
  action
) => {
  switch (action.type) {
    case MESSAGE_EDITING: {
      const { editingStatus, user_id, message_key } = action.payload;

      return {
        editingStatus: !editingStatus,
        user_id: user_id,
        message_key: message_key
      };
    }
    default: {
      return state;
    }
  }
};
