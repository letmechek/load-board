const Truck = require('../../models/truck')

module.exports = {
    create,
    show,
    
}

async function create(req,res){
    const truck = await new Truck(req.body)
    await truck.save()
    res.json(truck)
}

async function show() {

}