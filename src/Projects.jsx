import Works from "./Works"
import Contentap from "./components/Contentap"
import PropTypes from "prop-types"

const Projects = ({itemcontcom}) => {
    
    return (
        <>
            <Works/>
            <section>
                <div className="container text-center pad-home-wrap">
                    <Contentap  item={itemcontcom} />
                </div>
            </section>
        </>
    )
}
Projects.propTypes={
    itemcontcom:PropTypes.array
}
export default Projects
