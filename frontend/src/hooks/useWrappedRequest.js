import { useCallback, useContext, useState } from "react";
import { AppContext } from "../utils/context";

/*
useWrappedRequest... wraps the fetch request
manages a loading state for the server fetch.
a bit of error handling too
*/

export function useWrappedRequest() {
  const [loading, setLoading] = useState(false);
  const { setError } = useContext(AppContext);

  const wrappedRequest = useCallback(
    async (promise) => {
      try {
        setLoading(true);
        const result = await promise();
        return result;
      } catch (error) {
        setError(error);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [setError]
  );

  return { loading, wrappedRequest };
}
