import img1 from "../image/Ava.jpg";
import { Link, useNavigate } from 'react-router-dom';
const QuizHeader = ({ name, Class, showScore, setShowScore }) => {
   const navigate = useNavigate()
  return (
    <header className="bg-white py-1 sticky top-0 z-50 flex">
      <nav className="flex items-center justify-between w-[92%] mx-auto">
      <img className="w-[3.8rem]" src={img1} alt="school logo" />
        <div className="flex text-4xl pt-1">
          <div className="flex justify-between">
            <svg
              className="border-2 border-t-stone-600 rounded-[100%] text-[2.7rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M6 30h20v-5a7.01 7.01 0 0 0-7-7h-6a7.01 7.01 0 0 0-7 7zM9 9a7 7 0 1 0 7-7a7 7 0 0 0-7 7"
              />
            </svg>
            <p className="text-[10px] leading-3 pl-2 pt-1">
              <b>Welcome</b> {name}
              <br /> <b>Class:</b> {Class}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>{setShowScore(true); showScore && navigate("/Quiz-App/")}}
            className="pl-[2%] rounded-lg hover:text-[gray]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M20 13V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H14" />
                <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20m-4 13h6m0 0l-3-3m3 3l-3 3" />
              </g>
            </svg>
            <p className="text-sm">{showScore?"Home":"Submit"}</p>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default QuizHeader;
