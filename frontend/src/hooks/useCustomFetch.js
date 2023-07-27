import { useCallback, useContext } from "react";
import { AppContext } from "../utils/context";
import { useWrappedRequest } from "./useWrappedRequest.js";
import { rTechFetch } from "../utils/fetch";

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

function getCacheKey(endpoint, params = null) {
  return `${endpoint}${params ? `@${JSON.stringify(params)}` : ""}`;
}
