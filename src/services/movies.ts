// Constants
import { ROUTER_API_URL } from "@/constants";

// Types
import { MovieInfoData } from "@/types";

// Utils
import { getErrorMessage } from "@/utils";

export const getMovies = async (): Promise<MovieInfoData[] | undefined> => {
  const res = await fetch(`${ROUTER_API_URL}/movies`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  if (!res.ok) throw new Error(getErrorMessage(res.status, res.statusText));

  return res.json();
};
