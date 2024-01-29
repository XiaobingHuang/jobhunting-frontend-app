import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const client = axios.create({
  baseURL: "http://job-hunting-app-cb9818296d91.herokuapp.com",
  timeout: 1000,
});
interface Idata {
  profile: string;
  desc: string;
  exp: string;
  techs: string[];
}

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Idata[]>([]);

  const getAllData = async () => {
    setLoading(true);
    try {
      // const response = await axios.get('http://localhost:8080/posts', {timeout: 1500});
      // const response = await axios.get('http://job-hunting-app-cb9818296d91.herokuapp.com/posts', {timeout: 1500});
      const response = await client.get("/posts");
      // console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Job Seeker Posts
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      
      <div className="container text-center">
        <div className="row">
          <div className="col">1 of 2</div>
          <div className="col">2 of 2</div>
        </div>
        <div className="row">
          <div className="col">1 of 3</div>
          <div className="col">2 of 3</div>
          <div className="col">3 of 3</div>
        </div>
      </div>
      {/* <ul>
        {data.map((item,key)=> (
          <li key={key}>{item.profile}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
