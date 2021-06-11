import { request, gql, GraphQLClient, rawRequest } from "graphql-request";

const getGraphqlClient = (context) =>{
    let headers = {};
    if (context?.req) {
      //typeof window === "undefined"
      headers = {
        cookie: context.req ? context.req.headers.cookie : undefined,
      };
    }

    const graphQLClient = new GraphQLClient(
      process.env.GRAPHQL_URL || '/graphql',
      {
        credentials: "include",
        mode: "cors",
        headers,
      }
    );

    return graphQLClient
}

export default  getGraphqlClient