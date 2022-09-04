import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
            <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
                <div className='flex flex-[0.5] justify-center items-center'>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-40'
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;