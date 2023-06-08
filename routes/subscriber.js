const express = require("express");
const router = express.Router();

var subscriberController = require("../controllers/subscriber");

// Subscriber Home Route.
// router.get("/", subscriberController.getSubscriberPage);
router.post("/", subscriberController.subscriberController);

module.exports = router;
