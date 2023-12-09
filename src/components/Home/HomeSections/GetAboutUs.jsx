
const GetAboutUs = () => {
    return (
        <div>
            <h1  className="bg-sky-500 text-cyan-50 w-[300px] mx-auto rounded-md mt-4 text-4xl font-bold text-center my-4">Get to Know Us</h1>
            <div className="lg:flex justify-around w-full">
                <div>
                    <img className="w-[600px]" src='https://i.ibb.co/CQR8djK/Screenshot-2023-12-09-144146.png' alt="" />
                </div>
                <div>
                    <h1 className="text-4xl">Experience the Indian Tour with  Us</h1><br />
                    <p className="text-xl w-96">Discover the Enchanting Charms of India: Experience the Ultimate Indian Tour with Us.
                       <br />
                        <span className="text-sm w-full">Experience India s magic with our expertly curated tours. Explore iconic landmarks, indulge in authentic cuisine, and discover the rich cultural tapestry. Whether you seek adventure in the Himalayas, serenity in Kerala, or spirituality in sacred places, we are your gateway to an unforgettable Indian adventure. Join us today.</span>
                    </p>
                    <button className="btn btn-primary btn-md">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default GetAboutUs;