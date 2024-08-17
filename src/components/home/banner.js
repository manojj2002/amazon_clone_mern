import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './banner.css'
const data =[
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD24/ACQ/DO/GW/PD24_GW_pc_Hero_LN_3000x1200_1._CB568593197_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/akull/PD24/M35/19thGolive/PC_Hero_3000x1200._CB568907291_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vinambia/70ProPDfinal/D142850179_PC_Hero_3000x1200._CB568861206_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CE/PD/GW/2/Under1499_PD_Tallhero_3000x1200._CB568857827_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/2024/PD/GW/PC_Hero_BankUPI._CB568859278_.jpg"
]
const banner = () => {
  return (
    <Carousel className='carousel'
    autoPlay={true}
    animation='slide'
    indicators={false}
    navButtonsAlwaysInvisible={false}
    cycleNavigation={true}
    navButtonsProps={{
        style:{
            backgroundColor:"black",
            color:"white",
            borderRadius:0,
            marginTop:-22,
            height:"104px"
        }
    }}
    >
        {
            data.map((imag,i)=>{
                return(
                    <>
                        <img src={imag} alt='' className='banner_img'/>
                    </>
                )
            })
        }
    </Carousel>
  )
}

export default banner
