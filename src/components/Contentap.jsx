import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Contentap = ({item}) => {
    return (
        <div className="home-sec-1-content content-wrapper">
            {item.map((items, index) => {
                if (items.p) {
                return <p key={index}>{items.p}</p>
                } else if (items.h) {
                const HeadingTag = items.h[0];
                return <HeadingTag key={index+items.h[0]}>{items.h[1]}</HeadingTag>;
                } else if (items.button) {
                return (
                    <Link to={items.button.href} key={index+items.button.title} className="content-btn-d">
                    {items.button.title} {items.button.icon}
                    </Link>
                );
                } else if (items.img) {
                return (
                    <div key={items.img.src} className="img-wrapper">
                    <img src={items.img.src} alt={items.img.alt || "Image"}  />
                    </div>
                );
                }
                return null;
            })}
        </div>
    )
}
Contentap.propTypes={
    item: PropTypes.array
}
export default Contentap
