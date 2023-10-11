import React, { useContext, useEffect, useState } from 'react';
import './ShowData.css';
const ShowData = ({ json }) => {
  return (
    <div className="table-container">
      {Object.values(json).length <= 0 ? (
        <h2>No Data found</h2>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              {Object.keys(json).length > 0 &&
                Object.keys(json).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(json).length > 0 &&
                Object.values(json).map((value, index) => (
                  <td key={index}>{value ? value : '-'}</td>
                ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowData;
