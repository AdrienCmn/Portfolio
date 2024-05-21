import './Social.scss'

const Social = ({logo, title, link}) => {
    return (
        <div className='social'>
            <img src={logo} alt="" />
            <h1>{title}</h1>
            <a href={link}></a>
        </div>
    )
}

export default Social