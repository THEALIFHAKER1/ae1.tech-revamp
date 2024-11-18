import HeroDetails from "./HeroDetails";
import HeroProfile from "./HeroProfile";

function Hero() {
    return (
        <div className="flex flex-grow h-full flex-col-reverse items-center justify-center md:flex-row  md:justify-around gap-5">
            <HeroDetails />
            <HeroProfile />
        </div>
    );
}

export default Hero;
