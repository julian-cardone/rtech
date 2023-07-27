import { useContext } from "react";
import { AppContext } from "./utils/context";
import { useCustomFetch } from "./hooks/useCustomFetch";

function App() {

  const { cache } = useContext(AppContext)
  console.log(cache)
  const { fetchWithCache } = useCustomFetch()

const handleBooks = () =>{
  fetchWithCache("/api/books")
  console.log(cache)
}

  return (
<>
<button onClick={handleBooks}>books</button>
<button onClick={()=>fetchWithCache(`api/books/${5}`)}>books w id</button>
<button onClick={()=>fetchWithCache("api/schools")}>schools</button>
</>
  );
}

export default App;
