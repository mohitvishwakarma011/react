import {useState,useEffect} from "react";
import { swiggy_jbp_url } from "./constants";


const useResList = () => {
  const [API_DATA, setAPI_DATA] = useState([]);
  // const [workingResList, setWorkingResList] = useState([]);
  

  useEffect(() => 
    {
    fetchData()
    }, []);

    const fetchData = async () => {
    const Data = await fetch(swiggy_jbp_url);

    const jsonData = await Data.json();


    setAPI_DATA(jsonData.data.cards);

  };

  return API_DATA;
};


export default useResList;