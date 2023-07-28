import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

/* 
custom hook to manage filtered books
fetches books from server or cache
sets a state of the books fetched
invalidates state data when needed
returns object data: state, loading, fetch, and invalidation function, loaded as useBooksFilteredUtils() in the app
*/

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
