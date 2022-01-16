const SAVE_PRESET_IDX = "SAVE_PRESET_IDX";

const data = {
  selectPresets: 0,
  // gameProgress: {

  // }
};

const GameState = (state = data, action) => {
  switch (action.type) {
    case SAVE_PRESET_IDX: {
      return {
        ...state,
        selectPresets: action.idx,
      };
    }
    default:
      return state;
  }
};

export function savePreset(number) {
  return { type: SAVE_PRESET_IDX, idx: number }
}

export default GameState;
