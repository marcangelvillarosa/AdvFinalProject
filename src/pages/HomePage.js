import React from 'react';
import { useNavigate } from "react-router-dom";




const Home = () =>
 {
    const navigate = useNavigate();
    const Gallery = () => 
    {
       navigate('/GalleryPage')
    };
    

  return (
    
    <div className="flex items-center justify-center flex-row w-screen h-screen">

       <div className='w-[20%] h-screen'>

          <div className='w-[100%] h-[10%] pl-5'>
             <img className="w-[40%]" src={require('../pics/instagram.png')} alt="placeholder" />
          </div>

            <div className='w-[100%] h-[6%] flex flex-row items-center'>
                <div className='w-[25%] h-[100%] flex justify-center items-center'>
                    <img className='w-[28%] h-[40%] cursor-pointer' src="https://cdn-icons-png.freepik.com/512/14763/14763649.png?ga=GA1.1.110904010.1677595144&" alt='placeholder'/>
                </div>
                <div className='w-[75%] h-[100%]flex items-center'>
                    <h1 className='text-lg cursor-pointer font-semibold'>Home</h1>
                </div>
            </div>

            <div className='w-[100%] h-[6%] flex flex-row items-center'>
                <div className='w-[25%] h-[100%] flex justify-center items-center'>
                    <img className='w-[28%] h-[40%] cursor-pointer' src="https://cdn-icons-png.freepik.com/512/9340/9340263.png?ga=GA1.1.110904010.1677595144&" alt='placeholder'/>
                </div>
                <div className='w-[75%] h-[100%]flex items-center'>
                    <h1 className='text-lg cursor-pointer'>Profile</h1>
                </div>
            </div>

            <div className='w-[100%] h-[6%] flex flex-row items-center'>
                <div className='w-[25%] h-[100%] flex justify-center items-center'>
                    <img className='w-[28%] h-[40%] cursor-pointer' src="https://cdn-icons-png.freepik.com/512/4302/4302169.png?ga=GA1.1.110904010.1677595144&" alt='placeholder'/>
                </div>
                <div className='w-[75%] h-[100%] flex items-center'>
                    <h1 className='text-lg cursor-pointer'>About</h1>
                </div>
            </div>

            <div className='w-[100%] h-[6%] flex flex-row items-center'>
                <div className='w-[25%] h-[100%] flex justify-center items-center'>
                    <img className='w-[28%] h-[40%] cursor-pointer' src="https://cdn-icons-png.freepik.com/512/2787/2787235.png?ga=GA1.2.417618266.1710673022&" alt='placeholder'/>
                </div>
                <div className='w-[75%] h-[100%] flex items-center'>
                    <h1 className='text-lg cursor-pointer' onClick={Gallery}>Gallery</h1>
                </div>
            </div>

            <div className='w-[100%] h-[6%] flex flex-row items-center'>
                <div className='w-[25%] h-[100%] flex justify-center items-center'>
                    <img className='w-[28%] h-[40%] cursor-pointer' src="https://cdn-icons-png.freepik.com/512/6282/6282672.png?ga=GA1.2.417618266.1710673022&" alt='placeholder'/>
                </div>
                <div className='w-[75%] h-[100%]flex items-center'>
                    <h1 className='text-lg cursor-pointer'>Messages</h1>
                </div>
            </div>

            <div className='w-[100%] h-[6%] flex flex-row items-center'>
                <div className='w-[25%] h-[100%] flex justify-center items-center'>
                    <img className='w-[28%] h-[40%] cursor-pointer' src="https://cdn-icons-png.freepik.com/512/8647/8647296.png?ga=GA1.2.417618266.1710673022&" alt='placeholder'/>
                </div>
                <div className='w-[75%] h-[100%] flex items-center'>
                    <h1 className='text-lg cursor-pointer'>Notifications</h1>
                </div>
            </div>

            <div className='w-[100%] h-[6%] flex flex-row items-center'>
                <div className='w-[25%] h-[100%] flex justify-center items-center'>
                    <img className='w-[28%] h-[40%] cursor-pointer' src="https://cdn-icons-png.freepik.com/512/3161/3161837.png?ga=GA1.2.417618266.1710673022&" alt='placeholder'/>
                </div>
                <div className='w-[75%] h-[100%] flex items-center'>
                    <h1 className='text-lg cursor-pointer'>Create</h1>
                </div>
            </div>

            <div className='w-[100%] h-[6%] flex flex-row items-center'>
                <div className='w-[25%] h-[100%] flex justify-center items-center'>
                    <img className='w-[28%] h-[40%] cursor-pointer' src="https://cdn-icons-png.freepik.com/512/11380/11380121.png?ga=GA1.2.417618266.1710673022&" alt='placeholder'/>
                </div>
                <div className='w-[75%] h-[100%] flex items-center'>
                    <h1 className='text-lg cursor-pointer'>Explore</h1>
                </div>
            </div>

            <div className='w-[100%] h-[24%]'>

            </div>

            <div className='w-[100%] h-[18%]'>

                <div className='w-[100%] h-[50%] flex flex-row'>
                  <div className='w-[25%] h-[100%] flex justify-center items-center'>
                    <img className='w-[25%] h-[30%] cursor-pointer' src="https://seeklogo.com/images/T/threads-logo-E9BA734BF6-seeklogo.com.png?v=638252100960000000" alt='placeholder'/>
                  </div>
                  <div className='w-[75%] h-[100%] flex items-center'>
                    <h1 className='text-lg cursor-pointer'>Threads</h1>
                  </div>
                </div>

                 <div className='w-[100%] h-[50%] flex flex-row'>
                   <div className='w-[25%] h-[100%] flex justify-center items-center'>
                      <img className='w-[25%] h-[30%] cursor-pointer' src="https://cdn-icons-png.freepik.com/512/2976/2976215.png?ga=GA1.1.417618266.1710673022&" alt='placeholder'/>
                    </div>
                    <div className='w-[75%] h-[100%] flex items-center'>
                         <h1 className='text-lg cursor-pointer'>More</h1>
                    </div>
                </div>
            </div>

            
        </div>

        
        <div className='w-[50%] h-screen pt-5 pb-5 bg-white flex-col flex-1 items-center justify-center overflow-y-scroll no-scrollbar'>
            
           
           
           
            <div className='w-[50%] h-[90%] ml-[25%] mb-4'>

                <div className='w-[100%] h-[7%] flex-row flex'>
                    
                    <div className='w-[10%] h-[100%] flex items-center justify-center'>
                        <img className='w-[80%] rounded-full' src='https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-1/418475802_1122996485737627_2415053131590234331_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCALvY1lfykfkKlTx4NCa1t_TIovPOgzm39Mii886DOfwkXSh1HUrMkmPIosKHMOi7_Ko4H6C4SOKwOPwiSPX_&_nc_ohc=w7A1r4uB6xkAX9glmHe&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfC5ju4DfQ-rmMzOkMTE72QYRb1-AI7_TblEvdXqvg1iMQ&oe=65FC2D39' alt='placeholder'/>
                    </div>

                    <div className='w-[90%] h-[100%] flex items-center'>
                    
                    <div className=' w-[20%] h-[100%] flex justify-center items-center'>
                        <h1 className='font-semibold'>anianoelle</h1>
                    </div>

                    <div className='h-[100%] w-[4%] flex items-center justify-center'>
                        <h1 className='text-1xl text-gray-500'>•</h1>
                    </div>

                    <div className='h-[100%] flex items-center justify-center'>
                        <h1 className='text-gray-500 text-sm'>1w</h1>
                    </div>

                    </div>

                </div>

                <div className='w-[100%] h-[70%] relative'>
                    <img className='object-cover h-[100%] w-[100%] rounded' src='https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/313297506_865727194797892_8103602686615163205_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeERYOMQrxx2fN0MTpjO9SLjPIaOCvCbGoY8ho4K8JsahjFr2M92FgyzlDQlLHqTNnsvkOR6HTNWzUpiQvKPsowp&_nc_ohc=OCZwWjm9Z20AX-ybcsS&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfBSiqx2WMIdSim5wS0_f9q0oV60L7fIVldA4Lw5ZcuzcQ&oe=65FBD1DC' alt='placeholder'/>
                </div>

                <div className='w-[100%] h-[6%] flex flex-row'>

                <div className='h-[100%] w-[35%] flex flex-row'>
                    <div className='h-[100%] w-[33%] flex justify-center items-center cursor-pointer'>
                        <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/1077/1077035.png?ga=GA1.1.110904010.1677595144&' alt='placeholder'/>
                    </div>
                    <div className='h-[100%] w-[34%] flex justify-center items-center cursor-pointer'>
                            <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/14983/14983632.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                    </div>
                    <div className='h-[100%] w-[33%] flex justify-center items-center cursor-pointer'>
                            <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/9363/9363090.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>   
                    </div>
                </div>

                <div className='h-[100%] w-[65%] flex justify-end'>
                        <div className='w-[20%] h-[100%] flex items-center justify-center'>
                            <img className='w-[45%] cursor-pointer' src='https://cdn-icons-png.freepik.com/512/5662/5662990.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                        </div>
                </div>

                </div>

                <div className='w-[100%] h-[3%] flex items-center pl-4'>
                    <h1>50,230 likes</h1>
                </div>

                <div className='w-[100%] h-[3%] flex flex-row'>
                    <div className='w-[22%] h-[100%] flex justify-center items-center'>
                        <h1 className='font-semibold text-m'>anianoelle</h1>
                    </div>
                    <div className='h-[100%] w-[78%] flex items-center'>
                        <h1>Pink</h1>
                    </div>
                </div>

                <div className='w-[100%] h-[3%]'>
                <div className='h-[100%] w-[40%] flex  justify-center items-center'>
                    <h1 className='text-gray-500 text-sm cursor-pointer'>View all 26,402 comments</h1>
                </div>
                </div>

                <div className='w-[100%] h-[4%]'>
                    <input className='w-[100%] h-[100%] p-2 outline-none text-gray-500' placeholder='Add a comment...'/>
                </div>

                <div className='w-[100%] h-[2%] border-b border-gray-300'>
                    
                </div>

            </div>




             <div className='w-[50%] h-[90%] ml-[25%] mb-4'>

                <div className='w-[100%] h-[7%] flex-row flex'>
                    
                    <div className='w-[10%] h-[100%] flex items-center justify-center'>
                        <img className='w-[80%] rounded-full' src='https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-1/418475802_1122996485737627_2415053131590234331_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCALvY1lfykfkKlTx4NCa1t_TIovPOgzm39Mii886DOfwkXSh1HUrMkmPIosKHMOi7_Ko4H6C4SOKwOPwiSPX_&_nc_ohc=w7A1r4uB6xkAX9glmHe&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfC5ju4DfQ-rmMzOkMTE72QYRb1-AI7_TblEvdXqvg1iMQ&oe=65FC2D39' alt='placeholder'/>
                    </div>

                    <div className='w-[90%] h-[100%] flex items-center'>
                    
                    <div className=' w-[20%] h-[100%] flex justify-center items-center'>
                        <h1 className='font-semibold'>anianoelle</h1>
                    </div>

                    <div className='h-[100%] w-[4%] flex items-center justify-center'>
                        <h1 className='text-1xl text-gray-500'>•</h1>
                    </div>

                    <div className='h-[100%] flex items-center justify-center'>
                        <h1 className='text-gray-500 text-sm'>2w</h1>
                    </div>

                    </div>

                </div>

                <div className='w-[100%] h-[70%] relative'>
                    <img className='object-cover h-[100%] w-[100%] rounded' src='https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/411582348_1108805817156694_5553915549463051015_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHe5EFkHn2Ma4J9aLZN9Cw2HgwTUoeIxIweDBNSh4jEjLyaIVzsATqAwqv2YM2wpBx-6Nklex2Sh7z9zQmCc4GG&_nc_ohc=UKOPWShiPlkAX8hJGFw&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfDF40nKUnxPp7sX1UNoXYsIKUyZowBu3wKfBF5tEiIYZA&oe=65FCFB40' alt='placeholder'/>
                </div>

                <div className='w-[100%] h-[6%] flex flex-row'>

                <div className='h-[100%] w-[35%] flex flex-row'>
                    <div className='h-[100%] w-[33%] flex justify-center items-center cursor-pointer'>
                        <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/1077/1077035.png?ga=GA1.1.110904010.1677595144&' alt='placeholder'/>
                    </div>
                    <div className='h-[100%] w-[34%] flex justify-center items-center cursor-pointer'>
                            <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/14983/14983632.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                    </div>
                    <div className='h-[100%] w-[33%] flex justify-center items-center cursor-pointer'>
                            <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/9363/9363090.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>   
                    </div>
                </div>

                <div className='h-[100%] w-[65%] flex justify-end'>
                        <div className='w-[20%] h-[100%] flex items-center justify-center'>
                            <img className='w-[45%] cursor-pointer' src='https://cdn-icons-png.freepik.com/512/5662/5662990.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                        </div>
                </div>

                </div>

                <div className='w-[100%] h-[3%] flex items-center pl-4'>
                    <h1>50,230 likes</h1>
                </div>

                <div className='w-[100%] h-[3%] flex flex-row'>
                    <div className='w-[22%] h-[100%] flex justify-center items-center'>
                        <h1 className='font-semibold text-m'>anianoelle</h1>
                    </div>
                    <div className='h-[100%] w-[78%] flex items-center'>
                        <h1>Eyyy, Angas</h1>
                    </div>
                </div>

                <div className='w-[100%] h-[3%]'>
                <div className='h-[100%] w-[40%] flex  justify-center items-center'>
                    <h1 className='text-gray-500 text-sm cursor-pointer'>View all 26,402 comments</h1>
                </div>
                </div>

                <div className='w-[100%] h-[4%]'>
                    <input className='w-[100%] h-[100%] p-2 outline-none text-gray-500' placeholder='Add a comment...'/>
                </div>

                <div className='w-[100%] h-[2%] border-b border-gray-300'>
                    
                </div>

            </div>




             <div className='w-[50%] h-[90%] ml-[25%] mb-4'>

                <div className='w-[100%] h-[7%] flex-row flex'>
                    
                    <div className='w-[10%] h-[100%] flex items-center justify-center'>
                        <img className='w-[80%] rounded-full' src='https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-1/418475802_1122996485737627_2415053131590234331_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCALvY1lfykfkKlTx4NCa1t_TIovPOgzm39Mii886DOfwkXSh1HUrMkmPIosKHMOi7_Ko4H6C4SOKwOPwiSPX_&_nc_ohc=w7A1r4uB6xkAX9glmHe&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfC5ju4DfQ-rmMzOkMTE72QYRb1-AI7_TblEvdXqvg1iMQ&oe=65FC2D39' alt='placeholder'/>
                    </div>

                    <div className='w-[90%] h-[100%] flex items-center'>
                    
                    <div className=' w-[20%] h-[100%] flex justify-center items-center'>
                        <h1 className='font-semibold'>anianoelle</h1>
                    </div>

                    <div className='h-[100%] w-[4%] flex items-center justify-center'>
                        <h1 className='text-1xl text-gray-500'>•</h1>
                    </div>

                    <div className='h-[100%] flex items-center justify-center'>
                        <h1 className='text-gray-500 text-sm'>1d</h1>
                    </div>

                    </div>

                </div>

                <div className='w-[100%] h-[70%] relative'>
                    <img className='object-cover h-[100%] w-[100%] rounded' src='https://scontent-xsp2-1.xx.fbcdn.net/v/t39.30808-6/280940702_750146399689306_5268089851881487243_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGU2KywZg3erosdyuGrZcGrtBJYgVuMkc20EliBW4yRzfYHLKWStIFi5pnTI4nKq9cijrcmXY-jf5IPBHjcBDQv&_nc_ohc=NMSzIA9guCQAX9yIPTP&_nc_ht=scontent-xsp2-1.xx&oh=00_AfBeHbzAGw3tkymP_vYuymOXFcXaGIOROop9uYLgAl8kGA&oe=65FC8A8E' alt='placeholder'/>
                </div>

                <div className='w-[100%] h-[6%] flex flex-row'>

                <div className='h-[100%] w-[35%] flex flex-row'>
                    <div className='h-[100%] w-[33%] flex justify-center items-center cursor-pointer'>
                        <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/1077/1077035.png?ga=GA1.1.110904010.1677595144&' alt='placeholder'/>
                    </div>
                    <div className='h-[100%] w-[34%] flex justify-center items-center cursor-pointer'>
                            <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/14983/14983632.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                    </div>
                    <div className='h-[100%] w-[33%] flex justify-center items-center cursor-pointer'>
                            <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/9363/9363090.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>   
                    </div>
                </div>

                <div className='h-[100%] w-[65%] flex justify-end'>
                        <div className='w-[20%] h-[100%] flex items-center justify-center'>
                            <img className='w-[45%] cursor-pointer' src='https://cdn-icons-png.freepik.com/512/5662/5662990.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                        </div>
                </div>

                </div>

                <div className='w-[100%] h-[3%] flex items-center pl-4'>
                    <h1>50,230 likes</h1>
                </div>

                <div className='w-[100%] h-[3%] flex flex-row'>
                    <div className='w-[22%] h-[100%] flex justify-center items-center'>
                        <h1 className='font-semibold text-m'>anianoelle</h1>
                    </div>
                    <div className='h-[100%] w-[78%] flex items-center'>
                        <h1>Slay</h1>
                    </div>
                </div>

                <div className='w-[100%] h-[3%]'>
                <div className='h-[100%] w-[40%] flex  justify-center items-center'>
                    <h1 className='text-gray-500 text-sm cursor-pointer'>View all 26,402 comments</h1>
                </div>
                </div>

                <div className='w-[100%] h-[4%]'>
                    <input className='w-[100%] h-[100%] p-2 outline-none text-gray-500' placeholder='Add a comment...'/>
                </div>

                <div className='w-[100%] h-[2%] border-b border-gray-300'>
                    
                </div>

            </div>




             <div className='w-[50%] h-[90%] ml-[25%] mb-4'>

                <div className='w-[100%] h-[7%] flex-row flex'>
                    
                    <div className='w-[10%] h-[100%] flex items-center justify-center'>
                        <img className='w-[80%] rounded-full' src='https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-1/418475802_1122996485737627_2415053131590234331_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCALvY1lfykfkKlTx4NCa1t_TIovPOgzm39Mii886DOfwkXSh1HUrMkmPIosKHMOi7_Ko4H6C4SOKwOPwiSPX_&_nc_ohc=w7A1r4uB6xkAX9glmHe&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfC5ju4DfQ-rmMzOkMTE72QYRb1-AI7_TblEvdXqvg1iMQ&oe=65FC2D39' alt='placeholder'/>
                    </div>

                    <div className='w-[90%] h-[100%] flex items-center'>
                    
                    <div className=' w-[20%] h-[100%] flex justify-center items-center'>
                        <h1 className='font-semibold'>anianoelle</h1>
                    </div>

                    <div className='h-[100%] w-[4%] flex items-center justify-center'>
                        <h1 className='text-1xl text-gray-500'>•</h1>
                    </div>

                    <div className='h-[100%] flex items-center justify-center'>
                        <h1 className='text-gray-500 text-sm'>1y</h1>
                    </div>

                    </div>

                </div>

                <div className='w-[100%] h-[70%] relative'>
                    <img className='object-cover h-[100%] w-[100%] rounded' src='https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/329838485_589247149924301_2350431644447944852_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHphjV0wNQY6Vj25I5cowMuinKmwlYmxy6KcqbCVibHL4Yq5MRBk35j302B7oHPtrR_62xNAU0o_eBIRTQEA2W&_nc_ohc=BDFAHxvKowEAX_UBaCx&_nc_ht=scontent-mnl1-1.xx&oh=00_AfDyciY0_Nu1gCSpyrsN0KGVCW3pLwWNrM3N9LsN1pacJw&oe=65FD407B' alt='placeholder'/>
                </div>

                <div className='w-[100%] h-[6%] flex flex-row'>

                <div className='h-[100%] w-[35%] flex flex-row'>
                    <div className='h-[100%] w-[33%] flex justify-center items-center cursor-pointer'>
                        <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/1077/1077035.png?ga=GA1.1.110904010.1677595144&' alt='placeholder'/>
                    </div>
                    <div className='h-[100%] w-[34%] flex justify-center items-center cursor-pointer'>
                            <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/14983/14983632.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                    </div>
                    <div className='h-[100%] w-[33%] flex justify-center items-center cursor-pointer'>
                            <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/9363/9363090.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>   
                    </div>
                </div>

                <div className='h-[100%] w-[65%] flex justify-end'>
                        <div className='w-[20%] h-[100%] flex items-center justify-center'>
                            <img className='w-[45%] cursor-pointer' src='https://cdn-icons-png.freepik.com/512/5662/5662990.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                        </div>
                </div>

                </div>

                <div className='w-[100%] h-[3%] flex items-center pl-4'>
                    <h1>50,230 likes</h1>
                </div>

                <div className='w-[100%] h-[3%] flex flex-row'>
                    <div className='w-[22%] h-[100%] flex justify-center items-center'>
                        <h1 className='font-semibold text-m'>anianoelle</h1>
                    </div>
                    <div className='h-[100%] w-[78%] flex items-center'>
                        <h1>My Tahanan</h1>
                    </div>
                </div>

                <div className='w-[100%] h-[3%]'>
                <div className='h-[100%] w-[40%] flex  justify-center items-center'>
                    <h1 className='text-gray-500 text-sm cursor-pointer'>View all 26,402 comments</h1>
                </div>
                </div>

                <div className='w-[100%] h-[4%]'>
                    <input className='w-[100%] h-[100%] p-2 outline-none text-gray-500' placeholder='Add a comment...'/>
                </div>

                <div className='w-[100%] h-[2%] border-b border-gray-300'>
                    
                </div>

            </div>




             <div className='w-[50%] h-[90%] ml-[25%] mb-4'>

                <div className='w-[100%] h-[7%] flex-row flex'>
                    
                    <div className='w-[10%] h-[100%] flex items-center justify-center'>
                        <img className='w-[80%] rounded-full' src='https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-1/418475802_1122996485737627_2415053131590234331_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCALvY1lfykfkKlTx4NCa1t_TIovPOgzm39Mii886DOfwkXSh1HUrMkmPIosKHMOi7_Ko4H6C4SOKwOPwiSPX_&_nc_ohc=w7A1r4uB6xkAX9glmHe&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfC5ju4DfQ-rmMzOkMTE72QYRb1-AI7_TblEvdXqvg1iMQ&oe=65FC2D39' alt='placeholder'/>
                    </div>

                    <div className='w-[90%] h-[100%] flex items-center'>
                    
                    <div className=' w-[20%] h-[100%] flex justify-center items-center'>
                        <h1 className='font-semibold'>anianoelle</h1>
                    </div>

                    <div className='h-[100%] w-[4%] flex items-center justify-center'>
                        <h1 className='text-1xl text-gray-500'>•</h1>
                    </div>

                    <div className='h-[100%] flex items-center justify-center'>
                        <h1 className='text-gray-500 text-sm'>4w</h1>
                    </div>

                    </div>

                </div>

                <div className='w-[100%] h-[70%] relative'>
                    <img className='object-cover h-[100%] w-[100%] rounded' src='https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/369260296_317644814044707_1590605268178461743_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEqYDMBxyb_fA4VkAQDauEK1-4hCmDh6EHX7iEKYOHoQSmOOHjYnXFuN5yzHVB5aV3wvJXR5zV6bU5KJxc8Bkpi&_nc_ohc=XKEq1RLc2KIAX-dTlzx&_nc_ht=scontent-mnl1-1.xx&oh=00_AfAP9uASebjksi2MZWLfJEkGUPwnXbJhQvX7AIxMc8FPhw&oe=65FD332C' alt='placeholder'/>
                </div>

                <div className='w-[100%] h-[6%] flex flex-row'>

                <div className='h-[100%] w-[35%] flex flex-row'>
                    <div className='h-[100%] w-[33%] flex justify-center items-center cursor-pointer'>
                        <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/1077/1077035.png?ga=GA1.1.110904010.1677595144&' alt='placeholder'/>
                    </div>
                    <div className='h-[100%] w-[34%] flex justify-center items-center cursor-pointer'>
                            <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/14983/14983632.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                    </div>
                    <div className='h-[100%] w-[33%] flex justify-center items-center cursor-pointer'>
                            <img className='w-[45%]' src='https://cdn-icons-png.freepik.com/512/9363/9363090.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>   
                    </div>
                </div>

                <div className='h-[100%] w-[65%] flex justify-end'>
                        <div className='w-[20%] h-[100%] flex items-center justify-center'>
                            <img className='w-[45%] cursor-pointer' src='https://cdn-icons-png.freepik.com/512/5662/5662990.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                        </div>
                </div>

                </div>

                <div className='w-[100%] h-[3%] flex items-center pl-4'>
                    <h1>50,230 likes</h1>
                </div>

                <div className='w-[100%] h-[3%] flex flex-row'>
                    <div className='w-[22%] h-[100%] flex justify-center items-center'>
                        <h1 className='font-semibold text-m'>anianoelle</h1>
                    </div>
                    <div className='h-[100%] w-[78%] flex items-center'>
                        <h1>Metrobank</h1>
                    </div>
                </div>

                <div className='w-[100%] h-[3%]'>
                <div className='h-[100%] w-[40%] flex  justify-center items-center'>
                    <h1 className='text-gray-500 text-sm cursor-pointer'>View all 26,402 comments</h1>
                </div>
                </div>

                <div className='w-[100%] h-[4%]'>
                    <input className='w-[100%] h-[100%] p-2 outline-none text-gray-500' placeholder='Add a comment...'/>
                </div>

                <div className='w-[100%] h-[2%] border-b border-gray-300'>
                    
                </div>

            </div>

            <div className='w-[50%] h-[25%] mb-4 ml-[25%]'>
                <div className='w-[100%] h-[50%] flex justify-center items-center'>
                    <img className='w-[25%]' src='https://cdn-icons-png.freepik.com/512/10747/10747288.png?ga=GA1.1.417618266.1710673022&' alt='placehoolder'/>
                </div>
                <div className='w-[100%] h-[10%] flex justify-center items-center'>
                    <h1 className='text-xl'>You're all caught up</h1>
                </div>
                <div className='w-[100%] h-[10%] flex justify-center items-center'>
                    <h1 className='text-sm text-gray-500'>You've seen all new posts from the past 3 days.</h1>
                </div>
                <div className='w-[100%] h-[20%] flex justify-center items-center'>
                <h1 className='text-sm text-blue-600 text-l font-semibold cursor-pointer'>View older posts</h1>
                </div>
                <div className='w-[100%] h-[10%] border-b border-gray-300'>

                </div>
            </div>

           
        </div>


        <div className='w-[30%] h-screen'>

        </div>

    </div>
  );
};

export default Home;