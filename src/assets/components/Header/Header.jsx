
import logo from '../image/logo.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <img className="" src={logo} alt="" />
            <div className='space-x-10'>
                <a href="">Home</a>
                <a href="">Fixture</a>
                <a href="">Teams</a>
                <a href="">Schedules</a>
                <button className='font-bold text-xl border-2 p-2 rounded-xl'>0 Coin <i className="fa-brands fa-bitcoin"></i></button>
            </div>
            
        </div>
    );
};

export default Header;

