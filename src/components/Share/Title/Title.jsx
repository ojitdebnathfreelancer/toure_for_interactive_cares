
const Title = ({ sectionName, sectionTitle }) => {
    return (
        <>
            <div className="text-center flex items-center gap-5 justify-center mt-11">
                <hr className="w-32" />
                <p className="text-[#FD5056] font-bold text-[20px]">{sectionName}</p>
                <hr className="w-32" />

            </div>
            <h1 className="text-4xl font-bold text-center mt-2">{sectionTitle}</h1>
        </>
    );
};

export default Title;