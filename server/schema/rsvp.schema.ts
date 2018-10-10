import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql';
import { RSVP } from '../models/rsvp';
import { omitBy, isNil } from 'lodash'


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
            },
            isPresent: {
                type: GraphQLBoolean

            },
            numberOfAttendance: {
                type: GraphQLInt
            }
        },
        resolve(parent, args) {
            let param = {
                guestName: args.guestName,
                isPresent: args.isPresent,
                numberOfAttendance: args.numberOfAttendance
            };
            return RSVP.find(omitBy(param, isNil));
        }
    },
    rsvps: {
        type: new GraphQLList(RSVPType),
        args: {
            guestName: {
                type: GraphQLString
            },
            isPresent: {
                type: GraphQLBoolean

            },
            numberOfAttendance: {
                type: GraphQLInt
            }
        },
        resolve(parent, args) {
            let param = {
                guestName: args.guestName,
                isPresent: args.isPresent,
                numberOfAttendance: args.numberOfAttendance
            };
            return RSVP.find(omitBy(param, isNil));
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
            return RSVP.countDocuments({ isPresent: args.isPresent });
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
            if (RSVP.findOne({ guestName: args.guestName }))
                return rsvp.save();
        }
    }
}

export const RSVPSchema = {
    QueryFields: QueryFields,
    MutationFields: MutationFields,
    AuthorType: RSVPType
}