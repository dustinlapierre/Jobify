import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () =>
{
    return (
        <main>
            <nav>
                <img src={logo} alt="jobify" className="logo" />
            </nav>
            <div className="container">
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
                    <button className="btn btn-hero">Login/Register</button>
                    <div>
                        <img src={main} alt="job hunt" className="img main-img" />
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Landing;