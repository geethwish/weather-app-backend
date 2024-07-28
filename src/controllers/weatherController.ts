import { Request, Response } from "express";
import axios from "axios";

export const getWeather = async (req: Request, res: Response) => {
  try {
    const location = req.query.location;
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
