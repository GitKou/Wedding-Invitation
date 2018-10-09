import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql';
import { RSVP } from '../models/rsvp';



const RSVPType = new GraphQLObjectType({
    name: 'RSVP',
    fields: () => {
        return {
            guestName: {
                type: GraphQLString
            },
            isPresent: {
                type: GraphQLString
            },
            numberOfAttendance: {
                type: GraphQLInt

            }
        }
    }
})

let QueryFields = {
    rsvp: {
        type: RSVPType,
        args: {
            guestName: {
                type: GraphQLString
            }
        },
        resolve(parent, args) {
            return RSVP.find({ guestName: args.guestName });
        }
    },
    rsvps: {
        type: new GraphQLList(RSVPType),
        args: {
            isPresent: {
                type: GraphQLBoolean
            },
            numberOfAttendance: {
                type: GraphQLInt
            }
        },
        resolve(parent, args) {
            return RSVP.find({ isPresent: args.isPresent, numberOfAttendance: args.numberOfAttendance })
        }
    },
    attendances: {
        type: GraphQLInt,
        args: {
            isPresent: {
                type: GraphQLBoolean
            }
        },
        resolve(parent, args) {
            return RSVP.find({ isPresent: args.isPresent });
        }
    }
}

let MutationFields = {
    addRSVP: {
        type: RSVPType,
        args: {
            guestName: {
                type: new GraphQLNonNull(GraphQLString)
            },
            isPresent: {
                type: new GraphQLNonNull(GraphQLBoolean)
            },
            numberOfAttendance: {
                type: new GraphQLNonNull(GraphQLInt)
            }
        },
        resolve(parent, args) {
            let rsvp = new RSVP({
                guestName: args.guestName,
                isPresent: args.isPresent,
                numberOfAttendance: args.numberOfAttendance,
            });
            return rsvp.save();
        }
    }
}

export const RSVPSchema = {
    QueryFields: QueryFields,
    MutationFields: MutationFields,
    AuthorType: RSVPType
}