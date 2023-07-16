// routes.js
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const UserSignin = require('../modules/UserSignin');
const fetchUser = require('../middleware/fetchuser');

// Store data
router.post('/data', fetchUser, [
  body('value', 'Value is required').isNumeric(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { value } = req.body;
    const userID = req.user.id;

    // Find the user by ID
    const user = await UserSignin.findById(userID);

    // Create a new product detail object with the value field
    const newProductDetail = { value };

    // Push the new product detail object to the productDetails array
    user.productDetails.push(newProductDetail);

    // Save the updated user document
    await user.save();

    res.json(newProductDetail);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

// Retrieve data for graph visualization
router.get('/data', fetchUser, async (req, res) => {
  try {
    const userID = req.user.id;

    // Find the user by ID
    const user = await UserSignin.findById(userID);

    // Retrieve the productDetails array from the user document
    const productDetails = user.productDetails;

    res.json(productDetails);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
