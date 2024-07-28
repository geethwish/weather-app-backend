import request from "supertest";
import app from "../server";

describe("Weather API", () => {
  it("should return weather data for a valid location", async () => {
    const res = await request(app)
      .get("/api/weather")
      .set("Authorization", "Bearer YOUR_TEST_JWT")
      .query({ location: "London" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("location");
  });
});
