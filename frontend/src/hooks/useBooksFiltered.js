import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

export function useBooksFiltered() {
  const { fetchWithCache, loading } = useCustomFetch();
  const [booksBySchool, setBooksBySchools] = useState();

  const fetchById = useCallback(
    async (schoolId) => {
      const data = await fetchWithCache(`/api/books/${schoolId}`, schoolId);
      setBooksBySchools(data);
    },
    [fetchWithCache]
  );

  const invalidateData = useCallback(() => {
    setBooksBySchools(null);
  }, []);

  return { data: booksBySchool, loading, fetchById, invalidateData };
}
