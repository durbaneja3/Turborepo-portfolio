import React, { useEffect, useState } from "react";
import { Router, useParams, useHistory } from "react-router-dom";
import { OFFERUP_API_URL } from "../../Constants";

export default function Listing({ setSearch }) {
  const [data, setData] = useState("");
  let { id } = useParams();
  let route = useHistory();

  useEffect(() => {
    fetch(`${OFFERUP_API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    return () => {
      // runs on unmount
    };
  }, []);

  return (
    <div className="listing-page">
      {!!data && (
        <div className="listing">
          <img
            src={data.vehicle.image}
            style={{ maxHeight: "75%", maxWidth: "75%" }}
          />
        </div>
      )}
      {!!data && (
        <div className="listing-info">
          <h3>Model:{data.vehicle.year}</h3>
          <h3>Make:{data.vehicle.make}</h3>
          <h3>Model:{data.vehicle.model}</h3>
          <h3>Price:{data.vehicle.price}</h3>
          <button
            onClick={() => {
              setSearch("");
              route.goBack();
            }}
          >
            Return
          </button>
        </div>
      )}
    </div>
  );
}
