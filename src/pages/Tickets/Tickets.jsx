import {FiDollarSign} from 'react-icons/fi'
import {BsCheckLg} from 'react-icons/bs'
import toast from 'react-hot-toast';
const Tickets = () => {
    const handleBuyTicket = () => {
        toast.success('Successfully buy')
        return;
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24 mb-24'>
            <div className="card card-compact border">
                <p className='text-center text-2xl font-medium h-10 my-6'>One-Day</p>
                <figure className="bg-red-500 hover:bg-black h-28"><h1 className="text-4xl flex items-end font-bold text-white"><FiDollarSign className='text-lg'></FiDollarSign>49.00</h1></figure>
                <div className="card-body">
                    <ul className='h-20'>
                        <li className='text-base flex items-center'><BsCheckLg className='text-red-600'></BsCheckLg>Ticket for one day</li>
                        <li className='text-base flex items-center'><BsCheckLg className='text-red-600'></BsCheckLg>Chance to win doorprize</li>
                    </ul>
                    <div className="card-actions justify-center items-end mt-8 mb-5">
                        <button onClick={handleBuyTicket} className="text-lg text-white font-semibold bg-red-500 px-6 py-3">Buy Ticket</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact border">
                <p className='text-center text-2xl font-medium h-10 my-6'>Three-Day</p>
                <figure className="bg-red-500 hover:bg-black h-28"><h1 className="text-4xl flex items-end font-bold text-white"><FiDollarSign className='text-lg'></FiDollarSign>80.00</h1></figure>
                <div className="card-body">
                    <ul className='h-20'>
                        <li className='text-base flex items-center'><BsCheckLg className='text-red-600'></BsCheckLg>Ticket for one day</li>
                        <li className='text-base flex items-center'><BsCheckLg className='text-red-600'></BsCheckLg>Chance to win doorprize</li>
                        <li className='text-base flex items-center'><BsCheckLg className='text-red-600'></BsCheckLg>Free official merchandise</li>
                    </ul>
                    <div className="card-actions justify-center mt-8 mb-5">
                        <button onClick={handleBuyTicket} className="text-lg text-white font-semibold bg-red-500 px-6 py-3">Buy Ticket</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact border">
                <p className='text-center text-2xl font-medium h-10 my-6'>A Week</p>
                <figure className="bg-red-500 hover:bg-black h-28"><h1 className="text-4xl flex items-end font-bold text-white"><FiDollarSign className='text-lg'></FiDollarSign>109.00</h1></figure>
                <div className="card-body">
                    <ul className='h-20'>
                        <li className='text-base flex items-center'><BsCheckLg className='text-red-600'></BsCheckLg>Ticket for one day</li>
                        <li className='text-base flex items-center'><BsCheckLg className='text-red-600'></BsCheckLg>Chance to win doorprize</li>
                        <li className='text-base flex items-center'><BsCheckLg className='text-red-600'></BsCheckLg>Free official merchandise</li>
                        <li className='text-base flex items-center'><BsCheckLg className='text-red-600'></BsCheckLg>Free artist photo + signature</li>
                    </ul>
                    <div className="card-actions justify-center mt-8 mb-5">
                        <button onClick={handleBuyTicket} className="text-lg text-white font-semibold bg-red-500 px-6 py-3">Buy Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tickets;