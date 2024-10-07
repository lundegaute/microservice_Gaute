var express = require("express");
var router = express.Router();
var db = require("../models");
var ColorService = require("../services/colorService");
var colorService = new ColorService(db);


router.get("/", async (req ,res, next ) => {
    const colors = await colorService.getColors();
    res.render("colors", {colors: colors});
})

router.post("/", async ( req, res, next ) => {
    const color = req.body.color;
    await colorService.addColor(color);

    res.send("Color added to database");
})

router.delete("/", async (req, res, next ) => {
    const colorToDelete = req.body.color;
    await colorService.deleteColor(colorToDelete);

    res.send(`Color ${colorToDelete}, removed from database`)
})


module.exports = router;