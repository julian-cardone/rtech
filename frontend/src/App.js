import { useCallback, useEffect, useMemo, useState } from "react";
import { useSchools } from "./hooks/useSchools";
import { usePaginatedBooks } from "./hooks/usePaginatedBooks";
import { useBooksFiltered } from "./hooks/useBooksFiltered";
import Navigation from "./components/Navigation";
import Dropdown from "./components/Dropdown";
import { NO_SCHOOL } from "./utils/constants";
import Books from "./components/Books";
import { Container } from "@mui/material";
import { CustomButton } from "./components/Navigation/customButton";

function App() {
  const { data: paginatedBooks, ...paginatedBooksUtils } = usePaginatedBooks();
  const { data: schools, ...schoolsUtils } = useSchools();
  const { data: booksBySchool, ...booksBySchoolUtils } = useBooksFiltered();
  const [isLoading, setIsLoading] = useState(false);
  console.log(booksBySchool)

  const books = useMemo(
    () => paginatedBooks?.data ?? booksBySchool?.data ?? null,
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

      <Container
        style={{
          justifyContent: "center",
          padding: "58px 16px",
          maxWidth: "1410px",
          margin: "auto",
          backgroundImage: "linear-gradient(90deg, #D9DAEB, #EBE5E3)"
        }}
      >
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
        {/* <div style={{ marginTop: "36px", width: "100%" }}> */}
          <Books books={books} />

          {paginatedBooks?.nextPage && (
            <CustomButton
              disabled={paginatedBooksUtils.loading}
              onClick={async () => {
                await loadAllBooks();
              }}
              style={{ top: "17px", color: "#696969",  }}
            >
              View More
            </CustomButton>
          )}
        {/* </div> */}
      </Container>
    </>
  );
}

export default App;
