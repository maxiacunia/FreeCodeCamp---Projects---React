import './index.scss';
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm
                    Maximiliano
                    <br />
                    Full Stack Developer
                </h1>
                <h2>JavaScript / React / Node / Sequelize</h2>
                <Link to='/contact' className='flat-button'>Contact me</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home;