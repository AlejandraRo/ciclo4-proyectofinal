const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;
const { GraphQLDate } = require("graphql-iso-date");

const ReportType = require("./report_type");

const ProjectType = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    presupuesto: { type: GraphQLInt },
    objetivo_general: { type: GraphQLString },
    objetivos_especificos: { type: new GraphQLList(GraphQLString) },
    fecha_inicial: { type: GraphQLDate },
    fecha_final: { type: GraphQLDate },
    estado: { type: GraphQLString },
    reporte_avance: { type: new GraphQLList(ReportType) },
    lideres: { type: new GraphQLList(GraphQLString) },
    estudiantes: { type: new GraphQLList(GraphQLString) },
  }),
});

module.exports = ProjectType;