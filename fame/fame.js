export const getRemotePondOfFame = async () => {
  const response = await fetch("https://todepond-get_pond_of_fame.web.val.run");
  return await response.text();
};

export const setRemotePondOfFame = async ({ pondOfFame, password }) => {
  // Access to fetch at 'https://todepond-set_pond_of_fame.web.val.run/' from origin 'http://localhost:4507' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
  const response = await fetch(
    "https://todepond-set_pond_of_fame.web.val.run",
    {
      // method: "POST",
      body: {
        password,
        pondOfFame,
      },
    }
  );
  console.log(await response.text());
};
