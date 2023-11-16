import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const SingleDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const destination = data.find((d) => d.id == id);
        setData(destination);
      });
  }, [id]);

  return (
    <>
      {data.id ? (
        <section className="grid lg:grid-cols-3 gap-10 my-10 max-w-7xl mx-auto lg:px-0 px-4">
          <div className="lg:col-span-2">
            <img className="w-full" src={data?.image} alt="image" />
            <div className="grid grid-cols-4 gap-4 my-6">
              {data.moreImage.map((image, index) => (
                <img
                  key={index}
                  className="w-full cursor-pointer"
                  src={image}
                  alt="Gallery Images"
                />
              ))}
            </div>
            <div className="my-10">
              <h2 className="text-2xl font-bold">About {data?.place}</h2>
              <p className="my-4">{data?.about}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
              <div>
                <div className="overflow-x-auto p-2 bg-gray-100">
                  <table className="table">
                    <tbody>
                      <tr className="">
                        <td>Country</td>
                        <th>{data?.country}</th>
                      </tr>
                      <tr className="">
                        <td>Language</td>
                        <th>{data?.language}</th>
                      </tr>
                      <tr className="">
                        <td>Currency</td>
                        <th>{data?.currency}</th>
                      </tr>
                      <tr className="">
                        <td>Area</td>
                        <th>{data?.area} Square Miles</th>
                      </tr>
                      <tr className="">
                        <td>Population</td>
                        <th>{data?.population}M</th>
                      </tr>
                      <tr className="">
                        <td>Time Zone</td>
                        <th>{data?.time}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div>
              <h2 className="text-2xl font-semibold mb-4">City Map</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21811.250573469875!2d88.6448599489434!3d25.621034441971766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb529bc7fc909b%3A0xd8f861ed9baf24de!2sDinajpur!5e0!3m2!1sen!2sbd!4v1700063877589!5m2!1sen!2sbd"
                className="w-full h-72"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-4 bg-gray my-5">
              <h2 className="text-2xl font-semibold">Weather</h2>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    <tr className="border-b-2 border-gray-300">
                      <th>Jan-Fab</th>
                      <td>12oc-18oc</td>
                    </tr>
                    <tr className="border-b-2 border-gray-300">
                      <th>Mar-Apr</th>
                      <td>12oc-18oc</td>
                    </tr>
                    <tr className="border-b-2 border-gray-300">
                      <th>May-Jun</th>
                      <td>12oc-18oc</td>
                    </tr>
                    <tr className="border-b-2 border-gray-300">
                      <th>Jul-Aug</th>
                      <td>12oc-18oc</td>
                    </tr>
                    <tr className="border-b-2 border-gray-300">
                      <th>Sep-Oct</th>
                      <td>12oc-18oc</td>
                    </tr>
                    <tr className="border-b-2 border-gray-300">
                      <th>Nov-Dec</th>
                      <td>12oc-18oc</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </>
  );
};

export default SingleDetails;
