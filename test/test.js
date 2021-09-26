var assert = require('assert');
const { hasUncaughtExceptionCaptureCallback } = require('process');
let users= [
    {
      "_id": {
        "$oid": "61468c925b9c23e2fbca48fb"
      },
      "id": {
        "$oid": "61468c925b9c23e2fbca48fa"
      },
      "rol": "Estudiante",
      "nombre": "Claudia Ortiz",
      "carrera": "Ingeniería mecánica",
      "celular": 3123456789,
      "fecha_ingreso": {
        "$date": "2021-09-15T00:00:00Z"
      },
      "createdAt": {
        "$date": "2021-09-15T00:00:00Z"
      },
      "updatedAt": {
        "$date": "2021-09-15T00:00:00Z"
      }
    },
    {
      "_id": {
        "$oid": "614698575b9c23e2fbca4926"
      },
      "id": {
        "$oid": "614698575b9c23e2fbca4924"
      },
      "rol": "Director",
      "nombre": "Claudia Ortiz",
      "carrera": "Ingeniería mecánica",
      "celular": 3123456789,
      "fecha_ingreso": {
        "$date": "2021-09-15T00:00:00Z"
      },
      "createdAt": {
        "$date": "2021-09-15T00:00:00Z"
      },
      "updatedAt": {
        "$date": "2021-09-15T00:00:00Z"
      }
    },
    {
      "_id": {
        "$oid": "614698575b9c23e2fbca4927"
      },
      "id": {
        "$oid": "614698575b9c23e2fbca4925"
      },
      "rol": "Estudiante",
      "nombre": "Pepito perez",
      "carrera": "Ingeniería mecánica",
      "celular": 3198765432,
      "fecha_ingreso": {
        "$date": "2021-09-15T00:00:00Z"
      },
      "createdAt": {
        "$date": "2021-09-15T00:00:00Z"
      },
      "updatedAt": {
        "$date": "2021-09-15T00:00:00Z"
      }
    }
  ]
let projects=[
  {
    "_id": {
      "$oid": "614698155b9c23e2fbca491d"
    },
    "id": {
      "$oid": "614698155b9c23e2fbca491b"
    },
    "name": "proyecto 01",
    "descripcion": "Descripción proyecto 01",
    "presupuesto": 2000000,
    "objetivo_general": "objetivo proyecto 01",
    "objetivos_especificos": [
      "objetivos especificos 1",
      "Objetivo especifico 2"
    ],
    "fecha_inicial": {
      "$date": "2021-09-15T00:00:00Z"
    },
    "fecha_final": {
      "$date": "2022-09-15T00:00:00Z"
    },
    "usuarios": [
      "6142a29e9ccf4eba5637dfaa"
    ],
    "reporte_avance": [
      {
        "id": {
          "$oid": "614698155b9c23e2fbca491c"
        },
        "usuarios_id": [
          "6142a29e9ccf4eba5637dfaa"
        ],
        "reporte": "reporte 1",
        "estado": "inicio",
        "fase": "inicio",
        "createdAt": {
          "$date": "2021-09-15T00:00:00Z"
        },
        "updatedAt": {
          "$date": "2021-09-15T00:00:00Z"
        }
      }
    ],
    "createdAt": {
      "$date": "2021-09-15T00:00:00Z"
    },
    "updatedAt": {
      "$date": "2021-09-15T00:00:00Z"
    },
    "estado": "Terminado"
  },
  {
    "_id": {
      "$oid": "6146984b5b9c23e2fbca4922"
    },
    "id": {
      "$oid": "6146984b5b9c23e2fbca491e"
    },
    "name": "proyecto 02",
    "descripcion": "Descripción proyecto 02",
    "presupuesto": 3000000,
    "objetivo_general": "objetivo proyecto 02",
    "objetivos_especificos": [
      "objetivos especificos 2.0",
      "Objetivo especifico 2.1"
    ],
    "fecha_inicial": {
      "$date": "2021-09-15T00:00:00Z"
    },
    "fecha_final": {
      "$date": "2022-09-15T00:00:00Z"
    },
    "usuarios": [
      "6142a29e9ccf4eba5637dfaa"
    ],
    "reporte_avance": [
      {
        "id": {
          "$oid": "6146984b5b9c23e2fbca491f"
        },
        "usuarios_id": [
          "6142a29e9ccf4eba5637dfaa"
        ],
        "reporte": "reporte 2",
        "estado": "inicio",
        "fase": "inicio",
        "createdAt": {
          "$date": "2021-09-15T00:00:00Z"
        },
        "updatedAt": {
          "$date": "2021-09-15T00:00:00Z"
        }
      }
    ],
    "createdAt": {
      "$date": "2021-09-15T00:00:00Z"
    },
    "updatedAt": {
      "$date": "2021-09-15T00:00:00Z"
    },
    "estado": "Terminado"
  },
  {
    "_id": {
      "$oid": "6146984b5b9c23e2fbca4923"
    },
    "id": {
      "$oid": "6146984b5b9c23e2fbca4920"
    },
    "name": "proyecto 03",
    "descripcion": "Descripción proyecto 03",
    "presupuesto": 2000000,
    "objetivo_general": "objetivo proyecto 03",
    "objetivos_especificos": [
      "objetivos especificos 3.0",
      "Objetivo especifico 3.1"
    ],
    "fecha_inicial": {
      "$date": "2021-09-15T00:00:00Z"
    },
    "fecha_final": {
      "$date": "2022-09-15T00:00:00Z"
    },
    "usuarios": [
      "6142a29e9ccf4eba5637dfaa"
    ],
    "reporte_avance": [
      {
        "id": {
          "$oid": "6146984b5b9c23e2fbca4921"
        },
        "usuarios_id": [
          "6142a29e9ccf4eba5637dfaa"
        ],
        "reporte": "reporte 3",
        "estado": "inicio",
        "fase": "inicio",
        "createdAt": {
          "$date": "2021-09-15T00:00:00Z"
        },
        "updatedAt": {
          "$date": "2021-09-15T00:00:00Z"
        }
      }
    ],
    "createdAt": {
      "$date": "2021-09-15T00:00:00Z"
    },
    "updatedAt": {
      "$date": "2021-09-15T00:00:00Z"
    },
    "estado": "Terminado"
  }
]

describe('Testing array methods in projects',function(){
  describe('#length methods that return the length of an array',function(){
      it('Should return 0 if the array is empty',function(){
          assert.equal(projects.length,3)
      })
  });
});


describe('Testing array methods in users',function(){
    describe('#length methods that return the length of an array',function(){
        it('Should return 0 if the array is empty',function(){
            assert.equal(users.length,3)
        })
    });
});
describe('Testing array methods in users',function(){
    describe("#toUpperCase convert text to upper case",function(){
        it('Should convert the name to upper case',function(){
            assert.equal(users[0].nombre.toUpperCase(),'CLAUDIA ORTIZ')
        });
    });
});
describe('Testing array methods in users',function(){
    describe("#toUpperCase convert text to upper case",function(){
        it('Should convert the name to lower case',function(){
            assert.equal(users[0].nombre.toLowerCase(),'claudia ortiz')
        });
    });
});

var expect=require('chai').expect
var User=require('../userModel.js');
describe('#userModel test their validations',function(){
  it('Should be invalid if name is empty',function(done){
    var user1=new User({
      rol:users[1].rol,
      carrera:users[1].carrera,
      celular:users[1].celular,
      fecha_ingreso:users[1].fecha_ingreso

    })

    user1.validate(function(err){
      expect(err.errors.nombre).to.exist;
      done();
    })
  })
})
describe('test if the number of cellphone matches',function(){
  it('Should be invalid if the number doesnt  match',function(done){
    var user2=new User({
      rol:'Estudiante',
      carrera:'Ingeniería de sistemas',
      celular:321456778,
      fecha_ingreso:users[1].fecha_ingreso

    })

    user2.validate(function(err){
      expect(user2.celular).to.equal(321456778);
      done();
    })
  })
})