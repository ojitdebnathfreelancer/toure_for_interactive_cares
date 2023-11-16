
const SingleCounter = ({ counter }) => {
    const { count, desc } = counter;
    return (
        <>
            <div className=" items-center gap-2">
                <h1 className="text-4xl font-bold">{count}+</h1>
                <p className="font-bold text-[#696F85]">{desc}</p>
            </div>
        </>
    );
};

export default SingleCounter;