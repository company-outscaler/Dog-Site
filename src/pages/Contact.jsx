import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import img from '../../public/img/frame.png'
import Data from "../components/Data"
import ContactForm from "../components/ContactForm"
const Contact = () => {
    return (
        <>
            <Navbar />
            <Data background={'black'} heading={'The Design Of Services Page'} paragraph={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit\n
           maiores officiis itaque ducimus enim dolorum similique laboriosam.\n
           A veniam, tempora, tempore laboriosam aspernatur ducimus\n
           libero totam aperiam natus, omnis nesciunt!`} img={img} />
            <ContactForm />
            <Footer />

        </>
    )
}

export default Contact