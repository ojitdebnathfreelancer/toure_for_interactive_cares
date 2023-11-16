import { useEffect, useState } from "react";
import Card from "../Card/Card";

const FeaturedTours = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="bg-primary2 py-20 mt-48">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white italic font-medium text-xl text-center">
          Tours
        </h2>
        <h1 className="text-4xl text-white font-bold text-center">
          Featured Tours
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
          {items.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTours;
