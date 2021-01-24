export const ADD_PROJECTS = 'ADD_PROJECTS';

export const addProjects = (payload) => ({
    type: ADD_PROJECTS,
    projects: payload,
});