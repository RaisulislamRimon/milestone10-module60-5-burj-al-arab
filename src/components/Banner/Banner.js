import React, { useState } from "react";
import { toast } from "react-toastify";
import Toast from "../Toast/Toast";

const Banner = () => {
  const [show, setShow] = useState(false);

  const handleShowToast = () => {
    setShow(true);
    const notify = () => toast("Wow so easy!");
    notify();
  };
  return (
    <div>
      <div className="card w-full glass">
        <figure>
          <img src="https://placeimg.com/1600/425/arch" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Burj-Al-Arab</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At enim
            molestias sapiente. Corrupti laboriosam minima nostrum optio cumque,
            doloremque quia sequi saepe molestiae nesciunt esse autem non nemo
            aliquam voluptatibus!
          </p>
          <div className="card-actions justify-end">
            <button onClick={handleShowToast} className="btn btn-primary">
              Book Now
            </button>
          </div>
          {show && <Toast />}
        </div>
      </div>
    </div>
  );
};

export default Banner;
