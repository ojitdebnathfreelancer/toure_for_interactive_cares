import SingleCounter from "./SingleCounter";

const Counter = () => {
  const counters = [
    {
      count: 120,
      desc: "Total Destination",
    },
    {
      count: 500,
      desc: "Travel Packages",
    },
    {
      count: "125k",
      desc: "Total Travelers",
    },
    {
      count: "7k",
      desc: "Positive Reviews",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-5 md:mt-0 mt-5">
      <hr />

      <div className="grid md:grid-cols-4 grid-cols-2 gap-11 py-20">
        {counters.map((counter, index) => (
          <SingleCounter key={index} counter={counter} />
        ))}
      </div>
    </div>
  );
};

export default Counter;
