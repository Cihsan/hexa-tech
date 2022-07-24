import { Collapse } from "react-daisyui";

const Testimonial = () => {
    return (
        <div>
            <span>TESTIMONIALS</span>
            <h1>Words from Client</h1>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>tabindex=`0` attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;