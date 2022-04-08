import React, { ChangeEvent, FC, useEffect, useState } from "react";
// import {Dragon} from "../../problems.ts";
// import { DragonDisplayProps } from "./types";
import { getRocketInfo } from "../../services/spaceX/service";

export const RocketDisplay: FC = () => {
  const [rockets, setRockets] = useState<any>(undefined);
  const [valor, setValor] = useState<number>(0); 
  const funcion = () => {
    setValor(valor + 1);
    console.log("hola: ", rockets[0].name);
  };  

  useEffect(() => {
    const firstDragon = async () => {
      const auxRockets = await getRocketInfo();
      setRockets(auxRockets);
    };
    firstDragon();
  }, []);
  const imprimirCosas = (value: any) => {
    const paragraphs = [];
    paragraphs.push(
      <h1>
        {value.name}
      </h1>
    );
    return paragraphs;
  };
  return (
    <div> 
      {rockets !== undefined ? (
        <div>
          {rockets.map((rocket: any) => (
            <p key={rocket.id}>
              Nombre: {imprimirCosas(rocket)} {(rocket.description)}
            </p>
          ))} 
        </div>
      ) : null}
    </div>
  );
};
