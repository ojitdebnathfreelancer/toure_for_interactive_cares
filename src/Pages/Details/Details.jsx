/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import MainLayout from "../../layout/MainLayout";
import SingleDetails from "./SingleDetails";
import BookingModal from "../../components/BookingModal/BookingModal";

const Details = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  return (
    <MainLayout>
      <SingleDetails />

      <section>
        <div className="py-16 space-y-5 max-w-7xl mx-auto lg:px-0 px-4">
          <h2 className="text-3xl font-semibold">Coupler tours in UK</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>

        <div className="py-16 space-y-5 bg-gray-100">
          <div className="max-w-7xl mx-auto lg:px-0 px-4">
            <h2 className="text-3xl font-semibold mb-4">Activities in UK</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {showModal && <BookingModal setShowModal={setShowModal} />}
    </MainLayout>
  );
};

export default Details;
