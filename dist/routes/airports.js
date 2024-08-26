"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_data_source_1 = require("../app-data-source");
const airport_entity_1 = require("../entity/airport.entity");
const city_entity_1 = require("../entity/city.entity");
const country_entity_1 = require("../entity/country.entity");
const router = (0, express_1.Router)();
router.get("/:iataCode", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const iataCode = req.params.iataCode;
        const airportRepo = app_data_source_1.myDataSource.getRepository(airport_entity_1.Airport);
        const cityRepo = app_data_source_1.myDataSource.getRepository(city_entity_1.City);
        const countryRepo = app_data_source_1.myDataSource.getRepository(country_entity_1.Country);
        try {
            const airports = yield airportRepo.find({
                where: { iata_code: iataCode },
            });
            if (airports.length === 0) {
                return res.status(404).json({ message: "Airport not found" });
            }
            const { id: airportId, name: airportName, icao_code, iata_code, type, latitude_deg, longitude_deg, elevation_ft, country_id, city_id, } = airports[0];
            const cities = yield cityRepo.find({
                where: { id: city_id },
            });
            let city = null;
            if (cities.length > 0) {
                const { id: cityId, name: cityName, country_id: cityCountryId, is_active, lat, long, } = cities[0];
                city = {
                    id: cityId,
                    name: cityName.trim(),
                    country_id: cityCountryId,
                    is_active: is_active.trim(),
                    lat: Number(lat),
                    long: Number(long),
                };
            }
            const countries = yield countryRepo.find({
                where: { id: country_id },
            });
            let country = null;
            if (countries.length > 0) {
                const { id: countryId, name: countryName, country_code_two, country_code_three, mobile_code, continent_id, } = countries[0];
                country = {
                    id: countryId,
                    name: countryName.trim(),
                    country_code_two: country_code_two.trim(),
                    country_code_three: country_code_three.trim(),
                    mobile_code: mobile_code,
                    continent_id,
                };
            }
            res.json({
                airport: {
                    id: airportId,
                    icao_code: icao_code.trim(),
                    iata_code: iata_code.trim(),
                    name: airportName.trim(),
                    type: type.trim(),
                    latitude_deg: Number(latitude_deg),
                    longitude_deg: Number(longitude_deg),
                    elevation_ft: Number(elevation_ft),
                    address: {
                        city: city,
                        country: country,
                    },
                },
            });
        }
        catch (error) {
            console.error("Error fetching airport data:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });
});
exports.default = router;
