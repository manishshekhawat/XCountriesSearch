import { useEffect, useState } from "react";
import Countries from "./Countries";

function App() {
  //const number=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      " https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (search.trim()) {
          let filtered = data.filter((country) => {
            return country.common.toLowerCase().includes(search.toLowerCase());
          });
          setItem(filtered);
          console.log(filtered);
        }
        else{
          setItem(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [search]);

  useEffect(() => {}, [search]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          height: "50px",
        }}
      >
        <input
          type="text"
          value={search}
          placeholder="Search for countries..."
          style={{ width: "500px", height: "20px" }}
          onChange={(e) => {
            handleInput(e);
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {item.map((data) => {
          return <Countries name={data.common} flag={data.png} />;
        })}
      </div>
    </>
  );
}

export default App;
