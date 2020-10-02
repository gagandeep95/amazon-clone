import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD5388._CB406163143_.jpg" alt="amazon_banner"/>
            
            <div className="home_row">
               
            <Product id="123456789"
                         title="LG 22LJ4540 TV, 22-Inch 1080p IPS LED - 2017 Model"
                         price={116.99}    
                         image="https://images-na.ssl-images-amazon.com/images/I/81NZaNRrvDL._AC_SL1500_.jpg"
                         rating={5} /> 
<Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
            </div>
            <div className="home_row">
                <Product id="123456786" 
                        title="Carhartt Men's K87 Workwear Pocket Short Sleeve T-Shirt (Regular and Big & Tall Sizes)"
                         price={12.45}
                         image="https://images-na.ssl-images-amazon.com/images/I/81KFVjPkMzL._AC_UX522_.jpg"
                         rating={4}
                />
                <Product id="123456787"
                         title="adidas Men's Adilette Shower Slides"
                         price={10.45}
                         image="https://images-na.ssl-images-amazon.com/images/I/71FxznETd-L._AC_UX395_.jpg"
                         rating={5}
                />
                <Product id="123456788"
                         title="AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
                         price={9.99}
                         image="https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg"
                         rating={3}
                />
            </div>
            <div className="home_row">
            <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />

            </div>
            </div>
        </div>
    )
}

export default Home
