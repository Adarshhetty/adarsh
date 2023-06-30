import React from "react";
import Typewriter from 'typewriter-effect';
  
export default function TypingEffect() {
   
  return (
    <div>
      
      <Typewriter 
     
        onInit={(typewriter) => {
          typewriter.typeString(' Developer')
            .callFunction(() => {
              console.log('Developer');
            })
            .pauseFor(2500)
            .deleteAll()
            typewriter.typeString(' Designer').callFunction(() => {
             console.log("Designer") ;
            })
            .pauseFor(2500)
            .deleteAll()
            typewriter.typeString(' Developer').callFunction(() => {
                console.log("Developer") ;
               })
            .start();
            
        }}
      />
    </div>
  );
}