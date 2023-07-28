import { useCallback, useContext } from "react";
import { AppContext } from "../utils/context";
import { useWrappedRequest } from "./useWrappedRequest.js";
import { rTechFetch } from "../utils/fetch";

/*
this is the fun part!
useCustomFetch is a custom hook that does a few things:
1. provides the loading state of the request, found in the wrappedRequest
2. makes requests to the server based on an endpoint
3. manages the cache: when a request comes in, if that endpoint already exists in the cache, then
it will return the information stored in the frontend rather than send a request to the server. either way,
the data will be set in the endpoints corresponding custom hook's state
4. there are cache-clearing functions provided for data changes, but they are not used in this app
*/

export const useCustomFetch = () => {
  const { cache } = useContext(AppContext);
  const { loading, wrappedRequest } = useWrappedRequest();

  const fetchWithCache = useCallback(
    async (endpoint, params = null) =>
      wrappedRequest(async () => {
        const cacheKey = getCacheKey(endpoint, params);
        const cacheResponse = cache?.current.get(cacheKey);

        if (cacheResponse) {
          return cacheResponse;
        }

        const res = await rTechFetch(endpoint);
        const data = await res.json();
        cache?.current.set(cacheKey, data);
        return data;
      }),
    [cache, wrappedRequest]
  );

  const clearCache = useCallback(() => {
    if (cache?.current === undefined) {
      return;
    }

    cache.current = new Map();
  }, [cache]);

  const clearCacheByEndpoint = useCallback(
    (endpointsToClear) => {
      if (cache?.current === undefined) {
        return;
      }

      const cacheKeys = Array.from(cache.current.keys());

      for (const key of cacheKeys) {
        const clearKey = endpointsToClear.some((endpoint) =>
          key.startsWith(endpoint)
        );

        if (clearKey) {
          cache.current.delete(key);
        }
      }
    },
    [cache]
  );

  return { fetchWithCache, clearCache, clearCacheByEndpoint, loading };
};

//  helper function to manage cache keys
function getCacheKey(endpoint, params = null) {
  return `${endpoint}${params ? `@${JSON.stringify(params)}` : ""}`;
}
