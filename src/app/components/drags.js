'use client'

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import style from './../drags/styles.module.css'
import MediumCard from "./mediumcard";

export default function DragComponent({res}) {


  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  
  // const ref2 = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  // const { events: events2 } = useDraggable(ref2, {applyRubberBandEffect: true,});
  

  return (<>
    <div
      className={style.wrapdiv}
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
      <div className="flex-none w-52 h-32 bg-red-200" />
    </div>

    <section>
          <h2 className="my-5 text-4xl font-semibold">
            What about horizontal?
          </h2>

          <div
            className="flex space-x-3 py-3 overflow-x-scroll scrollbar-hide"
            {...events}
            ref={ref}
          >
            {res.concat(res)?.map(({ img, title }, i) => (
              <MediumCard key={i.toString()} img={img} title={title} />
            ))}
          </div>
        </section>
  
  
  </>

    
  );
}