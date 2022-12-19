export const HeaderPag = ({Title}) =>{


    return(
        <div className='HeaderPag bg-white'>
                <div className='Title justify-center text-center mt-3 mb-3'>
                    <h2 className='text-3xl font-Lato'>RENDEZ-VOUS</h2>
                    <span className='subtitle ml-24 font-Karla'>magazine</span>
                </div>
                <div className='Edition border-t-2 border-b-2 px-2 border-black flex items-stretch place-content-between'>
                    <div className=' ml-5 text-sm font-Lato mt-1 mb-1'> Diciembre 2022</div>
                    <div className=' ml-5 text-sm font-Lato mt-1 mb-1'>Panamá y Latinoamérica</div>
                </div>
                <div className='border-b-7 border-black'>
                    <h3 className='font-Playfair text-4xl font-bold mb-3 mt-1 text-center'>{Title}</h3>
                </div>
        </div>
    );
}