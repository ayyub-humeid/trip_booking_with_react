import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="m-auto w-full max-w-[1140px] py-8 flex justify-center items-center border-t-2 border-[#edeaea]">
      <div className="flex gap-2">
        <BsChatSquareDots size={30} className="text-[var(--primary-dark)]" />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
    </div>
  );
};

export default Footer;
