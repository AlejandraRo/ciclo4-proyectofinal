const router = require("express").Router();
const Project = require("../models/project.model");

router.route("/new").post((req, res) => {
  const newProject = new Project(req.body);
  newProject
    .save()
    .then((project) => res.json(project))
    .catch((err) =>
      res.status(400).json("No ha sido posible crear el proyecto! " + err)
    );
});

router.route("/").get((req, res) => {
  Project.find()
    .then((allProjects) => res.json(allProjects))
    .catch((err) =>
      res.status(400).json("No ha sido posible encontrar los proyectos! " + err)
    );
});

router.route("/delete/:id").delete((req, res) => {
  Project.deleteOne({ _id: req.params.id })
    .then((success) => res.json("Proyecto eliminado con exito!."))
    .catch((err) =>
      res.status(400).json("No ha sido posible eliminar el proyecto! " + err)
    );
});

router.route("/update/:id").put((req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body)
    .then((project) => res.json("El proyecto ha sido actualizado."))
    .catch((err) =>
      res.status(400).json("No se ha podido actualizar el proyecto! " + err)
    );
});

module.exports = router;
