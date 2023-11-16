const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white">
        <div className="grid xl:grid-cols-3 py-10">
          <div className="sm:px-20 px-5 space-y-3">
            <h1 className="text-2xl mb-5 font-bold">
              <span className="text-red-400">T</span>our
            </h1>
            <p>Need any help?</p>
            <h3 className="font-semibold">
              Call Us: <span className="text-red-400">(888)1234 5678</span>
            </h3>
            <p>
              Love Street, Muscat, <br />
              example@gmail.com
            </p>
            <div className="flex gap-5">
              <i className="bx bxl-facebook-square text-4xl"></i>
              <i className="bx bxl-twitter text-4xl"></i>
              <i className="bx bxl-linkedin text-4xl"></i>
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:my-10 xl:grid-cols-3 gap-10 xl:gap-5 justify-between sm:px-20 px-5 border-r-2 border-l-2 border-gray-600">
            <div>
              <h1 className="text-2xl pb-2">
                <i>Company</i>
              </h1>
              <h3>About Us</h3>
              <h3>Contact Us</h3>
              <h3>Travel Guides</h3>
              <h3>Data Policy</h3>
            </div>
            <div>
              <h1 className="text-2xl pb-2">
                <i>Top Exicutive</i>
              </h1>
              <h3>Las Vegas</h3>
              <h3>New York City</h3>
              <h3>Sun Francisco</h3>
              <h3>Hawai</h3>
            </div>
            <div>
              <h1 className="pt-10">Tokya</h1>
              <h3>Sydney</h3>
              <h3>Melboume</h3>
              <h3>Dubai</h3>
            </div>
          </div>
          <div className="sm:pl-20 pl-5 space-y-3">
            <h3 className="text-2xl pb-3">
              <i>Sign up Naither</i>
            </h3>
            <label className="bg-gray-50 inline-block rounded">
              <i className="bg-white text-gray-500 bx bxl-telegram"></i>
              <input
                className="rounded-r py-1 px-2 text-black outline-none"
                type="text"
                placeholder="Enter email"
              />
            </label>
            <br />
            <button className="bg-red-400 text-white py-2 px-6 rounded font-bold">
              Submit
            </button>
            <h3>© 2023 Tour Right Reserved</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
