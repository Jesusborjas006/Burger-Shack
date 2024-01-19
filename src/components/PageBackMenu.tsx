import { Link } from "react-router-dom";

const PageBackMenu = () => {
  return (
    <div className="w-full text-white bg-black font-semibold p-2 px-6 text-lg flex items-center">
      <Link to="/">
        <span className="mr-3">&lt;</span> Menu
      </Link>
    </div>
  );
};

export default PageBackMenu;
