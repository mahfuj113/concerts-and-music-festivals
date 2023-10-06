import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [musicians, setMusicians] = useState([])
    useEffect(() => {
        fetch("/musicians.json")
        .then(res => res.json())
        .then(data => setMusicians(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                musicians.map(musician => <Service key={musician.id} musician={musician}></Service>)
            }
        </div>
    );
};

export default Services;