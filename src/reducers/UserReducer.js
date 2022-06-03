export const initialState = {
  // name: '',
  exercises: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setExercises':
      return {...state, exercises: action.payload.exercises};
      break;
    default:
      return state;
  }
};
