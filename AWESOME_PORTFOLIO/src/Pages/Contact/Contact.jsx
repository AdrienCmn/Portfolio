import Social from '../../Components/Header/Social/Social'
import './Contact.scss'

import github from '../../assets/Github_white.png'
import linkedin from '../../assets/LinkedIN_white.png'
import discord from '../../assets/Discord_white.png'
import whatsapp from '../../assets/WhatsApp_white.png'
import mail from '../../assets/Mail_ru_white.png'

const Contact = () => {
    return (
    <div className='contact'>
        <h1>Get in Touch</h1>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Odio minima dolorem tenetur molestiae explicabo libero ducimus?
            Hic iste repellat inventore.
        </span>

        <div className="socials">
            <Social logo={github} title="GitHub" />
            <Social logo={linkedin} title="Linkedin" />
            <Social logo={discord} title="Discord" />
            <Social logo={whatsapp} title="WhatsApp" />
            <Social logo={mail} title="E-mail" />
        </div>
    </div>

    )    
}

export default Contact