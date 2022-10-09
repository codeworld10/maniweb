import React from 'react'
import Image from "next/image";
import Footer from '../Components/Footer';

const best_electric_heater = () => {
  return (
    <>
    <div className='heater_top'>
    <div>
    <h1 className='prices'>
    Best Electric Heaters With<br></br> Affordable Prices
    </h1>
   <p>
   After a lot of research I have found some best electric heaters<br></br> in low prices.
   I am sure you will like them.
   </p>
    </div>
    <div>
    <Image
   className='heater'
    src="/images/heater.jpg"
    alt="Contact with maniwebdev"
    width="400"
    height="550"
    objectFit='cover'
  ></Image>
    </div>
    </div>
    <div>
    <h2 className='deals'>
    Best Deals On Electric Heaters
    </h2>
    </div>
    <div className='dreo'>
    <div>
    <h2 className='Dreo_text'>
    Dreo Space Heater for Indoor Use
    </h2>
    <p className='Dreo_para'>
    1500W Fast Heating Ceramic Electric Heater with Thermostat,<br></br> Remote, Overheating & Tip-Over Protection, 1-12H Timer, 70°<br></br> Oscillating Portable Heater for Office Bedroom<br></br>
    Ratings: 4.6<br></br>
    Total Reviews 4,848<br></br>
    Price: $74.99
    </p>
    </div>
    <div>
    <Image
    className='Dreo_image'
     src="/images/Dreo.png"
     alt="Contact with maniwebdev"
     width="500"
     height="550"
     objectFit='cover'
   ></Image>
    </div>
    </div>
    <div className="heat_btn">
    <button className='heat_design'>Check On Amazon</button>
    </div>

    //second section of heater

    <div className='dreo'>
    <div>
    <Image
     src="/images/Dreo2.png"
     alt="Contact with maniwebdev"
     width="400"
     height="550"
     objectFit='cover'
   ></Image>
    </div>
    <div>
   
   <h2>
   Dreo Space Heater for Indoor Use
   </h2>
   <p>
   Portable Heater with 70°Oscillation, 1500W PTC Ceramic<br></br> Electric Heater with Digital Thermostat, Fast Safety Heating,<br></br> 12h Timer, Quiet Small Heater for Office Home<br></br>
   Ratings: 4.5<br></br>
   Total Reviews 8,123<br></br>
   Price: $49.99
   </p>
    </div>
    </div>
    <div className="heat_btn">
    <button className='heat_design'>Check On Amazon</button>
    </div>
    
// third section of heater

<div className='dreo'>
<div>
<h2>
Dr Infrared Heater Portable Space<br></br> Heater, 1500-Watt
</h2>
<p>
Can heat up a large room with Auto Energy Saving Model With<br></br> High and Low Feature. Tip-over protection and Overheat protection.<br></br>
Ratings: 4.6<br></br>
Total Reviews 19,681<br></br>
Price: $123.73
</p>
</div>
<div>
<Image
 src="/images/Dr.png"
 alt="Contact with maniwebdev"
 width="430"
 height="550"
 objectFit='cover'
></Image>
</div>
</div>
<div className="heat_btn">
<button className='heat_design'>Check On Amazon</button>
</div>
<Footer />
    </>
  )
}

export default best_electric_heater