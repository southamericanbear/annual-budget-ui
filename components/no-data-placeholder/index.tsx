import { FaRobot } from "react-icons/fa";

export const NoDataPlaceHolder = () => {
  return (
    <>
      <p className="text-gray-300 text-lg font-semibold mb-4">
        There is no data to display. Please add some data to get started.
      </p>
      <FaRobot className="text-5xl text-gray-300" />
    </>
  );
};
