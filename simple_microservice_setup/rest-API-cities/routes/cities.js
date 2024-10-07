var express = require("express");
var router = express.Router();
var db = require("../models");
var CityService = require("../services/cityService");
var cityService = new CityService(db);

router.get("/", async (req, res, next ) => {
    const cities = await cityService.getCities();

    res.render("cities", {cities: cities})
})

router.post("/", async( req, res, next) => {
    const city = req.body.city;
    await cityService.addCity(city);

    res.send(`${city} added to database`);
})

router.delete("/", async (req, res, next ) => {
    const cityToDelete = req.body.city;
    await cityService.removeCity(cityToDelete);
    res.send(`${cityToDelete} removed from database`)
})




module.exports = router;