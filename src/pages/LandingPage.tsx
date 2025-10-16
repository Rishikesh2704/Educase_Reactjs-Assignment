import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const buttonstyle = "w-[98%] h-[2.4rem] rounded-md font-medium text-[0.9rem] cursor-pointer";
  return (
    <section className="transition h-[98%] px-3 py-5 flex flex-col gap-2 justify-end items-start">

      <div className="homeContent mb-4 w-[70%]">
        <h1 className="text-2xl font-[600] mb-1">Welcome to PopX</h1>
        <p className=" font-[450] text-gray-500 text-[0.98rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </div>

      <button
        className={`homeButton ${buttonstyle} bg-[#6C25FF] hover:bg-[#5b1cdb] text-white `}
        onClick={() => navigate("/Createaccount")}
      >
        Create Account
      </button>

      <button
        className={`homeButton ${buttonstyle} bg-[#6C25FF4B] hover:bg-[#0000004b] text-black`}
        onClick={() => navigate("/Login")}
      >
        Already Registered? Login
      </button>

    </section>
  );
}

export default LandingPage;
