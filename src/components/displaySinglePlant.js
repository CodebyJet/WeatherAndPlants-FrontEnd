import React, { useEffect, useState } from "react";
import { API } from "../lib/api";

export default function DisplaySinglePlant(plantId) {
  const [DisplaySinglePlant, setDisplaySinglePlant] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    API.GET(API.ENDPOINTS.currentPlant(plantId), API.Access)
      .then(({ data }) => {
        setDisplaySinglePlant(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsUpdated(false);
  }, [isUpdated]);

  return (
    console.log(DisplaySinglePlant)
  );
}
