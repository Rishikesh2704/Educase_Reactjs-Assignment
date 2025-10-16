import { useNavigate } from "react-router-dom";

type propsType = {
  newAccountData: AccountData;
  setNewAccountData: React.Dispatch<React.SetStateAction<AccountData>>;
};

function CreateAccountPage(props: propsType) {
  const { newAccountData, setNewAccountData } = props;
  const navigate = useNavigate();

  const imporantSymbol = <span className="text-red-500">*</span>;
  const labelStyle ="absolute px-[0.4rem] text-[0.7rem] top-[-0.6rem] left-1 bg-gray-50 text-[#6C25FF] font-semibold";
  const inputStyle ="w-[98%] py-1.5 px-3 border-2 border-gray-300 rounded-md text-[0.8rem] font-[500] placeholder:text-gray-600 ";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAccountData({ ...newAccountData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/Profile");
  };

  return (
    <section className="transition h-[100%] w-[100%] relative flex flex-col gap-7 pt-8 justify-start">
      <header className="w-[60%] px-4 ">
        <h1 className="text-2xl font-semibold">Create your PopX account</h1>
      </header>

      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset className="px-3 flex flex-col gap-5">
          <legend className="sr-only">Create Account Form</legend>

          <div className="relative">
            <label htmlFor="name" className={labelStyle}>Full Name {imporantSymbol} </label>
            <input
              className={inputStyle}
              id="name"
              name="Fullname"
              type="text"
              placeholder="Marry Doe"
              value={newAccountData.Fullname}
              onChange={(e) => handleChange(e)}
              // required
            />
          </div>

          <div className="relative">
            <label htmlFor="phonenumber" className={labelStyle}>Phone number {imporantSymbol} </label>
            <input
              className={inputStyle}
              id="phonenumber"
              name="Phonenumber"
              type="tel"
              placeholder="Marry Doe"
              value={newAccountData.Phonenumber}
              onChange={(e) => handleChange(e)}
              // required
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className={labelStyle}>Email address {imporantSymbol}</label>
            <input
              className={inputStyle}
              id="email"
              name="Email"
              type="email"
              placeholder="Marry Doe"
              value={newAccountData.Email}
              onChange={(e) => handleChange(e)}
              // required
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className={labelStyle}> Password {imporantSymbol} </label>
            <input
              className={inputStyle}
              id="password"
              name="Password"
              type="password"
              placeholder="Marry Doe"
              value={newAccountData.Password}
              onChange={(e) => handleChange(e)}
              // required
            />
          </div>

          <div className="relative">
            <label htmlFor="companyname" className={labelStyle}> Company name </label>
            <input
              className={inputStyle}
              id="companyname"
              name="Companyname"
              type="text"
              value={newAccountData.Companyname}
              onChange={(e) => handleChange(e)}
              placeholder="Marry Doe"
            />
          </div>

          <div className="flex flex-col gap-2 px-2">
            <label className="text-[0.8rem] font-[450]">Are you an Agency?{imporantSymbol} </label>
            <div className="flex gap-3">
              <input
                id="yes"
                name="isAgency"
                type="radio"
                onChange={() =>
                  setNewAccountData({ ...newAccountData, isAgency: true })
                }
                checked={newAccountData.isAgency}
              />
              <label htmlFor="yes" className="text-[0.8rem]"> Yes </label>

              <input
                id="no"
                name="isAgency"
                type="radio"
                onChange={() =>
                  setNewAccountData({ ...newAccountData, isAgency: false })
                }
                checked={!newAccountData.isAgency}
              />
              <label htmlFor="no" className="text-[0.8rem]"> NO </label>
            </div>
          </div>

        </fieldset>

        <button
          type="submit"
          className="absolute left-2 bottom-4 w-[94%] h-[2.4rem] rounded-md font-medium bg-[#6C25FF] hover:bg-[#5b1cdb] text-white text-[0.9rem] cursor-pointer"
          aria-label="CreateAccount Button"
        >
          Create Account
        </button>

      </form>
      
    </section>
  );
}

export default CreateAccountPage;
