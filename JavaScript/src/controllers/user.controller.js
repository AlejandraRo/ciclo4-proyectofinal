const router = require('express').Router()
const User = require('../models/user.model')

router.route('/new').post((req,res)=>{
    const newUser= new User(req.body)
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("No ha sido posible crear el usuario! " + err))
})

router.route('/').get((req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json('No ha sido posible encontrar los usuarios! ' + err))
})

router.route('/delete/:id').delete((req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(success => res.json('Usuario eliminado con exito!.'))
        .catch(err => res.status(400).json('No ha sido posible eliminar el usuario! ' + err))
})

router.route('/update/:id').put((req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json('El usuario ha sido actualizado.'))
        .catch(err => res.status(400).json('No se ha podido actualizar el usuario! ' + err))
})

router.route('/students').get((req, res) => {
    User.find({rol: "Estudiante"})
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json('No ha sido posible encontrar los usuarios! ' + err))
})

router.route('/leaders').get((req, res) => {
    User.find({rol: {$ne: "Estudiante"}})
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json('No ha sido posible encontrar los usuarios! ' + err))
})

module.exports = router