import React, { useEffect, useState } from "react";
import { API } from "../lib/api";

export default function PlantCard({ Id }) {
  const [singlePlantData, setSinglePlantData] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        const response = await API.GET(API.ENDPOINTS.currentPlant(Id));
        setSinglePlantData(response.data);
      } catch (error) {
        console.error(error);
      }
      setIsUpdated(false);
    };

    fetchPlantData();
  }, [isUpdated, Id]);

  if (!singlePlantData) {
    return <p>Loading individual plants</p>;
  }

  return (
    <div>
      <div>
        <p>{singlePlantData.common_name}</p>
        <img src={singlePlantData.default_image.medium_url} alt={singlePlantData.common_name} />
      </div>
    </div>
  );
}