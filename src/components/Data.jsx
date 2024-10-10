import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation will happen only once when scrolling down
        });
    }, []);
}

const Data = ({ background, heading, paragraph, img }) => {
    const navigate = useNavigate();
    return (
        <>
            <section className="bg" style={{ background: background }}>
                <div className="container">
                    <div className="row ">
                        <div className="about-text col-md-8 d-flex flex-column justify-content-start mt-0" data-aos="fade-right"
                            data-aos-duration="2000">
                            <h1 className="fw-bolder text-black text-start">{heading}</h1>
                            <p className="fw-bolder mb-5 text-white">
                                {paragraph}
                            </p>
                            <div className="d-flex mb-">
                                <button onClick={() => navigate('/Contact')} type="button" className="btn btn-enimi btn-info text-white fs-5">Contact us</button>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-left"
                            data-aos-duration="2000">
                            <div className="mb-3">
                                <img src={img} className="img-fluid" alt="" style={{ width: '100%', height: 'auto', aspectRatio: '1/1' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Data;
