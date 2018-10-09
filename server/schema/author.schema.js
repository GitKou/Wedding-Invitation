"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
var author_1 = require("../models/author");
var AuthorType = new graphql_1.GraphQLObjectType({
    name: 'Author',
    fields: function () {
        return {
            id: {
                type: graphql_1.GraphQLID
            },
            name: {
                type: graphql_1.GraphQLString
            },
            age: {
                type: graphql_1.GraphQLInt
            }
        };
    }
});
var QueryFields = {
    author: {
        type: AuthorType,
        args: {
            id: {
                type: graphql_1.GraphQLID
            }
        },
        resolve: function (parent, args) {
            return author_1.Author.findById(args.id);
        }
    },
    authors: {
        type: new graphql_1.GraphQLList(AuthorType),
        args: {
            age: {
                type: graphql_1.GraphQLInt
            }
        },
        resolve: function (parent, args) {
            return author_1.Author.find({});
        }
    }
};
var MutationFields = {
    addAuthor: {
        type: AuthorType,
        args: {
            name: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
            },
            age: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
            }
        },
        resolve: function (parent, args) {
            var author = new author_1.Author({
                name: args.name,
                age: args.age
            });
            return author.save();
        }
    }
};
exports.AuthorSchema = {
    QueryFields: QueryFields,
    MutationFields: MutationFields,
    AuthorType: AuthorType
};
