import { useState } from "react";

import "./main.css";

import { Submit } from "./submit";
import { Dropdown } from "./dropdown";
import { Accordion } from "./accordion";
import { CurrencyConverter } from "./currency";
import { TemperatureConverter } from "./temperature";
import { Clock } from "./clock";
import { ToDoList } from "./todolist";
import { Stopwatch } from "./stopwatch";
import { Slideshow } from "./slideshow";
import { Patient } from "./patient";
import { BlogPost } from "./blogpost";
import { WordOmitter } from "./wordomitter";
import { Kanban } from "./kanban";

// export const Practice = () => {
//   const [activeTab, setActiveTab] = useState<'submit' | 'dropdown' | 'accordion'>(
//     'submit'
//   );

//   return (
//     <div className="practice">
//       <h1>React Coding Problems</h1>
//       <nav className="practice-menu" >
//         <button
//           type="button"
//           className={activeTab === 'submit' ? 'tab active' : 'tab'}
//           onClick={() => setActiveTab('submit')}
//         >
//           Submit
//         </button>
//         <button
//           type="button"
//           className={activeTab === 'dropdown' ? 'tab active' : 'tab'}
//           onClick={() => setActiveTab('dropdown')}
//         >
//           Dropdown
//         </button>
//         <button
//           type="button"
//           className={activeTab === 'accordion' ? 'tab active' : 'tab'}
//           onClick={() => setActiveTab('accordion')}
//         >
//           Accordion
//         </button>
//       </nav>

//       {activeTab === 'submit' && <Submit />}
//       {activeTab === 'dropdown' && <Dropdown />}
//       {activeTab === 'accordion' && <Accordion />}
//     </div>
//   );
// };

export const Main = () => {
  const [activeTab, setActiveTab] = useState<'submit' | 'dropdown' | 'accordion'|'currency'|'temperature'|'clock'|'toDoList'|'stopwatch'|'slideshow'|'patient'|'blogPost' |'wordOmitter'|'kanban'>('submit');

  return (
    <div className="practice">
      <h1>React Coding Problems</h1>
      <div className="practice-menu">
        <button
          type="button"
          className={activeTab === 'submit' ? 'tab active' : 'tab'} 
          onClick={() => setActiveTab('submit')}
        >
          Submit
        </button>
        <button
          type="button"
          className={activeTab === 'dropdown' ? 'tab active' : 'tab'} 
          onClick={() => setActiveTab('dropdown')}
        >
          Dropdown
        </button>
        <button
          type="button"
          className={activeTab === 'accordion' ? 'tab active' : 'tab'} 
          onClick={() => setActiveTab('accordion')}
        >
          Accordion
        </button>
        <button
          type="button"
          className = {activeTab === 'currency' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('currency')}
        >
          Currency Converter
        </button>
        <button
          type="button"
          className = {activeTab === 'temperature' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('temperature')}
        >
          Temperature Converter
        </button>
  


        <button type="button" className={activeTab ==="clock" ? "tab active" : "tab"} onClick ={()=> setActiveTab('clock')}>Clock</button>
        <button type="button" className={activeTab ==="toDoList" ? "tab active" : "tab"} onClick ={()=> setActiveTab('toDoList')}>To Do List</button>
        <button type="button" className={activeTab ==="stopwatch" ? "tab active" : "tab"} onClick ={()=> setActiveTab('stopwatch')}>Stopwatch</button>
        <button type="button" className={activeTab ==="slideshow" ? "tab active" : "tab"} onClick ={()=> setActiveTab('slideshow')}>Slideshow</button>
        <button type="button" className={activeTab ==="patient" ? "tab active" : "tab"} onClick ={()=> setActiveTab('patient')}>Patient</button>
        <button type="button" className={activeTab ==="blogPost" ? "tab active" : "tab"} onClick ={()=> setActiveTab('blogPost')}>Blog Post</button>
      <select value={activeTab} onChange={(e) => setActiveTab(e.target.value as 'submit' | 'dropdown' | 'accordion'|'currency'|'temperature'|'clock' | 'toDoList' | 'stopwatch'| 'slideshow'|'patient'|'blogPost'|'wordOmitter' |'kanban')} className="practice-select">
        <option value='submit'>Submit</option>
        <option value='dropdown'>Dropdown</option>
        <option value='accordion'>Accordion</option>
        <option value='currency'>Currency Converter</option>
        <option value='temperature'>Temperature Converter</option>
        <option value='clock'>Clock</option>
        <option value='toDoList'>ToDo List</option>
        <option value='stopwatch'>Stopwatch</option>
        <option value='slideshow'>Slideshow</option>
        <option value='patient'>Patient</option>
        <option value='blogPost'>Blog Post</option>
        <option value='wordOmitter'>Word Omitter</option>
        <option value='kanban'>Kanban</option>
        </select>
      </div>



      {activeTab === 'submit' && <Submit />}
      {activeTab === 'dropdown' && <Dropdown />}
      {activeTab === 'accordion' && <Accordion />}
      {activeTab === 'currency' && <CurrencyConverter />}
      {activeTab === 'temperature' && <TemperatureConverter />}
      {activeTab === 'clock' && <Clock />}
      {activeTab === 'toDoList' && <ToDoList />}
        {activeTab === 'stopwatch' && <Stopwatch />}
        {activeTab === 'slideshow' && <Slideshow />}
        {activeTab === 'patient' && <Patient />}
        {activeTab === 'blogPost' && <BlogPost />}
         {activeTab === 'wordOmitter' && <WordOmitter />}
         {activeTab === 'kanban' && <Kanban />}
     
    </div>
  );
}
