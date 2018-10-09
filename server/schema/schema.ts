import {
    graphql,
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';
import { AuthorSchema } from './author.schema';
import { RSVPSchema } from './rsvp.schema';


let schemas = [AuthorSchema, RSVPSchema]

let QueryFieldArray = schemas.map(item => item.QueryFields)
let MutationFieldArray = schemas.map(item => item.MutationFields)


let QueryFields = {};
QueryFieldArray.forEach(item => Object.assign(QueryFields, item));

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: QueryFields
})

let MutationFields = {};
MutationFieldArray.forEach(item => Object.assign(MutationFields, item));
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: MutationFields
})

export const Schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})