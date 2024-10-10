import Navbar from "../components/Navbar"
import Data from "../components/Data"
import Footer from "../components/Footer"
import img from '../../public/img/cleaning.png'
import Badges from "../components/Badges"
import TestimonlDropdowns from "../components/TestimonlDropdowns"
const About = ({ }) => {
    return (
        <>
            <Navbar />
            <Data background={'black'} heading={'The Design Of About Page '} paragraph={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit\n
            maiores officiis itaque ducimus enim dolorum similique laboriosam.\nA veniam, tempora, tempore laboriosam aspernatur ducimus\n libero totam aperiam natus, omnis nesciunt!`} img={img} />
            <Badges />
            <TestimonlDropdowns />
            < Footer />



        </>
    )
}

export default About