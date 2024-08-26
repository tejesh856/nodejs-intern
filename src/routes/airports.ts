import { Router, Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import { Airport } from "../entity/airport.entity";
import { City } from "../entity/city.entity";
import { Country } from "../entity/country.entity";

const router = Router();

router.get("/:iataCode", async function (req: Request, res: Response) {
  const iataCode = req.params.iataCode;
  const airportRepo = myDataSource.getRepository(Airport);
  const cityRepo = myDataSource.getRepository(City);
  const countryRepo = myDataSource.getRepository(Country);

  try {
    const airports = await airportRepo.find({
      where: { iata_code: iataCode },
    });

    if (airports.length === 0) {
      return res.status(404).json({ message: "Airport not found" });
    }

    const {
      id: airportId,
      name: airportName,
      icao_code,
      iata_code,
      type,
      latitude_deg,
      longitude_deg,
      elevation_ft,
      country_id,
      city_id,
    } = airports[0];

    const cities = await cityRepo.find({
      where: { id: city_id },
    });

    let city = null;
    if (cities.length > 0) {
      const {
        id: cityId,
        name: cityName,
        country_id: cityCountryId,
        is_active,
        lat,
        long,
      } = cities[0];

      city = {
        id: cityId,
        name: cityName.trim(),
        country_id: cityCountryId,
        is_active: is_active.trim(),
        lat: Number(lat),
        long: Number(long),
      };
    }

    const countries = await countryRepo.find({
      where: { id: country_id },
    });

    let country = null;
    if (countries.length > 0) {
      const {
        id: countryId,
        name: countryName,
        country_code_two,
        country_code_three,
        mobile_code,
        continent_id,
      } = countries[0];

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
  } catch (error) {
    console.error("Error fetching airport data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
