import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

// eslint-disable-next-line react/prop-types
const BookingModal = ({ setShowModal }) => {
  const defaultData = JSON.parse(localStorage.getItem("bookingData")) ?? {};

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const destination = e.target.destination.value;
    const date = e.target.date.value;

    const bookData = { name, email, phone, destination, date };

    if (!user?.email) {
      localStorage.setItem(
        "bookingData",
        JSON.stringify({ id: id, ...bookData })
      );
      navigate("/login");
      return toast.error("Please register before booking");
    }

    setShowModal(false);
    localStorage.removeItem("bookingData");
    localStorage.setItem("booked", JSON.stringify(bookData));
    toast.success("Successfully Booked");
  };
  return (
    <div className="bg-black-opacity z-[99999999] w-full fixed top-0 left-0">
      <div className="max-w-7xl mx-auto min-h-screen flex justify-center items-center">
        <div className="xl:w-[600px] md:w-[400px] w-[300px] bg-white p-5 rounded-md">
          <div className="flex justify-between">
            <h1 className="text-black text-2xl font-bold">Booking Now</h1>
            <button
              onClick={() => setShowModal(false)}
              className="text-end text-2xl font-bold"
            >
              X
            </button>
          </div>
          <div className="mt-5">
            <form onSubmit={handelSubmit}>
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
                    defaultValue={defaultData?.name}
                    placeholder="Enter Name"
                    required
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
                    defaultValue={defaultData?.email}
                    placeholder="Enter Email"
                    required
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
                    defaultValue={defaultData?.phone}
                    placeholder="Enter Phone"
                    required
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
                    defaultValue={defaultData?.destination}
                    placeholder="Enter Destination"
                  />
                </div>

                <div>
                  <div className="mb-1 block text-[16px] font-medium text-black">
                    Date:
                  </div>
                  <input
                    className="w-full rounded border-[1px] border-[#ced4da] py-2 px-4 text-black placeholder:text-[14px] placeholder:text-black focus:outline-0 dark:bg-transparent"
                    id="booking data"
                    type="date"
                    name="date"
                    defaultValue={defaultData?.date}
                    placeholder="Enter Date"
                    required
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
