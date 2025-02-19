import GoalAccordion from "./components/GoalAccordion";
import { ObjetivosData } from "../../../../datas/Objetivos";
function Objetivos() {
  return (
    <>
      {ObjetivosData.map((obj) => (
        <GoalAccordion key={`objet122${obj.summary}`} summary={obj.summary} details={obj.details} />
      ))}
    </>
  );
}

export default Objetivos;
