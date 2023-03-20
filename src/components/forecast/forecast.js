// import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

// const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const Forecast = ({ data }) => {
//     const dayInAWeek = new Date().getDay();
//     const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

//     return (
//         <>
//             <label className="title">Daily</label>
//             <Accordion allowZeroExpanded>
//                 {data.list.splice(0, 7).map((item, idx) => (
//                     <AccordionItem key={idx}>
//                         <AccordionItemHeading>
//                             <AccordionItemButton>
//                                 <div className="daily-item">
//                                     <label className="day">{forecastDays[idx]}</label>
//                                 </div>
//                             </AccordionItemButton>
//                         </AccordionItemHeading>
//                         <AccordionItemPanel></AccordionItemPanel>
//                     </AccordionItem>
//                 ))}
//             </Accordion>
//         </>
//     );
// };

// export default Forecast;