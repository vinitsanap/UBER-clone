const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/auth.middleware");
const mapsController = require("../controller/maps.controller");
const { query } = require("express-validator");

router.get(
    "/get-coordinates",
    query("address").isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapsController.getCoordinates
);

module.exports = router;