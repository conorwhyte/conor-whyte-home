import { 
    ADD_PROJECTS, 
    ADD_SELECTED_ID,
    ADD_SEARCH_TEXT,
    CLOSE_EDITOR,
    OPEN_EDITOR, 
} from './actions';

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
    case ADD_SEARCH_TEXT:
        return {
            ...state,
            searchText: action.text,
        };
    case OPEN_EDITOR: 
        return {
            ...state,
            isEditing: true,
        };
    case CLOSE_EDITOR: 
        return {
            ...state,
            isEditing: false,
        };
    default:
      throw new Error('Unknown action');
  }
}