import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import {
  sendJSONResponse,
  getfilteredParamData,
  getDataByQueryParam,
} from "./utility.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destination = await getDataFromDB();

  const urlObj = new URL(req.url, `http://${req.headers.host}`);

  const queryObj = Object.fromEntries(urlObj.searchParams);
  console.log(queryObj);

  const Header = ("Content-type", "application/json");
  if (urlObj.pathname === "/api" && req.method === "GET") {
    let filterData = getDataByQueryParam(destination, queryObj);
    sendJSONResponse(res, 200, filterData);
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop();
    const filterData = getfilteredParamData(
      destination,
      "continent",
      continent,
    );
    sendJSONResponse(res, 200, filterData);
  } else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    const filterData = getfilteredParamData(destination, "country", country);
    sendJSONResponse(res, 200, filterData);
  } else {
    sendJSONResponse(res, 404, {
      error: "not found",
      message: "requested route does not exist",
    });
  }
});

server.listen(PORT, () => console.log(`server is running at ${PORT}`));
