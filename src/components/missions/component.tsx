import React, { ChangeEvent, FC, useEffect, useState } from "react";
// import {Dragon} from "../../problems.ts";
// import { DragonDisplayProps } from "./types";
import { getDragonInfo } from "../../services/spaceX/service";

export const DragonDisplay: FC = () => {
  const [dragons, setDragons] = useState<any>(undefined);
  const [valor, setValor] = useState<number>(0);
  // useEffect(() => {
  //   const firstDragon =   () => {
  //     const newDragons =  getDragonInfo();
  //     setDragons(newDragons);
  //   };
  //   firstDragon();
  //   console.log("DragonDisplay mount: ", typeof(dragons));
  // },[valor]);
  // useEffect(() => {
  //   if (valor === 0) return;
  //   console.log("Actualizando valor");
  //   return () => {
  //     console.log("otra funcion para desmontar componente");
  //     console.log(dragons.resolve());
  //   };
  // }, [valor]);
  const funcion = () => {
    setValor(valor + 1);
    console.log("hola: ", dragons[0].name);
  };
  // useEffect(() => {
  //   const auxDragons = getDragonInfo();
  //   setDragons(auxDragons);
  // } , []);

  useEffect(() => {
    const firstDragon = async () => {
      const auxDragons = await getDragonInfo();
      setDragons(auxDragons);
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
      {/* <h3>Dragon name: </h3> */}
      {/* <p>{Dragon(position)}</p> */}
      {/* <button onClick={funcion}> Cargar 😈</button> */}
      {dragons !== undefined ? (
        <div>
          {dragons.map((dragon: any) => (
            <p key={dragon.id}>
              Nombre: {imprimirCosas(dragon)} {(dragon.description)}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
