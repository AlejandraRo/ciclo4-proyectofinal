const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
} = graphql;
const { GraphQLDate } = require("graphql-iso-date");

const Project = require("../models/project.model");
const User = require("../models/user.model");

const ProjectType = require("./types/project_type");
const UserType = require("./types/user_type");

const report_input = new GraphQLInputObjectType({
  name: "reportInput",
  fields: () => ({
    usuarios_id: { type: new GraphQLList(GraphQLString) },
    reporte: { type: GraphQLString },
    estado: { type: GraphQLString },
    fase: { type: GraphQLString },
    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProject: {
      type: ProjectType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        descripcion: {
          type: new GraphQLNonNull(GraphQLString),
        },
        presupuesto: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        objetivo_general: {
          type: new GraphQLNonNull(GraphQLString),
        },
        objetivos_especificos: {
          type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
        },
        fecha_inicial: {
          type: GraphQLDate,
        },
        fecha_final: {
          type: GraphQLDate,
        },
        estado: {
          type: new GraphQLNonNull(GraphQLString),
        },
        reporte_avance: {
          type: new GraphQLList(report_input),
        },
        lideres: {
          type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
        },
        estudiantes: {
          type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
        },
      },
      resolve(parent, args) {
        let project = new Project({
          name: args.name,
          descripcion: args.descripcion,
          presupuesto: args.presupuesto,
          objetivo_general: args.objetivo_general,
          objetivos_especificos: args.objetivos_especificos,
          fecha_inicial: args.fecha_inicial,
          fecha_final: args.fecha_final,
          estado: args.estado,
          reporte_avance: args.reporte_avance,
          lideres: args.lideres,
          estudiantes: args.estudiantes,
        });
        return project.save();
      },
    },
    updateProject: {
      type: ProjectType,
      args:{
        _id: {
          type: GraphQLString,
        },
        name: {
          type: GraphQLString,
        },
        descripcion: {
          type: GraphQLString,
        },
        presupuesto: {
          type: GraphQLInt,
        },
        objetivo_general: {
          type: GraphQLString,
        },
        objetivos_especificos: {
          type: new GraphQLList(GraphQLString),
        },
        fecha_inicial: {
          type: GraphQLDate
        },
        fecha_final: {
          type: GraphQLDate
        },
        estado: {
          type: GraphQLString,
        },
        reporte_avance: {
          type: new GraphQLList(report_input),
        },
        lideres: {
          type: new GraphQLList(GraphQLString),
        },
        estudiantes: {
          type: new GraphQLList(GraphQLString),
        },
      },
      resolve(parent, args) {
        return Project.findOneAndUpdate({_id: args._id}, {
          name: args.name,
          descripcion: args.descripcion,
          presupuesto: args.presupuesto,
          objetivo_general: args.objetivo_general,
          objetivos_especificos: args.objetivos_especificos,
          fecha_inicial: args.fecha_inicial,
          fecha_final: args.fecha_final,
          estado: args.estado,
          reporte_avance: args.reporte_avance,
          lideres: args.lideres,
          estudiantes: args.estudiantes,
        })
      }
    },
    deleteProject: {
      type: ProjectType,
      args: {
        _id: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        return Project.findOneAndDelete({_id: args._id})
      }
    },
    addUser: {
      type: UserType,
      args: {
        rol: {
          type: new GraphQLNonNull(GraphQLString)
        },
        nombre: {
          type: new GraphQLNonNull(GraphQLString)
        },
        carrera: {
          type: new GraphQLNonNull(GraphQLString)
        },
        celular:{ 
          type: new GraphQLNonNull(GraphQLString)
        },
        fecha_ingreso: {
          type: GraphQLDate
        },
        createdAt: {
          type: GraphQLDate
        },
        updatedAt: {
          type: GraphQLDate
        },
        username: {
          type: new GraphQLNonNull(GraphQLString)
        },
        password: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        let user = new User({
          rol: args.rol,
          nombre: args.nombre,
          carrera: args.carrera,
          celular: args.celular,
          fecha_ingreso: args.fecha_ingreso,
          createdAt: args.createdAt,
          updatedAt: args.updatedAt,
          username: args.username,
          password: args.password
        });
        return user.save();
      }
    },
    updateUser: {
      type:UserType,
      args: {
        _id: {
          type: GraphQLString
        },
        rol: {
          type: GraphQLString
        },
        nombre: {
          type: GraphQLString
        },
        carrera: {
          type: GraphQLString
        },
        celular:{ 
          type: GraphQLInt
        },
        fecha_ingreso: {
          type: GraphQLDate
        },
        createdAt: {
          type: GraphQLDate
        },
        updatedAt: {
          type: GraphQLDate
        },
        username: {
          type: GraphQLString
        },
        password: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        return User.findOneAndUpdate({_id: args._id},{
          rol: args.rol,
          nombre: args.nombre,
          carrera: args.carrera,
          celular: args.celular,
          fecha_ingreso: args.fecha_ingreso,
          createdAt: args.createdAt,
          updatedAt: args.updatedAt,
          username: args.username,
          password: args.password
        })
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        _id: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        return User.findOneAndDelete({_id: args._id})
      }
    }
  },
});

module.exports = Mutation;

//https://javascript.plainenglish.io/build-a-full-stack-graphql-application-with-react-express-6a3d00b05629