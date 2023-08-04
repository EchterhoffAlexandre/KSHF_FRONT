import mem from "mem";
import { axiosPublic } from "./axiosPublic";

const refreshTokenFunction = async () => {
  try {
    let session = JSON.parse(localStorage.getItem("session"));
    const response = await axiosPublic.post("/token/refresh", {
      refreshToken: session?.refreshToken,
    });

    session = response.data;

    if (!session?.accessToken) {
      localStorage.removeItem("session");
    }

    localStorage.setItem("session", JSON.stringify(session));

    return session;
  } catch (error) {
    localStorage.removeItem("session");
  }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFunction, {
  maxAge,
});
