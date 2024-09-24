import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Data from "../components/Data"
import img from '../../public/img/team-work.avif'
import Handle from "../components/Handle"


const Service = () => {
    return (
        <>
            <Navbar />
            <Data background={'black'} heading={'The Design Of Services Page'} paragraph={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit\n
           maiores officiis itaque ducimus enim dolorum similique laboriosam.\n
           A veniam, tempora, tempore laboriosam aspernatur ducimus\n
           libero totam aperiam natus, omnis nesciunt!`} img={img} />
            <Handle />

            <Footer />




        </>
    )
}

export default Service