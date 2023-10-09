const OurAwards = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-5 my-10">
            <div data-aos='zoom-in-left'>
                <div className="hero h-[480px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/sRvCGmT/Virtual-Awards.png)' }}>
                    <div className="hero-overlay bg-white bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-[#594ef3] font-bold">OUR AWARDS</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos='zoom-in-right' className="col-span-2">
                <p className="text-xl my-4 lg:my-0 lg:mb-4">We are thrilled and proud to announce that the prestigious Award of the Event. This award represents a significant milestone in our journey and serves as a testament to the hard work, dedication, and innovation that define our companies culture.Receiving the Award is a humbling experience, and it reflects the relentless commitment of our team members who consistently go above and beyond to deliver exceptional results. This recognition would not have been possible without their unwavering dedication and expertise.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-12">
                    <div className="shadow-lg p-5 rounded">
                        <div className="flex justify-between">
                            <h2 className="text-[#594ef3] font-semibold">EVENT OF THE YEAR</h2>
                            <h2 className="text-[#594ef3] font-semibold">2019</h2>
                        </div>
                        <p>Music Awards</p>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>
                    <div className="shadow-lg p-5 rounded">
                        <div className="flex justify-between">
                            <h2 className="text-[#594ef3] font-semibold">BEST MUSIC COVERS</h2>
                            <h2 className="text-[#594ef3] font-semibold">2020</h2>
                        </div>
                        <p>Music Awards</p>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>
                    <div className="shadow-lg p-5 rounded">
                        <div className="flex justify-between">
                            <h2 className="text-[#594ef3] font-semibold">BEST MUSIC EVENT</h2>
                            <h2 className="text-[#594ef3] font-semibold">2021</h2>
                        </div>
                        <p>Music Awards</p>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>
                    <div className="shadow-lg p-5 rounded">
                        <div className="flex justify-between">
                            <h2 className="text-[#594ef3] font-semibold">BEST CONCERT SHOW</h2>
                            <h2 className="text-[#594ef3] font-semibold">2022</h2>
                        </div>
                        <p>Music Awards</p>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAwards;