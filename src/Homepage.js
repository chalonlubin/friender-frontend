/** Render Friender homepage
 *
 * Context
 * - currUser
 *
 * Routes -> Homepage
 */

 import { useContext } from "react";
 import userContext from "./userContext";

 function Homepage() {
   const { currUser } = useContext(userContext);

   return (
     <div className="Homepage mt-5 me-5">
       {currUser ? (
         <h1 className="display-5">
           Welcome back to Friender, {`${currUser.firstName} ${currUser.lastName}`}!
         </h1>
       ) : (
         <h1 className="display-5">Welcome to Friender</h1>
       )}
       <b className="lead">build your own squad</b>
     </div>
   );
 }
 export default Homepage;
