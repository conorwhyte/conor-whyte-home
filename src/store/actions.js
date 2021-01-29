export const ADD_PROJECTS = 'ADD_PROJECTS';
export const ADD_SELECTED_ID = 'ADD_SELECTED_ID';
export const ADD_SEARCH_TEXT = 'ADD_SEARCH_TEXT';
export const OPEN_EDITOR = 'OPEN_EDITOR';
export const CLOSE_EDITOR = 'CLOSE_EDITOR';

export const addProjects = (payload) => ({
    type: ADD_PROJECTS,
    projects: payload,
});

export const addSelectedId = (payload) => ({
    type: ADD_SELECTED_ID,
    id: payload,
});

export const addSearchText = (payload) => ({
    type: ADD_SEARCH_TEXT,
    text: payload,
});

export const openEditor = () => ({
    type: OPEN_EDITOR,
});

export const closeEditor = () => ({
    type: CLOSE_EDITOR,
});