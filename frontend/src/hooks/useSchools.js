import { useCallback, useState } from "react";
import { useCustomFetch } from "./useCustomFetch";

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
