import PropTypes from 'prop-types'

const Service = ({ musician }) => {
    const {img,name,price,description} = musician;
    console.log(musician);
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className=''><img className='h-[300px] w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

Service.propTypes = {
    musician: PropTypes.object.isRequired,
}

export default Service