type propsType = {
    newAccountData?:AccountData
}

function Profile(props:propsType) {
    const {newAccountData} = props
  return (
    <section className="transition h-[97%]  mt-4 flex flex-col gap-4 justify-center">
      <h1 className="font-semibold text-gray-700 px-2">Account Settings</h1>
      <section className="h-[100%]  bg-gray-50 flex flex-col gap-4 px-3 py-5">
        <figure className="w-full flex">
         <img src="/Ellipse 114.png" width={64} height={64}></img>
         <img className="relative top-5 right-4" src="/Group 1585.svg"></img>
         <figcaption className="flex flex-col ml-1">
            <span className="font-semibold text-[0.9rem]">{newAccountData?.Fullname || "Marry Doe"}</span>
            <span className="font-[450] text-[0.8rem]">{newAccountData?.Email || "Marry@Gmail.com"}</span>
         </figcaption>
        </figure>
          <p className="text-[0.82rem] font-semibold text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus tempore deserunt molestias repudiandae saepe est corporis </p>
      <hr className=" border-[1.8px] border-gray-200 border-dotted" />
      </section>
    </section>
  )
}

export default Profile
