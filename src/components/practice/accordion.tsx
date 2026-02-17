import { useState } from 'react';

import './accordion.css';

const items = [
  {
    title: 'Component design',
    body: 'Keep each component focused on a single responsibility and pass data down via props.',
  },
  {
    title: 'State management',
    body: 'Local state stays inside the component unless multiple parts of the app need it.',
  },
  {
    title: 'Styling',
    body: 'Use consistent spacing and typography to make the UI feel polished and predictable.',
  },
];

// export const Accordion = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const toggle = (index: number) => {
//     setOpenIndex((current) => (current === index ? null : index));
//   };

//   return (
//     <div className="accordion">
//       {items.map((item, index) => (
//         <div key={item.title} className="accordion-item">
//           <button
//             type="button"
//             className={openIndex === index ? 'accordion-header open' : 'accordion-header'}
//             aria-expanded={openIndex === index}
//             onClick={() => toggle(index)}
//           >
//             <span>{item.title}</span>
//             <span className="accordion-icon" aria-hidden="true" />
//           </button>
//           {openIndex === index && (
//             <div className="accordion-panel">
//               <p>{item.body}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

export const Accordion =() =>{
    // const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [openIndex, setOpenIndex] = useState<number[]>([0]);

    // const toggle = (index:number)=>{
    //     setOpenIndex((current)=> (current===index? null:index));
    // }
    const toggle = (index:number)=>{
        setOpenIndex((current)=>{
            if(current.includes(index)){
                return current.filter((i)=>i!==index);
            }
            return [...current,index];
        })
    }
    return(
        <div className="accordion">
            {items.map((item,idx)=>{
                return(
                    <div key={item.title}   className='accordion-item'>
                        <button type='button' className={openIndex.includes(idx)? "accordion-header open":"accordion-header"} onClick={() => toggle(idx)}>
                          <span>{item.title}</span>
                          <span className={openIndex.includes(idx) ? "accordion-icon open" : "accordion-icon close"} aria-hidden="true">
                            {/* {openIndex.includes(idx) ? 'v' : '^'} */}V
                          </span>
                        </button>
                        {openIndex.includes(idx) && (<div className="accordion-panel"><p>{item.body}</p></div>)} 
                    </div>
                )
            })}
        </div>
    )
}
