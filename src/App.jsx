import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import UserDashboard from "./components/userDashboard/UserDashboard";

function App() {
  const API_URL = "https://api.npoint.io/7ccfb632b650585cd143";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(data);

  const fetchUserData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const fetchData = await response.json();
      // console.log(fetchData);
      if (fetchData) {
        setData(fetchData);
      } else {
        console.log("data not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(API_URL);
    console.log("useEffect");
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="min-h-screen w-full">
      <Header />
      {loading && (
        <div className="flex min-h-[100vh] w-full items-center justify-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      <div className="px-4 md:px-12 lg:px-12 xl:px-14">
        {data ? <UserDashboard userData={data} /> : null}
      </div>
    </div>
  );
}

export default App;
