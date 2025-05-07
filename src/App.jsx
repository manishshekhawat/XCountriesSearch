import { useEffect, useState } from "react";
import Countries from "./Countries";

function App() {
  //const number=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
  const [item, setItem] = useState([]);

  useEffect(() => {
    
      fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((resp) => resp.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      })
      .catch(error){
        console.error("API fetch failed:", error);
      }
    
    
    
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          
        }}
      >
        {item.map((data) => {
          return <Countries name={data.name} flag={data.flag} />;
        })}
      </div>
    </>
  );
}

export default App;
