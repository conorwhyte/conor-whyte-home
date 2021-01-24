export const ADD_PROJECTS = 'ADD_PROJECTS';
export const ADD_SELECTED_ID = 'ADD_SELECTED_ID';

export const addProjects = (payload) => ({
    type: ADD_PROJECTS,
    projects: payload,
});

export const addSelectedId = (payload) => ({
    type: ADD_SELECTED_ID,
    id: payload,
});