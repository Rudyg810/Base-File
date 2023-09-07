const slugify = require("slugify")
const eventschema = require("../mongomodels/eventschema")
const fs = require("fs")
const formidable_express = require("express-formidable")

const createevent = async(req,res) =>{
try{
    console.log("1")

    //formidable ka istemaal to get working url photos not just any strings
    const { heading,slug,  time, description, byadmin} = req.fields
    console.log("2")
    const {photo} = req.files
    switch(true){
        case !heading:
            return res.status(201).send({ error: "heading is required"})
        case !description:
            return res.status(201).send({ error: "description is required"}) 
        case !time:
            return res.status(201).send({ error: "time is required"}) 
        case !byadmin:
            return res.status(201).send({ error: "byadmin is required"}) 
        case photo && photo.size > 1000000:
            return res.status(201).send({ error: "photo is required"}) 
        }
    console.log("1")
        const event = new eventschema({ ...req.fields,  slug: slugify(heading) })
        console.log("1")

        if(photo){
            
            event.photo.data = fs.readFileSync(photo.path)
            event.photo.contentType = photo.type
        }
        event.save()
        console.log(3)

        res.status(200).send({
            success: true,
            event, 
            message:"event created"
        })
}
catch(error){
    res.status(201).send({
        success: false,
        error,
        message:"Error in event",
        
    })
}
}

const eventcontroller = async (req, res) => {
    try {
      const event = await eventschema.findOne({ slug: req.params.slug });
  
      res.status(200).send({
        success: true,
        message: "Get SIngle event SUccessfully",
        event
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single event",
      });
    }
  };
  const alleventcontroller = async (req, res) => {
    try {
      const event = await eventschema.find({});
  
      res.status(200).send({
        success: true,
        message: "Get  event SUccessfully",
        event
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting  event",
      });
    }
  };

  module.exports = {
    createevent, alleventcontroller, eventcontroller
  }