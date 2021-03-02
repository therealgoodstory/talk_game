const ADD = "ADD";

const initialState = {};

const Count = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        nmb: 123,
      };
    }
    default:
      return state;
  }
};

// export function dizadd () {
//   return {type: DELETE}
// }

// export function getUserFile () {
//   return (dispatch) => {
//     axios('https://jsonplaceholder.typicode.com/users').then(({data}) => {
//     dispatch ({type: GET_USER_FILE, profil: data})
//   })}
// }

export default Count;
