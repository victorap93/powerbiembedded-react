import React, { useEffect, useState } from 'react';

// Dashboard
import Dashboard from './../components/Dashboard';

// Axios
import axios from 'axios';

export default function Embedded() {

  const [token, setToken] = useState('');

  useEffect(() => {
    // Get Embedded Token
    axios.post(process.env.REACT_APP_API_URL + '/getToken', {
      report_id: process.env.REACT_APP_REPORT_ID,
      params: { "accessLevel": "View" }
    })
      .then(function (response) {
        setToken(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <>
      {token && <Dashboard
        id={process.env.REACT_APP_REPORT_ID}
        token={token}
        settings={{
          "panes": {
            "filters": {
              "visible": false
            },
            "pageNavigation": {
              "visible": false
            }
          }
        }}
      />}
    </>
  );
}