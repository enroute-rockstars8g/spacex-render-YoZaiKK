import React, { ChangeEvent, FC, useEffect, useState } from "react";
// import {Dragon} from "../../problems.ts";
// import { DragonDisplayProps } from "./types";
import { getDragonInfo } from "../../services/spaceX/service";


export const DragonDisplay: FC = () => {
  const [dragon, setDragon] = useState<any>(undefined);
  // const [dragon, setDragon] = useState<any>(undefined);
  useEffect(() => { 
    const firstDragon =  async () => {
      const newDragon = await getDragonInfo(); 
      setDragon(newDragon);
    };
    firstDragon();
    console.log("DragonDisplay mount: " , dragon);
  },[]);

  const funcion = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div>
    <input type="number" onChange = {funcion}/>
        <h3>Dragon number: </h3> 
        {/* <p>{Dragon(position)}</p> */}
    </div>
  );
};
