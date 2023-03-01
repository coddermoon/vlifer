import React from "react";

const Contact = () => {
  return (
    <div className="bg-white pt-20 lg:pl-44 pl-0 contact-form" id="contacts" >
      <div className="max-w-[50%] mx-auto">

        <div className="min-w-[340px] mx-auto content py-10">
          <h2 className="text-textColor font-bold text-xl text-center lg:mr-28 mr-0 mt-12">
            Contact us
          </h2>

          {/* contact from */}

          <form className="mt-16">


            <div className="grid grid-cols-2 gap-3 items-center justify-between">
              <div className=" lg:flex block">
                <div className="mr-2">
                  <label htmlFor="Password">Name</label> <br />
                  <input
                    className="mt-1 lg:w-60 w-80  py-1 borderInputCustom rounded px-2 outline-none"
                    name="name"
                    type="text"
                  />

                </div>
                <div className=" lg:ml-14 ml-0">
                  <label htmlFor="Password">Email</label> <br />
                  <input
                    className="mt-1  lg:w-60  w-80 py-1 borderInputCustom rounded px-2 outline-none"
                    name="Password"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="my-3">
              <label htmlFor="email">Subject</label> <br />
              <input
                className="mt-1 py-1 borderInputCustom rounded px-2 outline-none lg:w-4/5 w-80"
                name="email"
                type="text"
              />
            </div>

            <div className="my-3">
              <label htmlFor="Password">Details</label> <br />
              <textarea
                className="mt-1 h-[140px] resize-none lg:w-4/5 w-80  py-1 borderInputCustom rounded px-2 outline-none"
                name="Password"
                type="text"
              />
            </div>
            <div className="max-w-[50%] mx-auto lg:mr-24 mr-12">
              <button className=" border border-solid px-6 rounded py-2 mt-6 text-center text-base font-semibold" style={{ borderColor: '#1479FF', color: '#1479FF' }}>Send</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
