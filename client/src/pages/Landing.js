import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components";
import {Link} from "react-router-dom";

const Landing = () =>
{
    return (
        <Wrapper>
            <Logo />
            <div className="container page">
                <div className="info">
                    <h1>
                        Job <span>Tracking</span> App
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Volutpat odio facilisis mauris sit. Quis lectus
                        nulla at volutpat diam ut venenatis tellus. Sit amet nisl
                        suscipit adipiscing bibendum est ultricies integer.
                    </p>
                    <Link to="/register" className="btn btn-hero">Login/Register</Link>
                </div>
                <div>
                    <img src={main} alt="job hunt" className="img main-img" />
                </div>
            </div>
        </Wrapper>
    );
};

export default Landing;