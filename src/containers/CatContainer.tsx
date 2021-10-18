import React, { useEffect, useLayoutEffect, useState } from "react";
import CatAge from "../components/Cat/CatAge";
import RadioButtons from "../components/radioButtons";
import { styles } from '../jsStyles/radioButtonStyle'
import CatColor from "../components/Cat/CatColor";

const CatContainer = () => {
   const [typeChart, setTypeChart] = useState<string | undefined>()
   const titles: string[] = ["Color", "Age"];

   useLayoutEffect(() => {
      console.log('type chart changed', typeChart);
   }, [typeChart])

   const renderTypeChartComponent = () => {switch (typeChart) {
      case 'Age': return <CatAge />
      case 'Color': return <CatColor />
      default: return <h3>Choose the button</h3>;
   }
}

   return (
      <div>
         <RadioButtons titles={titles}  styles={styles} onClick={(type: string) => setTypeChart(type)} />
         {/* {typeChart && <Cat typeChart={typeChart.toLowerCase()} />} */}
         {
            renderTypeChartComponent()
         }
      </div>
   );
};

export default CatContainer;
