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
                    <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>Send and Receive Crypto for All ©</p>
                    <p className='text-white justify-between items-center my-4'>For more info, contact us at info@kryptotoolkit.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;