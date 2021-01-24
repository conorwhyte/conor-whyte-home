import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from "@aws-amplify/api-graphql"
import {
    getProject as getProjectQuery,
    listProjects as listProjectQuery,
} from '../graphql/queries';
import { createProject } from '../graphql/mutations';
import { GetProjectQuery, ListProjectsQuery } from '../API';
 
export const listProjects = async () => {
    const result = await API.graphql(graphqlOperation(listProjectQuery)) as GraphQLResult<ListProjectsQuery>;

    return result?.data?.listProjects?.items;
};

export const getProject = async (id: string) => {
    const result = await API.graphql(
        graphqlOperation(getProjectQuery, {id})
    ) as GraphQLResult<GetProjectQuery>;

    return result?.data?.getProject;
};

export const addProject = async (title: string, body: string) => {
    const input = {
        title,
        body,
    };
    
    return await API.graphql(graphqlOperation(createProject, {input}));
}
