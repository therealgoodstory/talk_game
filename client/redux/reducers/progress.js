const ADD_PLAYERS = "ADD_PLAYERS";

const data = {
  players: ['asdasd','asdasd','asdasdas','asdasdasd'],
};

const PlayersProfress = (state = data, action) => {
  switch (action.type) {
    case ADD_PLAYERS: {
      return {
        ...state,
        players: action.newData,
      };
    }
    default:
      return state;
  }
};

export function addPlayers(name) {
  return (dispatch, getState) => {
    let { players } = getState().players
    dispatch({ type: ADD_PLAYERS, newData: [...players, name] })
  };
}

export function deletePlayers(idx) {
  return (dispatch, getState) => {
    let { players } = getState().players
    const result = players.filter((_, id) => id !== idx)
    console.log(idx)
    dispatch({ type: ADD_PLAYERS, newData: result })
  };
}

export default PlayersProfress;
