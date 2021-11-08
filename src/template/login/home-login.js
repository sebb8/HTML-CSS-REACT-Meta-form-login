import React from 'react';
import './home-login.css';
import LogoMeta from '../../image/media/logo/logo_meta.png';
import AvatarMark from '../../image/media/avatar/avatar_mark.jpg';
import AvatarElonSpacex from '../../image/media/avatar/avatar_elon_spacex.jpg';
import AvatarMarkAktor from '../../image/media/avatar/avatar_mark_aktor.jpg';
import AvatarBillMsc from '../../image/media/avatar/avatar_bill_msc.jpg';

function HomeLogin() {
  return (
    <>
    <div className="w-full h-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="flex justify-center items-center h-52 md:h-screen p-4">
                <img src={LogoMeta} alt="Logo Meta" className="w-60 h-32" />
            </div>  

            <div className="flex flex-col h-full md:h-screen p-4">

              <div className="bg-m007 rounded-lg p-6 h-full">

                <div className="w-full h-full flex flex-col justify-between items-center">

                  <div className="my-6 bg-white rounded-full p-1 relative">
                      <img src={AvatarMark} alt="Avtar" className="w-36 h-36 object-cover rounded-full" />
                      <span class="absolute bottom-6 right-1 inline-block w-6 h-6 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>

                  <div className="my-6 flex flex-col">
                      <span className="text-lg font-black text-white">
                        <span class="flag-icon flag-icon-us"></span> Mark Zuckerberg 
                      </span>
                      <i className="text-sm text-center text-white">
                        CEO, Meta
                      </i>
                  </div>

                  <div className="my-6 -space-x-3 inline-flex items-center">
                    <div className="relative">
                        <img class="relative z-10 inline-flex object-cover w-12 h-12 border-2 border-white rounded-full" src={AvatarBillMsc} alt="Avatar Bill"/>
                          <span class="absolute z-20 bottom-2 -left-1 inline-block w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="relative">
                        <img class="relative z-20 inline-flex object-cover w-20 h-20 border-2 border-white rounded-full" src={AvatarElonSpacex} alt="Avatar Elon"/>
                        <span class="absolute z-20 -bottom-1 left-8 inline-block w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="relative">
                          <img class="relative z-10 inline-flex object-cover w-12 h-12 border-2 border-white rounded-full" src={AvatarMarkAktor} alt="Avatar Mark"/>
                          <span class="absolute z-20 bottom-2 -right-1 inline-block w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                  
                  </div>

                </div>

              </div>

              <div className="bg-white w-full h-full">

                  <div className="p-6 h-full flex flex-col justify-between">

                      <div className="w-full h-auto">
                          <span className="text-m092 text-lg font-black py-6 flex justify-center">
                            Login form
                          </span>
                      </div>

                      <div className="w-full h-auto">
                        <form className="flex flex-col">

                          <div className="flex flex-col p-3"> 
                            <label for="User" className="text-m092 text-base p-1">User name:</label>
                            <input type="text" name="fname" value="Mark zuckerberg" className="bg-m007 rounded-lg text-white p-3"/>
                          </div>

                          <div className="flex flex-col p-3"> 
                            <label for="Pass" className="text-m092 text-base p-1">Password:</label>
                            <input type="password" name="lname" value="zuckerberg" className="bg-m007 rounded-lg text-white p-3" />
                          </div>

                          <div className="flex justify-between items-center p-3">
                            <input type='submit' value='Sign In' className="bg-m092 shadow-2xl text-white rounded-lg p-2" />
                            <span>
                              <a href="/" className="text-sm text-right text-m007">
                                Forgot Password ?
                              </a>
                            </span>
                          </div>

                        </form>
                      </div>

                      <div className="w-full h-auto p-3 flex justify-end items-center">
                        <p className="text-sm text-right text-m092">
                          &copy; All rights reserved by 
                          <a href="https://github.com/sebb8" className="text-m092 hover:text-m007"> github.com/sebb8</a>
                        </p>       
                      </div>

                  </div>

              </div>

            </div>  
        </div>
      </div>
    </div>
    </>
  );
}

export default HomeLogin;
