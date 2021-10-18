import React, { useEffect, useLayoutEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import requestCats from "../../services/parseJson";
import { dataGenerator, options } from "../../settings/Charjs";

interface CatCharType {
   [key: string]: number;
}

export default function CatColor() {
    const [catCharData, setCatCharData] = useState<CatCharType | undefined>();

   useEffect(() => {
      (async () => {
         if (!catCharData) {
            await setCatCharData(await requestCats("cat", "color"));
         }
      })();
   }, [catCharData]);

   useLayoutEffect(() => {
      console.log('nowtest', catCharData)
   }, [catCharData])

   return (
      <div className="container">
         <div className="header">
            <h1 className="title">Vertical Bar Chart</h1>
         </div>
         <p>Cat</p>
         <div className="cat-container">
            {catCharData && (
               <Bar
                  data={() =>
                     dataGenerator(catCharData, "Color", Object.keys(catCharData))
                  }
                  options={options}
               />
            )}
         </div>
      </div>
   );
}