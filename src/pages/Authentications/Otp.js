import React from "react";
import '../../utils/style.css'

const Otp = () => {
  return (
    <div className="back-image">
      <div className="min-h-[100vh] flex items-center justify-center">
        <div className="w-[90%] sm:w-[560px]   mx-auto bg-white custom-shadow ">
          <div className="  flex ">
            <div className="min-w-[340px] mx-auto my-24">
              <p className="text-center text-xl font-bold text-textColor">
                Verification
              </p>
              <p className="text-center text-lg mt-4 text-textColor">
                We sent a otp code your <br />
                Email - S**********Y{" "}
              </p>

              <form className="mt-10">
                <div className="my-3">
                  <input
                    className="mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none"
                    name="newPassword"
                    type="text"
                    placeholder="Enter otp code"
                  />
                </div>

                <div className="text-center mt-10">
                  <input
                    className="bg-primaryColor px-4 rounded py-2 text-center text-white font-semibold "
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
