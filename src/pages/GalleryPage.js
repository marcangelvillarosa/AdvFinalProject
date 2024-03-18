import React from 'react';
import { useNavigate } from "react-router-dom";

const Gallery = () => 
{

const navigate = useNavigate();
const Home= () => 
{
   navigate('/HomePage')
};

  return (
    <div className="flex items-center justify-center flex-row w-screen h-screen overflow-hidden">


        <div className='w-[20%] h-screen'>

          <div className='w-[100%] h-[10%] pl-5'>
             <img className="w-[40%]" src={require('../pics/instagram.png')} alt="placeholder" />
          </div>

            <div className='w-[100%] h-[6%] flex flex-row items-center'>
                <div className='w-[25%] h-[100%] flex justify-center items-center'>
                    <img className='w-[28%] h-[40%] cursor-pointer' src="https://cdn-icons-png.freepik.com/512/14763/14763649.png?ga=GA1.1.110904010.1677595144&" alt='placeholder'/>
                </div>
                <div className='w-[75%] h-[100%]flex items-center'>
                    <h1 className='text-lg cursor-pointer' onClick={Home}>Home</h1>
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
                    <h1 className='text-lg font-semibold cursor-pointer'>Gallery</h1>
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


       
        <div className='w-[80%] overflow-y-scroll h-screen'>

            <div className='w-[100%] h-[40%]'>
            <div className='w-[100%] h-[60%] flex justify-center items-center'>
                    
                    <div className='w-[20%] h-[100%] flex justify-center items-center'>
                        <img className='rounded-full w-[55%]' src='https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-1/418475802_1122996485737627_2415053131590234331_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCALvY1lfykfkKlTx4NCa1t_TIovPOgzm39Mii886DOfwkXSh1HUrMkmPIosKHMOi7_Ko4H6C4SOKwOPwiSPX_&_nc_ohc=w7A1r4uB6xkAX9glmHe&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfC5ju4DfQ-rmMzOkMTE72QYRb1-AI7_TblEvdXqvg1iMQ&oe=65FC2D39' alt='placeholder'/>
                    </div>
                    
                    <div className='w-[40%] h-[100%]'>
                        
                        <div className='w-[100%]  h-[40%] flex items-center '>
                            <h1 className='font-semibold text-xl mr-5 mt-3'>anianoelle</h1>
                            <button className='bg-gray-300 pl-5 pr-5 pt-2 pb-2 rounded-lg mr-2 mt-3 text-sm font-semibold'>Edit profile</button>
                            <button className='bg-gray-300 pl-5 pr-5 pt-2 pb-2 rounded-lg mr-2 mt-3 text-sm font-semibold'>View archive</button>
                            <img className='w-[5%] cursor-pointer mt-3' src='https://cdn-icons-png.freepik.com/512/4989/4989530.png?ga=GA1.1.417618266.1710673022&' alt='placeholder'/>
                        </div>

                        <div className='w-[100%] h-[20%] flex items-center'>
                            <div className='h-[100%] flex justify-center items-center mr-10'>
                                <h1 className='font-semibold mr-1'>20</h1>
                                <h1>posts</h1>
                            </div>

                            <div className='h-[100%] flex justify-center items-center mr-10'>
                                <h1 className='font-semibold mr-1'>120</h1>
                                <h1>followers</h1>
                            </div>
                           
                            <div className='h-[100%] flex justify-center items-center mr-10'>
                                <h1 className='font-semibold mr-1'>59</h1>
                                <h1>following</h1>
                            </div>
                        </div>

                        <div className='w-[100%] h-[12%]'>
                            <h1 className='font-semibold text-sm mr-1'>argh.nea</h1>
                        </div>
                        <div className='w-[100%] h-[12%]'>
                             <h1>:3</h1>   
                        </div>

                    </div>
                </div>


                <div className='w-[100%] h-[40%] flex justify-center items-center'>
                       
                        <div className=' w-[30%] h-[100%] flex justify-center items-center border-b border-gray-400'>


                            <div className='h-[100%] w-[25%]'>
                                <div className='w-[100%] h-[60%] flex justify-center items-center'>
                                    <div className='w-[80%] h-[90%] border border-gray-300 bg-gray-50 rounded-full flex justify-center items-center'>
                                        <img className='w-[95%] h-[95%] rounded-full' src='https://i.pinimg.com/236x/98/05/3a/98053a09fd6e641d87684f79054c9ca7.jpg' alt='placeholder'/>
                                    </div>
                                </div>
                                <div className='w-[100%] h-[40%]pt-1 flex justify-center'>
                                    <h1 className='text-sm font-semibold'>pink skies!</h1>
                                </div>
                            </div>

                            <div className='h-[100%] w-[25%] ml-3 mr-3'>
                                <div className='w-[100%] h-[60%] flex justify-center items-center'>
                                    <div className='w-[80%] h-[90%] border border-gray-300 bg-gray-50 rounded-full flex justify-center items-center'>
                                        <img className='w-[95%] h-[95%] rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Davao_Poblacion_District%2C_CM_Recto-San_Pedro_night_view_%28Davao_City%2C_08-18-2023%29.jpg' alt='placeholder'/>
                                    </div>
                                </div>
                                <div className='w-[100%] h-[40%] pt-1 flex justify-center'>
                                    <h1 className='text-sm font-semibold'>💡</h1>
                                </div>
                            </div>


                            <div className='h-[100%] w-[25%]'>
                                <div className='w-[100%] h-[60%] flex justify-center items-center'>
                                    <div className='w-[80%] h-[90%] border border-gray-300 bg-gray-50 rounded-full flex justify-center items-center'>
                                        <img className='w-[95%] h-[95%] rounded-full' src='https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/383341780_1067901821247094_4148001893183610248_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHrTYKmjl_YktqWnRzF9FFcgkDe6Jgu4CmCQN7omC7gKZrrEQdwXQ_r9g85N0AQVQ5p6e0ACRRJ-AanLgDcJUQM&_nc_ohc=4YW3s99hdJ8AX-FkVyp&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfBk_RZBnSO9UoyL7L7bOOlvwbsjPWjXIxeo2u8fkWa1yg&oe=65FB4F5A' alt='placeholder'/>
                                    </div>
                                </div>
                                <div className='w-[100%] h-[40%] pt-1 flex justify-center'>
                                    <h1 className='text-sm font-semibold'>my baby</h1>
                                </div>
                            </div>


                        </div>  

                        <div className='w-[36%] h-[100%] border-b border-gray-400'></div> 
    
                </div>
 
            </div>

            <div className='w-[100%] h-[5%] flex justify-center items-center'>
                       <div className='h-[100%] flex justify-center items-center border-t border-gray-900'>
                           <img className='w-[18%] mr-2' src={require('../pics/post.png')} alt='placeholder'/>
                            <h1 className='font-semibold text-sm tracking-wider'>POSTS</h1>
                       </div>
            </div>

            

            <div className='w-[100%] h-[55%]'>
                    
                    <div className='w-[100%] h-[54%] flex justify-center items-center'>
                        
                        <div className='w-[22%] h-[99%]'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/1.png')} alt='placeholder'/>
                        </div> 

                        <div className='w-[22%] h-[99%] ml-1 mr-1'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/2.png')} alt='placeholder'/>
                        </div> 

                        <div className='w-[22%] h-[99%]'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/3.png')} alt='placeholder'/>
                        </div> 

                    </div>

                    <div className='w-[100%] h-[55%] flex justify-center items-center'>

                        <div className='w-[22%] h-[99%]'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/4.png')} alt='placeholder'/>
                        </div> 

                        <div className='w-[22%] h-[99%] ml-1 mr-1'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/5.png')} alt='placeholder'/>
                        </div> 

                        <div className='w-[22%] h-[99%]'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/6.png')} alt='placeholder'/>
                        </div> 

                    </div>

                    <div className='w-[100%] h-[55%] flex justify-center items-center'>

                        <div className='w-[22%] h-[99%]'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/7.png')} alt='placeholder'/>
                        </div> 

                        <div className='w-[22%] h-[99%] ml-1 mr-1'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/8.png')} alt='placeholder'/>
                        </div> 

                        <div className='w-[22%] h-[99%]'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/9.png')} alt='placeholder'/>
                        </div> 

                    </div>

                    <div className='w-[100%] h-[55%] flex justify-center items-center'>

                        <div className='w-[22%] h-[99%]'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/10.png')} alt='placeholder'/>
                        </div> 

                        <div className='w-[22%] h-[99%] ml-1 mr-1'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/11.png')} alt='placeholder'/>
                        </div> 

                        <div className='w-[22%] h-[99%]'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/12.png')} alt='placeholder'/>
                        </div> 

                    </div>

                    <div className='w-[100%] h-[55%] flex justify-center items-center'>

                        <div className='w-[22%] h-[99%]'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/13.png')} alt='placeholder'/>
                        </div> 

                        <div className='w-[22%] h-[99%] ml-1 mr-1'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/14.png')} alt='placeholder'/>
                        </div> 

                        <div className='w-[22%] h-[99%]'>
                             <img className='w-[100%] h-[100%] object-cover' src={require('../pics/15.png')} alt='placeholder'/>
                        </div> 

                    </div>

                    <div className='w-[100%] h-[35%] flex-col flex justify-center items-center'>
                        
                        <div className='w-[100%] h-[20%] flex justify-center items-center'>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Meta
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                About
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Blog
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Jobs
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Help
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                API
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Privacy
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Terms
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Locations
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Instagram Lite
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Threads
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Contact Uploading & Non-Users
                            </h1>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                Meta Verified
                            </h1>
                        </div>

                        <div className='w-[100%] h-[20%] flex justify-center items-center'>
                            <h1 className='text-xs text-gray-500 ml-2 mr-2'>
                                © 2024 Instagram from Meta
                            </h1>
                        </div>
                    </div>


            </div>

        </div>

          
    </div>
    
  );
};

export default Gallery;