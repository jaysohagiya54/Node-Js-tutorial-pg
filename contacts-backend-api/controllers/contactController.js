const getContact = ((req,res) => {
    res.status(200).json({message:"Get All Contacts"});
})
const createContact = ((req,res)=>{
    if(!req.body) {console.log("No data found")};

    console.log("The req body is ",req.body);
    res.status(201).json({message:"Created Contact"});
})
const updateContact = ((req,res)=>{
    res.status(200).json({message:`Update Contact for id:${req.params.id}`});
})
const deleteContact = ((req,res)=>{
    res.status(200).json({message:`Delete Contact for id:${req.params.id}`});
})
const getContactById = ((req,res)=>{
    res.status(200).json({message:`Get Contact for id:${req.params.id}`});
})


module.exports = {getContact,createContact,updateContact,deleteContact,getContactById}