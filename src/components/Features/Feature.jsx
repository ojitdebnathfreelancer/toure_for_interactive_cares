import { FcBriefcase } from "react-icons/fc";

const Feature = ({ feature }) => {
    const { icon, title, desc } = feature;
    return (
        <div className="bg-[#fff] p-5 shadow">
            <p className="mb-4">{icon}</p>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-[#72798B] mt-3">{desc}</p>
        </div>
    );
};

export default Feature;