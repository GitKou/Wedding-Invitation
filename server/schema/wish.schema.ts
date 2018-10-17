import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLFieldConfig,
} from 'graphql';
import { omitBy, isNil } from 'lodash'
import { Wish } from '../models/wish';


const WishType = new GraphQLObjectType({
    name: 'Wish',
    fields: () => {
        return {
            guestName: {
                type: GraphQLString
            },
            message: {
                type: GraphQLString
            }
        }
    }
})

let QueryFields = {
    wishes: {
        type: new GraphQLList(WishType),
        args: {
            guestName: {
                type: GraphQLString
            },
            message: {
                type: GraphQLString,
            }
        },
        resolve(parent, args) {
            let param = {
                guestName: args.guestName,
                message: args.message
            };
            return Wish.find(omitBy(param, isNil));
        }
    }
}

let MutationFields = {
    addWish: {
        type: WishType,
        args: {
            guestName: {
                type: new GraphQLNonNull(GraphQLString)
            },
            message: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve(parent, args) {
            let wish = new Wish({
                guestName: args.guestName,
                message: args.message,
            });
            return wish.save();
        }
    }
}

export const WishSchema = {
    QueryFields: QueryFields,
    MutationFields: MutationFields,
    AuthorType: WishType
}