const ADD_DATA = "ADD_DATA"

const initialState = {
  rates: {
    RUB: {
      USD: 70,
      EUR: 30,
      UAH: 40,
      RUB: 1,
    },
    USD: {
      USD: 1,
      EUR: 10,
      UAH: 10,
      RUB: 70,
    },
    UAH: {
      USD: 10,
      EUR: 30,
      UAH: 1,
      RUB: 70,
    },
    EUR: {
      USD: 2,
      EUR: 1,
      UAH: 40,
      RUB: 70,
    },
  },
  data: "00.00.00",
};

const ExchangeRates = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA: {
      return {
        ...state,
        data: action.new,
      };
    }
    default:
      return state;
  }
};

export function addData() {
  return (dispatch) => {
    const result = new Date()
    dispatch({ type: ADD_DATA, new: result });
  };
}

// export function getUserFile () {
//   return (dispatch) => {
//     axios('https://jsonplaceholder.typicode.com/users').then(({data}) => {
//     dispatch ({type: GET_USER_FILE, profil: data})
//   })}
// }

export default ExchangeRates;
