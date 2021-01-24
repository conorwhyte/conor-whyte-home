import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from "@aws-amplify/api-graphql"
import {
    getProject as getProjectQuery,
    listProjects as listProjectQuery,
} from '../graphql/queries';
import { createProject } from '../graphql/mutations';
import { GetProjectQuery, ListProjectsQuery } from '../API';
 
const callEndpoint = async (query: any, variables: any) => {
    return await API.graphql(graphqlOperation(query, variables));
};

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

export const addProject = async () => {
    const createEstimateInput = {
      name: 'Conor Test',
      date: '10th November',
      description: 'This is a test',
    };
    
    return await callEndpoint(createProject, {input: createEstimateInput});
}
