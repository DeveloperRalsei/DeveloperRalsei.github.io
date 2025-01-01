let accessToken: string;
let tokenExpiryTime: number;

const data = new URLSearchParams({
  client_id: import.meta.env.CLIENT_ID,
  client_secret: import.meta.env.CLIENT_KEY,
  grant_type: "client_credentials",
  scope: "public",
}).toString();

async function refreshToken() {
  try {
    const tokenResponse = await fetch("https://osu.ppy.sh/oauth/token", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });

    const fetchedData = await tokenResponse.json();

    const { access_token, expires_in } = fetchedData;
    accessToken = access_token;
    tokenExpiryTime = Date.now() + expires_in * 1000;

    return access_token;
  } catch (error: any) {
    console.error(
      "Error refreshing token:",
      error.response ? error.response.data : error.message,
    );
    throw new Error("Error refreshing Token");
  }
}

async function getAccessToken() {
  if (!accessToken || (tokenExpiryTime && Date.now() >= tokenExpiryTime)) {
    return await refreshToken();
  }
  return accessToken;
}

const baseUrl = "https://osu.ppy.sh/api/v2";

export const getMyOsuData = async () => {
  try {
    const accessToken = await getAccessToken();

    const data = await fetch(
      `https://omsu-api.onrender.com/api/search-user?q=rizayldrm32`,
    );

    return await data.json();
  } catch (err) {
    throw new Error("Something went wrong while loading userData: \n" + err);
    return null;
  }
};
