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
            <InfoCard title="About Me" details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Animi dolores labore cum, et deserunt, ipsam vel tempora, dicta a doloremque quisquam?
            Sapiente accusamus voluptates natus commodi dolorum! Praesentium sed pariatur rerum modi tenetur
            , iusto voluptatum fuga doloremque adipisci atque commodi? Unde cum tempore voluptates!
            Similique asperiores nihil soluta velit!" 
            />
            <InfoCard title="Education"  details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Animi dolores labore cum, et deserunt, ipsam vel tempora, dicta a doloremque quisquam?
            Sapiente accusamus voluptates natus commodi dolorum! Praesentium sed pariatur rerum modi tenetur
            , iusto voluptatum fuga doloremque adipisci atque commodi? Unde cum tempore voluptates!
            Similique asperiores nihil soluta velit!"
            />
            <InfoCard title="Skills" details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Animi dolores labore cum, et deserunt, ipsam vel tempora, dicta a doloremque quisquam?
            Sapiente accusamus voluptates natus commodi dolorum! Praesentium sed pariatur rerum modi tenetur
            , iusto voluptatum fuga doloremque adipisci atque commodi? Unde cum tempore voluptates!
            Similique asperiores nihil soluta velit!"
            />
            <InfoCard title="Social Life" details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Animi dolores labore cum, et deserunt, ipsam vel tempora, dicta a doloremque quisquam?
            Sapiente accusamus voluptates natus commodi dolorum! Praesentium sed pariatur rerum modi tenetur
            , iusto voluptatum fuga doloremque adipisci atque commodi? Unde cum tempore voluptates!
            Similique asperiores nihil soluta velit!"
            />
        </div>
    </div>
}

export default About