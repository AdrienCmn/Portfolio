import './Home.scss'
import profile from "../../assets/profile.jpeg"

const Home = () => {
    return <div className="home">
        <div className="details">
            <span className="intro">Hello, I'm</span>

            <div className="name">
                <div>
                    <h1 className='text'>
                        AD <br/>
                        RI <br/> 
                        EN
                    </h1>
                </div>
                <div className='stack'>
                    <h3>FULL-STACK <b> DEVELOPER STUDENT</b></h3>
                </div>
            </div>
        </div>

        <div className="profile-img">
            <img src={profile} alt="" />
        </div>
    </div>
}

export default Home