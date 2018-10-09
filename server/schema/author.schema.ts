import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
    GraphQLID
} from 'graphql';
import { Author } from '../models/author';

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => {
        return {
            id: {
                type: GraphQLID
            },
            name: {
                type: GraphQLString
            },
            age: {
                type: GraphQLInt

            }
        }
    }
})

let QueryFields = {
    author: {
        type: AuthorType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Author.findById(args.id)
        }
    },
    authors: {
        type: new GraphQLList(AuthorType),
        args: {
            age: {
                type: GraphQLInt
            }
        },
        resolve(parent, args) {
            return Author.find({})
        }
    }
}

let MutationFields = {
    addAuthor: {
        type: AuthorType,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            age: {
                type: new GraphQLNonNull(GraphQLInt)
            },
        },
        resolve(parent, args) {
            let author = new Author({
                name: args.name,
                age: args.age
            });
            return author.save();
        }
    }
}

export const AuthorSchema = {
    QueryFields: QueryFields,
    MutationFields: MutationFields,
    AuthorType: AuthorType
}