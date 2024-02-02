import React, { useEffect, useState } from 'react'
import './TemApp.css'
import { CiSearch } from "react-icons/ci";



function TempApp() {
  const [wIcon,setwIcon]=useState();
  // const [value,setValue]=useState();
   const inputRef=React.createRef();
   let apiKey="f07922389b8032d046f02c1bf2445baf";
   const value='Faizabad';
   let inputVal=value;
   let humid=document.getElementsByClassName("humidityPercentage");
  let windSpeed=document.getElementsByClassName("windSpeed");
    let temp=document.getElementsByClassName("weatherTemp");
    let location=document.getElementsByClassName("weatherLocation");
  useEffect(()=>{
    
      const fetchData=async()=>{
        try{
          const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=Metric&appid=${apiKey}`)
          const data= await response.json()
          humid[0].innerHTML=data.main.humidity+" %";
    windSpeed[0].innerHTML=data.wind.speed+" Km/h";
    temp[0].innerHTML=data.main.temp+" °c";
    location[0].innerHTML=data.name;
    if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){
      setwIcon("/images/clear.png");
    }else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
setwIcon("/images/cloud.png")
    }else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
      setwIcon("/images/drizzle.png")
          }
          else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
            setwIcon("/images/drizzle.png")
                }
                else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
                  setwIcon("/images/rain.png")
                      }else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
                        setwIcon("/images/rain.png")
                            }else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
                              setwIcon("/images/snow.png")
                                  }else{
                                    setwIcon("/images/clear.png")
                                  }
        }catch(error){
          console.error(error);
        }
      };
      fetchData();
  },[]);

  const  search=async()=>{
    let inputVal=inputRef.current.value;
    console.log(inputVal);
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=Metric&appid=${apiKey}`;
    let response=await fetch(apiUrl);
    let data =await response.json();
    humid[0].innerHTML=data.main.humidity+" %";
    windSpeed[0].innerHTML=data.wind.speed+" Km/h";
    temp[0].innerHTML=data.main.temp+" °c";
    location[0].innerHTML=data.name;
    if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){
      setwIcon("/images/clear.png");
    }else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
setwIcon("/images/cloud.png")
    }else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
      setwIcon("/images/drizzle.png")
          }
          else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
            setwIcon("/images/drizzle.png")
                }
                else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
                  setwIcon("/images/rain.png")
                      }else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
                        setwIcon("/images/rain.png")
                            }else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
                              setwIcon("/images/snow.png")
                                  }else{
                                    setwIcon("/images/clear.png")
                                  }
    
  }


  return (
    
        <div className='boxMain'>
           <div className='searchBox'>
            <input  type='search'   ref={inputRef} placeholder='Please Input the Place'></input>
            <button className='btnSearch' onClick={search}><CiSearch/></button>
        </div>
          <div className='imageBox'>
            <img src={wIcon} alt="imgMain" className='imgMain'></img>
            <div className='weatherTemp'>
            24°c
            </div>
            <div className='weatherLocation' >
            Faizabad
            </div>
            </div>
            <div className='boxDetails'>
              {/* <div className='weatherImg'>
                <img src=''></img>
              </div> */}
           
            <div className='dataContainer'>
              <div className='element'>
                <img src='./images/humidity.png' className='icon'></img>
                <div className='data'>
                  <div className='humidityPercentage'>
                      64%
                  </div>
                  <div className='text'>
                    Humidity
                  </div>
                </div>
              </div>
              <div className='element'>
                <img src='./images/windIcon.png' className='icon'></img>
                <div className='data'>
                  <div className='windSpeed' >
                     18 Km/h
                  </div>
                  <div className='text'>
                    Wind Speed
                  </div>
                </div>
              </div>
            </div>
       
        
    </div>
     </div>
   
  )
}

export default TempApp