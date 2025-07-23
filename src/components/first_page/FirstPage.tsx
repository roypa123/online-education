import FirstBackground from '../../assets/first_background.svg'   ; 
import FirstImage from '../../assets/first_image.svg'; 

function FirstPage() {
  return (
      <div className="h-12/14 ml-8 mr-8 mt-8 mb-8"
                style={{ backgroundImage: `url(${FirstBackground})` }}
               >
                  <div className="flex ml-45 mr-45 mt-8 mb-8">
                     <div className="w-4/8 mt-30 space-y-4" >
                        <div className="text-5xl font-bold">
                            <span>The </span>
                            <span className="text-[#FF7426]">Smart</span> 
                        </div>
                         <div className="text-5xl font-bold">
                           <span>Choice For </span>
                            <span className="text-[#FF7426]">Future</span>
                            
                        </div>
                        <div className="text-1xl font-medium text-[#8A8A8A]">
                          Elearn is a global training provider based acress the UK that specialises in accredited and bespoke training courses. We crush the ...
                        </div>


                     </div>
                     <div className="w-1/8 ">
                     </div>
                     <div className="w-5/8 ">
                     <img src={FirstImage} alt=""/>
                     </div>
                  </div>
               </div>
  )
}

export default FirstPage