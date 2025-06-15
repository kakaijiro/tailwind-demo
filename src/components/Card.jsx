import { Link } from "react-router-dom";

function Card({ title, image, link }) {
  return (
    <Link to={link}>
      <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 max-w-3xl w-full border-2 border-gray-200 group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-top object-cover mt-2 px-2 group-hover:scale-110 duration-300"
        />
        <div className="px-2 pt-4 pb-1 ">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
