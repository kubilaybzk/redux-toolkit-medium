import { useSelector, useDispatch } from "react-redux";
export default function Button({ Text, func }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(func())}
      className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer outline-none"
    >
      <span className="m-auto text-2xl font-thin">{Text}</span>
    </button>
  );
}
