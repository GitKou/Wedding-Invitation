"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
var rsvp_1 = require("../models/rsvp");
var RSVPType = new graphql_1.GraphQLObjectType({
    name: 'RSVP',
    fields: function () {
        return {
            guestName: {
                type: graphql_1.GraphQLString
            },
            isPresent: {
                type: graphql_1.GraphQLString
            },
            numberOfAttendance: {
                type: graphql_1.GraphQLInt
            }
        };
    }
});
var QueryFields = {
    rsvp: {
        type: RSVPType,
        args: {
            guestName: {
                type: graphql_1.GraphQLString
            }
        },
        resolve: function (parent, args) {
            return rsvp_1.RSVP.find({ guestName: args.guestName });
        }
    },
    rsvps: {
        type: new graphql_1.GraphQLList(RSVPType),
        args: {
            isPresent: {
                type: graphql_1.GraphQLBoolean
            },
            numberOfAttendance: {
                type: graphql_1.GraphQLInt
            }
        },
        resolve: function (parent, args) {
            return rsvp_1.RSVP.find({ isPresent: args.isPresent, numberOfAttendance: args.numberOfAttendance });
        }
    },
    attendances: {
        type: graphql_1.GraphQLInt,
        args: {
            isPresent: {
                type: graphql_1.GraphQLBoolean
            }
        },
        resolve: function (parent, args) {
            return rsvp_1.RSVP.find({ isPresent: args.isPresent });
        }
    }
};
var MutationFields = {
    addRSVP: {
        type: RSVPType,
        args: {
            guestName: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
            },
            isPresent: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean)
            },
            numberOfAttendance: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)
            }
        },
        resolve: function (parent, args) {
            var rsvp = new rsvp_1.RSVP({
                guestName: args.guestName,
                isPresent: args.isPresent,
                numberOfAttendance: args.numberOfAttendance
            });
            return rsvp.save();
        }
    }
};
exports.RSVPSchema = {
    QueryFields: QueryFields,
    MutationFields: MutationFields,
    AuthorType: RSVPType
};
