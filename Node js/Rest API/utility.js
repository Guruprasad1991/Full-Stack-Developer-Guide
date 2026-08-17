const sendJSONResponse = (res, statusCode, payload) => {
  res.statusCode = statusCode;
  res.setHeader = ("Content-type", "application/json");
  res.setHeader = ("Access-Control-Allow-Origin", "*");
  res.setHeader = ("Access-Control-Allow-Methods", "GET");
  res.end(JSON.stringify(payload));
};

const getfilteredParamData = (data, locationType, locationName) => {
  return data.filter((destination) => {
    return (
      destination[locationType].toLowerCase() === locationName.toLowerCase()
    );
  });
};

const getDataByQueryParam = (data, queryParam) => {
  const { continent, country, is_open_to_public } = queryParam;
  if (continent) {
    data = data.filter(
      (destination) =>
        destination.continent.toLowerCase() === continent.toLowerCase(),
    );
  }

  if (country) {
    data = data.filter(
      (destination) =>
        destination.country.toLowerCase() === country.toLowerCase(),
    );
  }

  if (is_open_to_public) {
    data = data.filter(
      (destination) =>
        destination.is_open_to_public ===
        JSON.parse(is_open_to_public.toLowerCase()),
    );
  }
  return data;
};

export { sendJSONResponse, getfilteredParamData, getDataByQueryParam };
