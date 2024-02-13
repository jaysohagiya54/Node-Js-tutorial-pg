const express = require("express");
const {getContact,createContact,updateContact,deleteContact,getContactById} = require("../controllers/contactController")

const router  = express.Router();

router.route("/").get(getContact).post(createContact)
router.route("/:id").get(getContactById).put(updateContact).delete(deleteContact)


module.exports = router;