import React, { useEffect, useState } from 'react';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://job-hunting-app-cb9818296d91.herokuapp.com/',
  timeout: 1000,
  headers: {
    'Accept': 'application/vnd.GitHub.v3+json',
    //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  }
});


function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const getAllData= async()=>{
    setLoading(true);
    try{
      const response = await axios.get('http://localhost:8080/posts', {timeout: 1500});
      console.log(response);
      // setData(response)
    }catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(()=>{
    getAllData();
  },[])
  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        <h2>Doing stuff with data</h2>
        {data}
      </div>
    )}
    <div>AAAA</div>
    </div>
  );
}

export default App;
