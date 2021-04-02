// const UPDATE_STATE = "UPDATE_STATE";

const initialState = {
  cards: [
    {
      label: "Карта",
      value: 1,
      icon: "<svg>.....</svg>",
      currency: ["RUB", "UAH", "USD"],
      fees: {
        min: {
          value: {
            USD: 1,
            RUB: 2,
            EUR: 3,
            UAH: 4,
          },
        },
        percent: {
          value: 0,
        },
        fix: {
          value: {
            USD: 100,
            RUB: 2,
            EUR: 3,
            UAH: 4,
          },
          condition: 0,
          amount: 3000,
        },
      },
    },
    {
      label: "Карта2",
      value: 2,
      icon: "<svg>.....</svg>",
      currency: ["UAH", "USD"],
      fees: {
        min: {
          value: {
            USD: 1,
            RUB: 2,
            EUR: 3,
            UAH: 4,
          },
        },
        percent: {
          value: 0,
        },
        fix: {
          value: {
            USD: 100,
            RUB: 2,
            EUR: 3,
            UAH: 4,
          },
          condition: 0,
          amount: 3000,
        },
      },
    },
  ],
};

const UserCard = (state = initialState, action) => {
  switch (action.type) {
    // case UPDATE_STATE: {
    //   return {
    //     ...state,
    //     id: action.new,
    //   };
    // }
    default:
      return state;
  }
};

// export function updateState() {
//   return (dispatch, getState) => {
//     const { id } = getState().sidebar;
//     const result = id * -1;
//     dispatch({ type: UPDATE_STATE, new: result });
//   };
// }

// export function getUserFile () {
//   return (dispatch) => {
//     axios('https://jsonplaceholder.typicode.com/users').then(({data}) => {
//     dispatch ({type: GET_USER_FILE, profil: data})
//   })}
// }

export default UserCard;
