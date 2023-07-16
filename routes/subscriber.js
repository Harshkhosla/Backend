const express = require("express");
const Events =require('../modules/eventsModel');
const router = express.Router();

var subscriberController = require("../controllers/subscriber");

// Subscriber Home Route.
// router.get("/", subscriberController.getSubscriberPage);
router.post("/", subscriberController.subscriberController);
// router.post("/", publisherController.publishMQTTMessage);

router.get('/data/:topic', async (req, res) => {
    const ProductId = req.params.ProductId;
    try {
      const events = await Events.find({ ProductId });
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the data' });
    }
  });
module.exports = router;
