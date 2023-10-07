import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Service = ({ musician }) => {
    const {id,img,name,price,description} = musician;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className=''><img className='h-[300px] w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <Link to={`/detail/${id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    )
}

Service.propTypes = {
    musician: PropTypes.object.isRequired,
}

export default Service