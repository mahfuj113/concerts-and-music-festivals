import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const [detail, setDetail] = useState({})
    const {img,name,price,description} = detail;
    const {id} = useParams()
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/mahfuj113/fakedata/products/${id}`)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[id])
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className=''><img className='' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;