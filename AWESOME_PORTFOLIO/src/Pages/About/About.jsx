import InfoCard from '../../Components/Header/InfoCard/InfoCard';
import './About.scss';

const About = () => {
    return <div className='about'>
        <div className='name'>
        <div>
            <h1 className='txt'>AB <br/> OU
            </h1>
            </div>
            <h1 className="txt lg">T</h1>

            <div className="me">ME</div>
        </div>

        <div className="info">
            <InfoCard title="About Me" details="I'm currently undergoing professional retraining and studying for a diploma
            in application design and development (Bac +3) at AdaTechSchool in Lyon.
            I decided to go back to school in this field because I've always had a passion for IT,
            but I had to work to support myself after taking the wrong career path,
            I'm a creative and curious person, I like working in a team and being in contact with people." 
            />
            <InfoCard title="Education"  details="I have a vocational baccalaureate in Management and Administration which I obtained in 2017 at the Lycée Saint Joseph in Auxerre.
Since October 2023, I've been at AdaTechSchool for a period of 9 months to train and at the end of these 9 months I have to find an alternation to put my knowledge into practice in order to prepare for my diploma, which will be in 2025."
            />
            <InfoCard title="Skills" details="Over the past few years, I've been able to acquire professional skills that have allowed me to grow personally and will serve me well in the tech industry. In terms of hard skills, during my education, I've learned how to learn and have been exposed to various programming languages. My future aspiration is to become a front-end developer, so I'm currently focusing on HTML, CSS, Tailwind, JavaScript and his differents frameworks, although I have prior experience with languages such as PHP, Java, and SQL."
            />
            <InfoCard title="Social Life" details="In life, I have several different hobbies such as analog photography, design (I enjoy creating various things), and I'm fond of fitness.
            Additionally, I enjoy traveling and exploring new cultures, new horizons."
            />
        </div>
    </div>
}

export default About