/* eslint-disable no-unused-vars */

import toast from "react-hot-toast";

const NewsLetter = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
      toast.success("Thank you for subscribing to our newsletter");
     
    }
  
    return (
      <div className="flex flex-col items-center my-6 justify-center">
        <h1 className="bg-sky-500 text-cyan-50 w-56 mx-auto rounded-md mt-4 text-4xl font-bold text-center my-4">News Letter</h1>
        <form className="w-full max-w-sm">
          <fieldset className="form-control">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="email" name="email" placeholder="enteryour@email.com" className="input input-bordered w-full pr-16" />
              <button onClick={handleSubmit} className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  };
  
  export default NewsLetter;
  