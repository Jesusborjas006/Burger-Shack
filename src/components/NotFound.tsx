import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h3 className="font-bold text-3xl">Page Not Found</h3>
      <button className="border px-3 py-1" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
