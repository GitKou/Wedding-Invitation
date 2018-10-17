import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql';
import { Rsvp } from '../models/rsvp';
import { omitBy, isNil } from 'lodash'


const RSVPType = new GraphQLObjectType({
    name: 'Rsvp',
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
            return Rsvp.find(omitBy(param, isNil));
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
            return Rsvp.find(omitBy(param, isNil));
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
            return Rsvp.countDocuments({ isPresent: args.isPresent });
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
            let rsvp = new Rsvp({
                guestName: args.guestName,
                isPresent: args.isPresent,
                numberOfAttendance: args.numberOfAttendance,
            });
            if (!Rsvp.findOne({ guestName: args.guestName }))
                return rsvp.save();
        }
    }
}

export const RsvpSchema = {
    QueryFields: QueryFields,
    MutationFields: MutationFields,
    AuthorType: RSVPType
}