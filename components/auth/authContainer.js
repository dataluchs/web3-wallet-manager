const AuthContainer = ({ backgroundText, title, content }) => {
  return (
    <main className="">
      <div className="min-h-screen70 items-center flex flex-col justify-center sm:py-12">
        <h1
          className="rainbowText lg:text-6xl sm:text-5xl text-2xl font-bold text-center max-w-5xl mt-12 mb-12 p-5"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {backgroundText}
        </h1>
        <div
          className="dark:bg-gray-900 glowBackground dark:bg-opacity-80 shadow-strong dark:border-gray-700 dark:text-white bg-white border-2 rounded-xl border-gray-200 p-10 xs:p-0 mx-auto md:w-full md:max-w-md"
          style={{ boxShadow: "0px 4px 50px 10px rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="font-bold text-center text-3xl mb-12">{title}</h1>

          {content}
        </div>
        <div className="dark:text-gray-200 my-10 pt-10 flex justify-center items-center">
          <p>Developed with ❤ by web3pioneers.com</p>
        </div>
      </div>
    </main>
  );
};

export default AuthContainer;
