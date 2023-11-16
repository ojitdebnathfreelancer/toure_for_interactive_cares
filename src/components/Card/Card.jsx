/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  return (
    <div className="bg-white">
      <figure className="relative">
        <img
          className="w-full h-60 object-cover"
          src={data?.image}
          alt="image"
        />
        <span className="absolute top-2 right-2 bg-0 text-xl bg-white px-1 rounded-full"></span>
      </figure>
      <div className="space-y-2 p-3">
        <h4 className="text-lg text-gray-600">{data?.country}</h4>
        <h2 className="text-xl font-bold">{data?.title}</h2>
        <div className="flex border-b justify-between">
          <p className="pb-3">
            <span className="bg-red-500 rounded px-2 py-1 text-white">
              {data?.starts}
            </span>
            <span className="text-gray-600">{data?.review} Reviews</span>
          </p>

          <p className="text-gray-600">{data?.hour} hours</p>
        </div>

        <p className="flex justify-between">
          <span className="text-gray-600">Strating Form </span>${data?.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
