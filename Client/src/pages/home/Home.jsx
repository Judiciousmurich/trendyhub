
import Devices from "../../components/shared/Devices"
import Headphones from "../../components/shared/Headphones"
import News from "../../components/shared/News"
import SellerProducts from "../../components/shared/SellerProducts"
import Service from "../../components/shared/Service"
import Watches from "../../components/shared/Watches"


const Home = () => {
  return (
    <>
      <div className="bg-[#dcdcdc] p-[2rem]">

        <div className="flex flex-col gap-2">
          <h5>Beats Solo</h5>
          <h1 className="font-bold text-5xl text-[#000000]">Wireless</h1>
          <h1 className="relative font-bold text-[#f8f8f8] text-[10rem] w-full">HEADPHONE</h1>
          <button className="w-fit text-white rounded-[50px] p-2 bg-[#f42c37]">Shop By Category</button>
          <img className="absolute h-[15rem] left-[30%]" src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/Group_1271-1.png" alt="" />

        </div>
        <div className="flex  flex-col items-end  h-[10rem] ">
          <div></div>
          <div className="flex flex-col w-[40%]  items-end ">
            <p className="font-bold">Description</p>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos officiis facilis modi consequatur a? Voluptas ab nemo sunt' excepturi illum?
            </p>
          </div>
        </div>
      </div>

      {/* DEVICES PAGE */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded">
      <Devices
        bgColor="#282828"
        textColor="#ffffff"
        text="Enjoy"
        description="With"
        title="EARPHONE"
        buttonText="Browse"
        buttonBgColor="#f42c37"
        image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Mask-Group-5-1.png"
      />

      <Devices
        bgColor="#fec62e"
        textColor="#ffffff"
        text="New"
        description="Wear"
        title="GADGETS"
        buttonText="Browse"
        buttonBgColor="#ffffff"
        image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/clay-apple-watch-mockup-07.png"
      />

      <Devices
        bgColor="#f42c37"
        textColor="#ffffff"
        text="Trend"
        description="Devices"
        title="LAPTOPS"
        buttonText="Browse"
        buttonBgColor="#ffffff"
        image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Laptop.png"
      />

      <Devices
        bgColor="#1581ff"
        textColor="#ffffff"
        text="New"
        description="Amazon"
        title="SPEAKER"
        buttonText="Browse"
        buttonBgColor="#ffffff"
        image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/P6YUXW1.png"
      />

      <Devices 
        bgColor="#2dd06f"
        textColor="#ffffff"
        text="Play"
        description="Game"
        title="OCULUS"
        buttonText="Browse"
        buttonBgColor="#ffffff"
        image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/man-wearing-virtual-reality-headset-at-home-D7AYCTV-2.png"
      />

      <Devices
        bgColor="#eeeff1"
        textColor="#000000"
        text="Best"
        description="Gaming"
        title="CONSOLE"
        buttonText="Browse"
        buttonBgColor="#f42c37"
        image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/NicePng_ps4-png_193822.png"
      />
    </div>
    {/* SERVICE PAGE */}
    <div className="flex gap-6 w-full">
    <Service
      image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/noun_delivery_1095359.svg"
      title="Free Shipping"
      description="Free Shipping On All Order"
    />
    <Service
      image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/noun_guarantee_952398.svg"
      title="Money Guarantee"
      description="30 Day Money Back"
    />
    <Service
      image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-995.svg"
      title="Online Support 24/7"
      description="Technical Support 24/7"
    />
    <Service
      image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/noun_Wallet_745515.svg"
      title="Secure Payment"
      description="All Cards Accepted"
    />
  </div>
      <Headphones />
      <SellerProducts />
      <Watches />
      {/* //NEWS PAGE */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-6 ">
        <News image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/adult-blur-close-up-267394-1024x573.jpg"
          date="October 5, 2019"
          author="Paul"
          title="HOW to choose perfect gadgets"
          description="When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ..."
        />
        <News image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/daniel-korpai-1074289-unsplash-637x357.jpg"
          date="October 5, 2019"
          author="Paul"
          title="HOW to choose perfect gadgets"
          description="When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ..."
        />
        <News image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/billetto-editorial-334686-unsplash-637x357.jpg"
          date="October 5, 2019"
          author="Paul"
          title="HOW to choose perfect gadgets"
          description="When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ..."
        />

      </div>




    </>
  )
}

export default Home