
import { getFirstSixPosts } from "../functions/functions";
import DragComponent from "../components/drags";
// import { getServerSideProps } from "next/dist/build/templates/pages";


export default async function MyComponent() {
  
  const res = await getFirstSixPosts() 

  return (<>
    <section>
      <DragComponent res={res}></DragComponent>

        </section>
  
  
  </>

    
  );
}