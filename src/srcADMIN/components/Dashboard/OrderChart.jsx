import axios from "axios";
import { Bar } from "react-chartjs-2";

function OrderChart() {
  console.log("order chart")
//   const getOrderData = async () => {
//     try {
//       let response = await axios("/admin/getorders");
//       console.log("allorders", response);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const labels = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   // options format
//   const options = {
//     // graph to be responsive
//     responsive: true,
//     //different plugins
//     plugins: {
//       title: {
//         display: true,
//         text: "Bar Chart",
//       },
//       legend: {
//         position: "bottom",
//       },
//     },
//   };
//   // data format
//   const data = {
//     // represent column names
//     labels,
//     // we can use multiple datasets
//     datasets: [
//       {
//         label: "ORDERS",
//         data: [],
//         backgroundColor: "red",
//       },
//     ],
//   };

  return (
    <>
      {/* <Bar options={options} data={data} /> */}
    </>
  );
}
export default OrderChart;
