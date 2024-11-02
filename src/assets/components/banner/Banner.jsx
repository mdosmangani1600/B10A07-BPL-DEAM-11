

import './banner.css'

import bannerLogo from '../image/banner-main.png'

const Banner = () => {
    return (
        <div className="bg-slate-800 rounded-3xl banner flex flex-col text-white space-y-7 p-10 mt-10">
            <img src={bannerLogo} alt="" />
             <h2 className='font-bold text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
             <p>Beyond Boundaries Beyond Limits</p>
             <button className='p-2 bg-lime-200 text-black font-bold rounded-xl'>Claim Free Credit</button>
             
            
        </div>
    );
};

export default Banner;