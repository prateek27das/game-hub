import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24hr
    initialData: { count: platforms.length, results: platforms, next: null },
  });
export default usePlatforms;
