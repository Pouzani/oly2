import { ActivitiesSection } from "./components/ActivitiesSection";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Partenaires } from "./components/Partenaires";

import { Socials } from "./components/Socials";


function App() {
  return (
    <>
    <div className="xl:flex">
      <Navbar />
      <div className='mx-[29px] my-[25px] flex flex-col gap-10 items-center w-[90%]'>
        <Card />
        <ActivitiesSection />
        <Socials />
        <Partenaires />
      </div>
      </div>
    </>
  );
}

export default App;
