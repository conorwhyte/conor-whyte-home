import { ADD_PROJECTS, ADD_SELECTED_ID } from './actions';

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
    case ADD_SELECTED_ID:
        return {
            ...state,
            selectedId: action.id,
        };
    default:
      throw new Error('Unknown action');
  }
}