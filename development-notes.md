## Steps taken for setup 

- Create the app using Create React App 
- Install / init AWS amplify using `amplify init` and follow the prompt. This will add the /amplify directory, but only a stripped down version for now. It also updates the `gitignore` and adds an `aws-exports.js` file to the src folder.  
- Add Amplify API, this is the config I had: 

```
> amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: conorWhyteHome
? Choose the default authorization type for the API Amazon Cognito User Pool
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
Successfully added auth resource conorwhytehome0e9f9e24 locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? No
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)

The following types do not have '@auth' enabled. Consider using @auth with @model
	 - Todo
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/directives#auth


GraphQL schema compiled successfully.

Edit your schema at /Users/conorwhyte/Desktop/Projects/conor-whyte-home/amplify/backend/api/conorWhyteHome/schema.graphql or place .graphql files in a directory at /Users/conorwhyte/Desktop/Projects/conor-whyte-home/amplify/backend/api/conorWhyteHome/schema
? Do you want to edit the schema now? Yes
Please edit the file in your editor: /Users/conorwhyte/Desktop/Projects/conor-whyte-home/amplify/backend/api/conorWhyteHome/schema.graphql
Successfully added resource conorWhyteHome locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

- Can then `amplify push` to push it all up to CloudFormation to build. This will give you the option to create the graphQL code. I chose yes in this case, but may go back and strip it down, as it generates all combinations of mutations, queries etc

```
> amplify push

✔ Successfully pulled backend environment cwenv from the cloud.

Current Environment: cwenv

| Category | Resource name          | Operation | Provider plugin   |
| -------- | ---------------------- | --------- | ----------------- |
| Auth     | conorwhytehome0e9f9e24 | Create    | awscloudformation |
| Api      | conorWhyteHome         | Create    | awscloudformation |
? Are you sure you want to continue? Yes

The following types do not have '@auth' enabled. Consider using @auth with @model
	 - Todo
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/directives#auth


GraphQL schema compiled successfully.

Edit your schema at /Users/conorwhyte/Desktop/Projects/conor-whyte-home/amplify/backend/api/conorWhyteHome/schema.graphql or place .graphql files in a directory at /Users/conorwhyte/Desktop/Projects/conor-whyte-home/amplify/backend/api/conorWhyteHome/schema
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target typescript
? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.ts
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Y
es
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
? Enter the file name for the generated code src/API.ts
```

- I chose the default option of the TODO template, with this schema generated in `amplify/backend/api/conorwhyteHome/schema.graphql`

```
type Todo @model {
  id: ID!
  name: String!
  description: String
}
```

Whenever we update this we need to run `amplify api gql-compile`, to generate all the files again needed for pushing to Cloud service. 