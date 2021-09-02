const InfoCard = ({ title, content }) => {
  return (
    <div className="test">
      <div className="items-center flex flex-col justify-center py-4">
        <div
          className=" dark:bg-gray-900 dark:bg-opacity-80 shadow-strong dark:border-gray-700 dark:text-white bg-white border-2 rounded-xl border-gray-200 p-10 xs:p-0 mx-auto md:w-full md:max-w-md"
          style={{ boxShadow: "0px 4px 50px 10px rgba(0, 0, 0, 0.5)" }}
        >
          <h3 className="font-bold text-center text-3xl mb-12">{title}</h3>

          {content}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
