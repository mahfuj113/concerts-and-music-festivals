const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[500px]">
                <img src='https://i.ibb.co/1RkYTPM/banner1.jpg' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <p className="text-[#594ef3] text-center font-bold text-4xl">CREATING MUSIC IS AN ESSENTIAL <span className="text-white">PART OF <br /> OUR LIVES</span></p>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[500px]">
                <img src="https://i.ibb.co/VJpR6p7/banner2.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <h1 className="text-white text-4xl text-center font-bold">A MUSIC FESTIVAL <span className="text-[#F1FF4F]">TO <br /> REMEMBER</span></h1>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[500px]">
                <img src="https://i.ibb.co/gTCtyrs/banner3.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <h1 className="text-white text-4xl font-bold">NIGHT SHOW IS BEST IN ALL TIME</h1>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[500px]">
                <img src="https://i.ibb.co/grwZVvW/banner4.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <p className="text-[#F1FF4F] text-4xl font-bold">BC Festival <span className="text-white">Symposium 2023</span></p>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;