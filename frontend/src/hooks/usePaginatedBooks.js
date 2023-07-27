import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function usePaginatedBooks() {
  const { fetchWithCache, loading } = useCustomFetch();
  const [paginatedBooks, setPaginatedBooks] = useState(null);

  const fetchAll = useCallback(async () => {
    const params = {
      page: paginatedBooks === null ? 0 : paginatedBooks.nextPage
    }

    const queryString = new URLSearchParams(params).toString();

    const response = await fetchWithCache(`/api/books?${queryString}`, params);

    setPaginatedBooks((previousResponse) => {
      if (response === null || previousResponse === null) {
        return response;
      }

      return { data: previousResponse.data.concat(response.data), nextPage: response.nextPage };
    });
  }, [fetchWithCache, paginatedBooks]);

  const invalidateData = useCallback(() => {
    setPaginatedBooks(null);
  }, []);

  return { data: paginatedBooks, loading, fetchAll, invalidateData };
}
