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
        <span>
Feel free to contact me if you'd like more information or if you're interested in collaborating. I'd be delighted to respond.
        </span>

        <div className="socials">
            <Social logo={github} title="GitHub"/> 
            <Social logo={linkedin} title="Linkedin" />
            <Social logo={mail} title="E-mail" />
        </div>

        <footer>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus, sed quaerat vitae quam nesciunt.</span>
        </footer>
    </div>

    )    
}

export default Contact