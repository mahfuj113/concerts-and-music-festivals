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
        <div>
            <h2 className="text-3xl text-[#594ef3] text-center my-10 font-bold">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                musicians.map(musician => <Service key={musician.id} musician={musician}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;