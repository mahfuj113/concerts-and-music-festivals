const Review = () => {
    return (
        <div className="p-4">
            <h2 className="text-center text-[#594ef3] text-3xl font-bold my-10">Customers Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                <div data-aos='flip-right' className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/p0Q1gdM/jane-smith.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Jane Smith</h2>
                        <p>I recently used this website for a music festival. The site was easy to navigate, and I found all the information I needed about the event lineup and venue details. I will definitely be using this website for all my future concert and festival bookings.</p>
                        <div className="rating py-6">
                            <input type="radio" name="" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="" className="mask mask-star-2 bg-orange-500" checked />
                            <input type="radio" name="" className="mask mask-star-2 bg-orange-500" />
                        </div>
                    </div>
                </div>
                <div data-aos='fade-down' className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full" src="https://i.ibb.co/KjqmfR8/john-doe.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Alex Rodriguez</h2>
                        <p> I have been a regular user of this website for checking out upcoming concerts, and it is been a great resource for discovering new artists and events. The only improvement I had suggest is adding more user reviews and ratings for events to help with decision-making.</p>
                        <div className="rating py-6">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                        </div>
                    </div>
                </div>
                <div data-aos='flip-left' className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full" src="https://i.ibb.co/Db7tMf5/watson.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Rachel Thompson</h2>
                        <p>It is become my go-to source for finding concerts and music festivals in my area. The events match my music taste, and the event details are comprehensive. I also appreciate the informative articles about the music industry. Overall, a fantastic resource for music enthusiasts.</p>
                        <div className="rating py-6">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;