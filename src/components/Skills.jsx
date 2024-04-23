import React, { useEffect, useState } from "react";
//useInview hook
import { useInView } from "react-intersection-observer";
//react circular
import { CircularProgressbar } from "react-circular-progressbar";
//react circular styles
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  // full HTML
  const [fullBody, setFullBody] = useState(0);
  // css
  const [piercing, setPiercing] = useState(0);
  // java script
  const [fullColor, setFullColor] = useState(0);
 // react
 const [temporary, setTemporary] = useState(0);
 
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 95) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 90) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 85) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
        
        
        
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
      
    }
  }, [inView, fullBody, piercing, fullColor, temporary,]);

  //circular progressbar styles
  const styles = {
    path: {
      stroke: "#fafcff",
    },
    trail: {
      stroke: "#111112",
    },
    text: {
      fill: "#2c68a3",
      fontSize: "24px",
    },
  };

  return (
    <section ref={ref} className="bg-[#0a192f] font-primary section">
      
      <div className="container pl-12 py-20  mx-auto">
        <div className="flex flex-col xl:flex-row
         justify-between items-center gap-y-6">
          {/* circular item 1*/}
          <div className="bg-[#0a192f] w-[150px] lg:w-[250px]
           felx flex-col items-center  gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={fullBody} // Use the fullBody state directly for the value
              text={`${fullBody}%`} // Render the percentage text
              styles={styles}
            />
            {/* text */}
            <div className="uppercase text-white  font-light
             tracking-[1.2px] text-center">html</div>
          </div>

           {/* circular item 2*/}
           <div className="bg-[#0a192f] w-[150px] lg:w-[250px]
           felx flex-col items-center  gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={piercing} // Use the fullBody state directly for the value
              text={`${piercing}%`} // Render the percentage text
              styles={styles}
            />
            {/* text */}
            <div className="uppercase text-white  font-light
             tracking-[1.2px] text-center">css</div>
          </div>

           {/* circular item 3*/}
           <div className="bg-[#0a192f] w-[150px] lg:w-[250px]
           felx flex-col items-center  gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={fullColor} // Use the fullBody state directly for the value
              text={`${fullColor}%`} // Render the percentage text
              styles={styles}
            />
            {/* text */}
            <div className="uppercase text-white  font-light
             tracking-[1.2px] text-center">Js</div>
          </div>

           {/* circular item 4*/}
           <div className="bg-[#0a192f] w-[150px] lg:w-[250px]
           felx flex-col items-center  gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={temporary} // Use the fullBody state directly for the value
              text={`${temporary}%`} // Render the percentage text
              styles={styles}
            />
            {/* text */}
            <div className="uppercase text-white  font-light
             tracking-[1.2px] text-center">React</div>
          </div>

          



        </div>
      </div>
    </section>
  );
};

export default Skills;
