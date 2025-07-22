
import FirstBackground from "./assets/first_background.svg";
import FirstImage from "./assets/first_image.svg"
import Header from "./shared/header/Header";


function App() {
  return (
    <div className="w-full h-full">
        <div className="h-[1078px] flex flex-col bg-[#FDF8EE]">
                <div className="h-1/14">
                      <Header  />
                </div>
                <div className="h-1/14">
                </div>
               <div className="h-12/14 ml-8 mr-8 mt-8 mb-8"
                style={{ backgroundImage: `url(${FirstBackground})` }}
               >
                  <div className="flex ml-45 mr-45 mt-16 mb-8">
                     <div className="w-4/8">
                        <div>
                            The Smart
                        </div>
                         <div>
                            Choice For Future
                        </div>
                        <div>
                          Elearn is a global training provider based acress the UK that specialises in accredited and bespoke training courses. We crush the ...
                        </div>
                     
                     </div>
                     <div className="w-5/8 ">
                     <img src={FirstImage} alt=""/>
                     </div>
                  </div>
               </div>
               
        </div>
        <div>
          fvffvfvfv
        </div>
    </div>
  )
}

export default App



    {/* <img src={FirstBackground} alt="" className=" h-[900px]" /> */}
