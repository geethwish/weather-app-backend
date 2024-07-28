import { Request, Response } from "express";
import axios from "axios";

function getNextDate() {
  const today = new Date();
  const lastDate = new Date(today);
  lastDate.setDate(today.getDate() + 14);

  const yyyy = lastDate.getFullYear();
  const mm = String(lastDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const dd = String(lastDate.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}

export const getWeather = async (req: Request, res: Response) => {
  try {
    const location = req.query.location;
    const lastDateOfForecast = getNextDate;
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&dt=${lastDateOfForecast}&days=14`
    );
    res.status(200).json(response.data);
  } catch (err: any) {
    console.log(err.message);

    res.status(500).send(err.message);
  }
};
