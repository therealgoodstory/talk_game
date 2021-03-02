const UPDATE_STATE = "UPDATE_STATE";

const initialState = {
  id: -1,
};

const SideBar = (state = initialState, action) => {
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

// export function getUserFile () {
//   return (dispatch) => {
//     axios('https://jsonplaceholder.typicode.com/users').then(({data}) => {
//     dispatch ({type: GET_USER_FILE, profil: data})
//   })}
// }

export default SideBar;
