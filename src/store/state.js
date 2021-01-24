import { ADD_PROJECTS } from './actions';

export const initialState = {
    list: [],
    selectedId: null,
    isEditing: false,
    searchText: '',
};

export function Reducer(state, action) {
  switch (action.type) {
    case ADD_PROJECTS:
      return {
            ...state,
            list: action.projects,
       };
    default:
      throw new Error();
  }
}