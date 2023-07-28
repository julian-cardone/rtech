import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

/* 
custom hook to manage schools
fetches schools from server or cache
sets a state of the schools fetched
invalidates state data when needed
returns object data: state, loading, fetch, and invalidation function, loaded as useSchoolsUtils() in the app
*/

export function useSchools() {
  const { fetchWithCache, loading } = useCustomFetch();
  const [schools, setSchools] = useState(null);

  const fetchAll = useCallback(async () => {
    const schoolsData = await fetchWithCache("api/schools");
    setSchools(schoolsData);
  }, [fetchWithCache]);

  const invalidateData = useCallback(() => {
    setSchools(null);
  }, []);

  return { data: schools, loading, fetchAll, invalidateData };
}
