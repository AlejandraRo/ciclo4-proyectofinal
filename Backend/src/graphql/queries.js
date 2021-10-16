const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLString } = graphql;

const User = require("../models/user.model");
const Project = require("../models/project.model");

const UserType = require("./types/user_type");
const ProjectType = require("./types/project_type");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      },
    },
    user: {
      type: UserType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return User.findById(args._id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find({});
      },
    },
    project: {
      type: ProjectType,
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return Project.findById(args._id);
      },
    },
  }),
});

module.exports = RootQuery;
