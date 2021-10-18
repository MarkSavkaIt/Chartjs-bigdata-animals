export const options: any = {
   // maintainAspectRatio: false,
   // responsive: true,
   scales: {
      yAxes: [
         {
            ticks: {
               beginAtZero: true,
            },
         },
      ],
      xAxes: [
         {
            ticks: {
               beginAtZero: true,
            },
         },
      ],
   },
   layout: {
      padding: "20",
   },
   legend: {
      display: true,
      position: "right",
   },
};

export const dataGenerator = (data: any, label: string, colors?: string[]) => {
   return {
      datasets: [
         {
            label,
            data,
            color: ["black", "red"],
            backgroundColor: colors
               ? colors
               : [
                    "rgba(255, 99,  132, 0.2)",
                    "rgba(54,  162, 235, 0.2)",
                    "rgba(255, 206, 86,  0.2)",
                    "rgba(75,  192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64,  0.2)",
                 ],
            borderColor: colors
               ? colors
               : [
                    "rgba(255, 99,  132, .9)",
                    "rgba(54,  162, 235, .9)",
                    "rgba(255, 206, 86,  .9)",
                    "rgba(75,  192, 192, .9)",
                    "rgba(153, 102, 255, .9)",
                    "rgba(255, 159, 64,  .9)",
                 ],
            borderWidth: 2,
         },
      ],
   };
};
