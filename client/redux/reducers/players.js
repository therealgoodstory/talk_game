const UPDATE_STATE = "UPDATE_STATE";

const data = {
  players: [
    'Артём',
    'Андрей',
    'Дима',
    'Виталий',
    'Я забыл',
  ],
};

const Test = (state = data, action) => {
  switch (action.type) {
    case UPDATE_STATE: {
      return {
        ...state,
        id: action.new,
      };
    }
    default:
      return state;
  }
};

export function updateState() {
  return (dispatch, getState) => {
    const { id } = getState().sidebar;
    const result = id * -1;
    dispatch({ type: UPDATE_STATE, new: result });
  };
}

export default Test;
