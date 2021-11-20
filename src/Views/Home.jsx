import RenderCard from '../Components/RenderCard'

import img1 from '../Imgs/img1.jpg'
import img2 from '../Imgs/img2.jpg'
import img3 from '../Imgs/img3.jpg'

import '../Styles/RenderCard.css'

const Home = () => {
    return (
        <div className="main-container">
            <RenderCard
                img1={img1}
                img2={img2}
                img3={img3}
            />
        </div>
    )
}

export default Home
