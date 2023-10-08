import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {FiDollarSign} from 'react-icons/fi'

const ServiceDetails = () => {
    const [detail, setDetail] = useState({})
    const { img, name, price, description,event_category,organizer,phone,email } = detail;
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/mahfuj113/fakedata/products/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id])
    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-5">{name} concerts of covers</h2>
            <figure className=''><img className='max-h-[500px] w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">

                <p className="flex items-center text-orange-600 text-lg font-semibold">Price: {price}.00<FiDollarSign></FiDollarSign></p>
                <p>{description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h2 className="text-lg font-bold">EVENT CATEGORY:</h2>
                        <p className="text-lg">{event_category}</p>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">ORGANIZER</h1>
                        <p className="text-lg">{organizer}</p>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">PHONE</h1>
                        <p className="text-lg">{phone}</p>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">EMAIL</h1>
                        <p className="text-lg">{email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;