import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { backgroundImg } from "../utils/constants";
const GptSerach = () => {
 return (
    <div className="">
    <div className="-z-10 absolute">
        <img src={backgroundImg} alt="" className="w-screen h-screen object-cover"/>
    </div>
       <GptSearchBar />
       <GptMovieSuggestion />
    </div>
 )
};

export default GptSerach;