import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {FiDollarSign} from 'react-icons/fi'

const Service = ({ musician }) => {
    const {id,img,name,price,description} = musician;
    return (
        <div  data-aos='zoom-in' className="card card-compact bg-base-100 shadow-xl">
            <figure className=''><img className='h-[300px] w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body bg-gray-400 rounded-b-lg">
                <h2 className="card-title">{name}</h2>
                <p className='text-lg font-semibold flex items-center'>Price: {price} <FiDollarSign></FiDollarSign></p>
                <p>{description ? description.slice(0,100) : ''}</p>
                <div className="card-actions">
                    <Link to={`/detail/${id}`}><button className="btn">Details</button></Link>
                </div>
            </div>
        </div>
    )
}

Service.propTypes = {
    musician: PropTypes.object.isRequired,
}

export default Service