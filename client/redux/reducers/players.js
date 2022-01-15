const ADD_PLAYERS = "ADD_PLAYERS";

const data = {
  players: ['asdasd'],
};

const PlayersData = (state = data, action) => {
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
    const { players } = getState().players
    const oldPlayers = players.unshift(name)
    // const reasdasdasdasdasdsult =  oldPlayers.push(name)
    console.log(typeof(oldPlayers))
    dispatch({ type: ADD_PLAYERS, newData: [] })
  };
}

export default PlayersData;
