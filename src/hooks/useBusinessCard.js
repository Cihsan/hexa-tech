import { useEffect } from "react";
import { useState } from "react";

const useBusinessCard = () => {
    const [businessCard, setBusinessCard] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/businessCard")
        .then(res => res.json())
        .then(data => setBusinessCard(data))
    },[])
    return [businessCard, setBusinessCard];
};

export default useBusinessCard;