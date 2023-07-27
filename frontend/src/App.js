import { useCallback, useEffect, useMemo, useState } from "react";
import { useSchools } from "./hooks/useSchools";
import { usePaginatedBooks } from "./hooks/usePaginatedBooks";
import { useBooksFiltered } from "./hooks/useBooksFiltered";
import Navigation from "./components/Navigation";
import Dropdown from "./components/Dropdown";
import { NO_SCHOOL } from "./utils/constants";
import Books from "./components/Books";

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
      <div>
        <Navigation />

        <Dropdown
          isLoading={isLoading}
          defaultValue={NO_SCHOOL}
          items={schools === null ? [] : [NO_SCHOOL, ...schools]}
          loadingLabel="Loading Schools..."
          parseItem={(item) => ({
            value: item.id,
            label: `${item.name}`,
          })}
          onChange={async (newValue) => {
            if (newValue === null) {
              return;
            }

            if (newValue === NO_SCHOOL) {
              await loadAllBooks();
              return;
            }

            await loadBooksBySchool(newValue.id);
          }}
        />

        <Books books={books} />

        {paginatedBooks?.nextPage && (
          <button
            disabled={paginatedBooksUtils.loading}
            onClick={async () => {
              await loadAllBooks();
            }}
          >
            View More
          </button>
        )}
      </div>
    </>
  );
}

export default App;
