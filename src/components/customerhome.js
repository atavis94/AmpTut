
import { useState } from "react";

  import CustomerHomeDefault from "./customerhomedef";
  import CustomerHomeMock from "./customerhomemock";

const CustomerHome = () => {
    const [interaction, setInteraction] = useState(false);

    return (
        <div className="CustomerHome">
            
            {interaction ? <CustomerHomeMock setInteraction={setInteraction}/> : <CustomerHomeDefault setInteraction={setInteraction}/>}
             
        </div>
    )};

export default CustomerHome;