 /*eslint-disable react/prop-types */
 import {v4 as uuidv4} from 'uuid'
 import Sätze from './Sätze'
 
   function ListComponent (props) {
    
     return(
       
     <div>
         <h3>{props.text}</h3>
 
         {Sätze.map((sätze)=> 
         <div key={uuidv4()}>
           <br></br>
           {sätze.antwort}
           <br></br>
           {sätze.variante} 
         </div>)}
     </div>
     )}
 
 
 
 export default ListComponent