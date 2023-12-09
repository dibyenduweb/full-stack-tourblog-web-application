const Pakages = () => {
    
 
    return (
        <div>
            <h1  className="bg-sky-500 text-cyan-50 w-[400px] mx-auto rounded-md mt-4 text-4xl font-bold text-center my-4">Our Tour Packages</h1>
        <div className="lg:flex justify-center space-x-4">
  
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src="https://i.ibb.co/7YKMH6B/1.png" alt="" />
    <div className="px-6 py-4">
        <h1 className="text-3xl">Sikkim</h1>
      <div className="font-bold text-xl mb-2">Sikkim Adventure Package</div>
      <p className="text-gray-700 text-base">
        Explore the breathtaking landscapes and vibrant culture of Sikkim.
      </p>
      <p> Price: <span className="text-red-500"> $1500</span></p>
            <button className="btn btn-sm btn-neutral">Know More</button>
    </div>
  </div>


  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src="https://i.ibb.co/GHQ2GZ4/3.png" alt="" />
    <div className="px-6 py-4">
        <h1 className="text-3xl">Kedarnath</h1>
      <div className="font-bold text-xl mb-2">journey Kedarnath Temple.</div>
      <p className="text-gray-700 text-base">
      Embark on a spiritual journey to the sacred Kedarnath Temple.
      </p>
      <p> Price: <span className="text-red-500"> $1200</span></p>
            <button className="btn btn-sm btn-neutral">Know More</button>
    </div>
  </div>


  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src="https://i.ibb.co/1ZFHRm1/2.png" alt="" />
    <div className="px-6 py-4">
        <h1 className="text-3xl">Kashmir</h1>
      <div className="font-bold text-xl mb-2">Kasmir Adventure Package</div>
      <p className="text-gray-700 text-base">
      Experience the paradise on earth with the serene beauty of Kashmir Valley.
      </p>
      <p> Price: <span className="text-red-500"> $1800</span></p>
            <button className="btn btn-sm btn-neutral">Know More</button>
    </div>
  </div>

</div>
</div>

    );
};

export default Pakages;