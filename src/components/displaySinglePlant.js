import { useEffect, useState } from "react";
import { API } from "../lib/api";

export default function DisplaySinglePlant({ plantId }) {
  const [singlePlantData, setSinglePlantData] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    API.GET(API.ENDPOINTS.currentPlant(plantId))
      .then(({ data }) => {
        setSinglePlantData(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsUpdated(false);
  }, [isUpdated, plantId]);

  return (
    <div>
      {singlePlantData && (
        <div>
          <p>{singlePlantData.common_name}</p>
          <p>{singlePlantData.type}</p>
        </div>
      )}
    </div>
  );
}