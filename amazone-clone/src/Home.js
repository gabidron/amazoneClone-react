import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1541256942802-7b29531f0df8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=600&w=1200"
          alt="Home"
        />

        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 liter Glass Bowl"
            price={239}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Microsoft Xbox One S 1TB Console, White"
            price={388.98}
            image="https://i5.walmartimages.com/asr/a3a343b8-50cd-4d19-9e61-aba51ae7fc8b.bf7d25dcd3a4736af7e5f245d37f6a56.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
            rating={5}
          />
          <Product
            title="Amazon Essentials Men's Crewneck Cable Cotton Sweater"
            price={9}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbOp35sPA2Xwc8FO93-Az-5I_VATjLDzl3cTreiT-zoSC6rbv8Qqj3s6wG_2zAsNf9aRDSE-bJ5Q&usqp=CAc"
            rating={3}
          />
          <Product
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="http://mobileimages.lowes.com/product/converted/841667/841667166834.jpg?size=pdhi"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Alienware 34 Curved Gaming Monitor - AW3420DW"
            price={949.99}
            image="https://i.dell.com/sites/csimages/SNP_Imagery/all/3420dw.png"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
