import "./App.css";
import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { marked } from "marked";
import Doc from "./Doc";
const App = () => {
     const [code, setCode] = useLocalStorage("CODE");
     const [compiled, setCompiled] = useLocalStorage("COMPILED");
     const [isOpen, setIsOpen] = useState("md");

     const openWindow = (window) => {
          setIsOpen(window);
     };

     const handleChange = (e) => {
          setCode(e.target.value);
          setCompiled(marked.parse(e.target.value));
     };

     return (
          <>
               <h1>MarkDown Previewer React App</h1>
               <div className="container">
                    <div className="btns">
                         <button
                              onClick={() => openWindow("md")}
                              className={isOpen === "md" ? "btn" : ""}
                         >
                              MarkDown
                         </button>
                         <button
                              className={isOpen === "Preview" ? "btn" : ""}
                              onClick={() => openWindow("Preview")}
                         >
                              Preview
                         </button>
                         <button
                              className={isOpen === "doc" ? "btn" : ""}
                              onClick={() => openWindow("doc")}
                         >
                              Doc
                         </button>
                    </div>
                    {isOpen === "md" ? (
                         <div>
                              <textarea onChange={handleChange} value={code} />
                         </div>
                    ) : isOpen === "Preview" ? (
                         <div>
                              <textarea value={compiled} />
                         </div>
                    ) : (
                         <Doc />
                    )}
               </div>
          </>
     );
};

export default App;
