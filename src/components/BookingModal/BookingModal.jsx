// eslint-disable-next-line react/prop-types
const BookingModal = ({ setShowModal }) => {
  return (
    <div className="bg-black-opacity z-[99999999] w-full fixed top-0 left-0">
      <div className="max-w-7xl mx-auto min-h-screen flex justify-center items-center">
        <div className="xl:w-[600px] md:w-[400px] w-[300px] bg-white p-5 rounded-md">
          <div className="flex justify-end">
            <button
              onClick={() => setShowModal(false)}
              className="text-end text-2xl font-bold"
            >
              X
            </button>
          </div>
          <div>
            <form>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div>
                  <div className="mb-1 block text-[16px] font-medium text-black">
                    Name:
                  </div>
                  <input
                    className="w-full rounded border-[1px] border-[#ced4da] py-2 px-4 text-black placeholder:text-[14px] placeholder:text-black focus:outline-0 dark:bg-transparent"
                    id="booking name"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                  />
                </div>

                <div>
                  <div className="mb-1 block text-[16px] font-medium text-black">
                    Email:
                  </div>
                  <input
                    className="w-full rounded border-[1px] border-[#ced4da] py-2 px-4 text-black placeholder:text-[14px] placeholder:text-black focus:outline-0 dark:bg-transparent"
                    id="booking email"
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                  />
                </div>

                <div>
                  <div className="mb-1 block text-[16px] font-medium text-black">
                    Phone:
                  </div>
                  <input
                    className="w-full rounded border-[1px] border-[#ced4da] py-2 px-4 text-black placeholder:text-[14px] placeholder:text-black focus:outline-0 dark:bg-transparent"
                    id="booking phone"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                  />
                </div>

                <div>
                  <div className="mb-1 block text-[16px] font-medium text-black">
                    Destination:
                  </div>
                  <input
                    className="w-full rounded border-[1px] border-[#ced4da] py-2 px-4 text-black placeholder:text-[14px] placeholder:text-black focus:outline-0 dark:bg-transparent"
                    id="booking destination"
                    type="text"
                    name="destination"
                    placeholder="Enter Destination"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="bg-primary text-white font-medium px-5 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
