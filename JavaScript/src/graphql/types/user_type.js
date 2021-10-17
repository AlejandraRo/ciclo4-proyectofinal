const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const { GraphQLDate } = require("graphql-iso-date");

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    _id: { type: GraphQLString },
    rol: { type: GraphQLString },
    nombre: { type: GraphQLString },
    carrera: { type: GraphQLString },
    celular: { type: GraphQLString },
    fecha_ingreso: { type: GraphQLDate },
    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

module.exports = UserType;