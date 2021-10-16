const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = graphql;
const { GraphQLDate } = require("graphql-iso-date");

const ReportType = new GraphQLObjectType({
  name: "report",
  fields: () => ({
    _id: { type: GraphQLString },
    usuarios_id: { type: new GraphQLList(GraphQLString) },
    reporte: { type: GraphQLString },
    estado: { type: GraphQLString },
    fase: { type: GraphQLString },
    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  }),
});

module.exports = ReportType;
