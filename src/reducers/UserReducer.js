export const initialState = {
  name: '',
  email: '',
  useType: '',
  id: '',
  password: '',
  // exercises: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setName':
      return {...state, name: action.payload.name};
      break;
    case 'setEmail':
      return {...state, email: action.payload.email};
      break;
    case 'setUseType':
      return {...state, useType: action.payload.useType};
      break;
    case 'setId':
      return {...state, id: action.payload.id};
      break;
    case 'setPassword':
      return {...state, password: action.payload.password};
      break;
    default:
      return state;
  }
};
