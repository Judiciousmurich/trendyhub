
import Devices from "../../components/shared/Devices"
import Headphones from "../../components/shared/Headphones"
import News from "../../components/shared/News"
import SellerProducts from "../../components/shared/SellerProducts"
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
            <p>Description</p>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos officiis facilis modi consequatur a? Voluptas ab nemo sunt' excepturi illum?
            </p>
          </div>
        </div>
      </div>
    
      <Devices/>
      <Headphones/>
      <SellerProducts/>
      <Watches/>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-6 ">
      <News  image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/adult-blur-close-up-267394-1024x573.jpg"
  date="October 5, 2019"
  author="Paul"
  title="HOW to choose perfect gadgets"
  description="When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ..."
/>
<News  image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/daniel-korpai-1074289-unsplash-637x357.jpg"
  date="October 5, 2019"
  author="Paul"
  title="HOW to choose perfect gadgets"
  description="When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ..."
/>
<News  image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/billetto-editorial-334686-unsplash-637x357.jpg"
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