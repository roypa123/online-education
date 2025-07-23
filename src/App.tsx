import FirstPage from "./components/first_page/FirstPage";
import Header from "./shared/header/Header";

function App() {
  return (
    <div className="w-full h-full">
        <div className="h-[800px] flex flex-col bg-[#FDF8EE]">
                <div className="h-1/14">
                      <Header  />
                </div>
                <div className="h-1/14">
                </div>
               <FirstPage />   
        </div>
        <div>
          fvffvfvfv
        </div>
    </div>
  )
}

export default App



