import { useContext, useEffect } from "react";
import { AppContext } from "./utils/context";
import { useCustomFetch } from "./hooks/useCustomFetch";
import { useSchools } from "./hooks/useSchools";
import { usePaginatedBooks } from "./hooks/usePaginatedBooks";
import { useBooksFiltered } from "./hooks/useBooksFiltered";

function App() {

  const { cache } = useContext(AppContext)
  const { fetchWithCache } = useCustomFetch()
  // const { schools, fetchAll } = useSchools()
  // const { data: paginatedBooks, ...paginatedBooksUtils } = usePaginatedBooks()
  // const { data: schools, ...schoolsUtils } = useSchools()
  const { data: booksBySchool, ...booksBySchoolUtils } = useBooksFiltered();

const handleBooks = async () =>{
  await booksBySchoolUtils.fetchById(5)
}
console.log(cache)
console.log(booksBySchool)

  return (
<>
<button onClick={handleBooks}>books w id</button>
{/* <button onClick={()=>fetchWithCache("/api/books")}>books</button> */}
{/* <button onClick={()=>fetchWithCache(`api/books/${5}`)}>books w id</button> */}
{/* <button onClick={()=>fetchWithCache("api/schools")}>schools</button> */}
</>
  );
}

export default App;
