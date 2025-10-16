import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [loginData, SetLoginData] = useState<LoginData>({
    EmailAddress: "",
    Password: "",
  });  const navigate = useNavigate()

  const labelStyle ="absolute px-[0.4rem] text-[0.7rem] top-[-0.6rem] left-1 bg-gray-50 text-violet-600 font-semibold";
  const inputStyle ="w-[98%] py-1.5 px-3 border-2 border-gray-300 rounded-md text-[0.8rem] font-[500] placeholder:text-gray-600 ";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    navigate('/Profile')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    SetLoginData({...loginData,[e.target.name]:e.target.value})
  }

  return (
    <section className="transition h-[100%] w-[100%] relative flex flex-col gap-7 pt-8 justify-start ">

      <header className="w-[68%] px-4 ">
        <h1 className="text-2xl font-semibold">Signin to your PopX account</h1>
        <p className="text-[0.9rem] mt-2 text-gray-500 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </header>

      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset className="px-3 flex flex-col gap-5">
          <legend className="sr-only">Create Account Form</legend>

          <div className="relative">
            <label htmlFor="email" className={labelStyle}> Email Address </label>
            <input
              className={inputStyle}
              id="email"
              name="EmailAddress"
              type="text"
              placeholder="Marry Doe"
              value={loginData.EmailAddress}
              onChange={(e) => handleChange(e)}
              // required
            />
          </div>

           <div className="relative">
            <label htmlFor="password" className={labelStyle}> Password </label>
            <input
              className={inputStyle}
              id="password"
              name="Password"
              type="password"
              placeholder="Marry Doe"
              value={loginData.Password}
              onChange={(e) => handleChange(e)}
              // required
            />
          </div>

          <button
            type="submit"
            className="left-2 bottom-4 w-[98%] h-[2.4rem] rounded-md font-medium bg-[#6C25FF] hover:bg-[#5b1cdb] text-white text-[0.9rem] cursor-pointer "
            aria-label="CreateAccount Button"
          >
            Create Account
          </button>

        </fieldset>
      </form>
    </section>
  );
}

export default LoginPage;
