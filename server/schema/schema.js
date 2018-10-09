"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
var author_schema_1 = require("./author.schema");
var rsvp_schema_1 = require("./rsvp.schema");
var schemas = [author_schema_1.AuthorSchema, rsvp_schema_1.RSVPSchema];
var QueryFieldArray = schemas.map(function (item) { return item.QueryFields; });
var MutationFieldArray = schemas.map(function (item) { return item.MutationFields; });
var QueryFields = {};
QueryFieldArray.forEach(function (item) { return Object.assign(QueryFields, item); });
var RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: QueryFields
});
var MutationFields = {};
MutationFieldArray.forEach(function (item) { return Object.assign(MutationFields, item); });
var Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: MutationFields
});
exports.Schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
