import { useCallback, useEffect, useMemo, useState } from "react";
import { useSchools } from "./hooks/useSchools";
import { usePaginatedBooks } from "./hooks/usePaginatedBooks";
import { useBooksFiltered } from "./hooks/useBooksFiltered";
import Navigation from "./components/Navigation";

function App() {
  const { data: paginatedBooks, ...paginatedBooksUtils } = usePaginatedBooks();
  const { data: schools, ...schoolsUtils } = useSchools();
  const { data: booksBySchool, ...booksBySchoolUtils } = useBooksFiltered();
  const [isLoading, setIsLoading] = useState(false);

  const books = useMemo(
    () => paginatedBooks?.data ?? booksBySchool ?? null,
    [paginatedBooks, booksBySchool]
  );

  const loadAllBooks = useCallback(async () => {
    setIsLoading(true);

    booksBySchoolUtils.invalidateData();

    schoolsUtils.fetchAll().then(() => {
      setIsLoading(false);
    });

    await paginatedBooksUtils.fetchAll();
  }, [booksBySchoolUtils, paginatedBooksUtils, schoolsUtils]);

  const loadBooksBySchool = useCallback(
    async (schoolId) => {
      paginatedBooksUtils.invalidateData();

      await booksBySchoolUtils.fetchById(schoolId);
    },
    [paginatedBooksUtils, booksBySchoolUtils]
  );

  useEffect(() => {
    if (schools === null && !schoolsUtils.loading) {
      loadAllBooks();
    }
  }, [schoolsUtils.loading, schools, loadAllBooks]);

  return (
  <>
  <Navigation />
  </>
  );
}

export default App;
