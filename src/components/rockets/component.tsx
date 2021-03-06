import React, { FC, useEffect, useState } from "react";
import { getRocketInfo } from "../../services/spaceX/service";

export const RocketDisplay: FC = () => {
  const [rockets, setRockets] = useState<any>(undefined);

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
      <div className="divCompleto">
        <div className="divDesc">
          <h1>{value.name}</h1> <hr/>
          <a href={value.wikipedia}>
            <p><b>Description: </b>{value.description}</p>
          </a>
        </div> 
        <iframe
          className="frame"
          src={value.wikipedia}
          title={value.name}
        ></iframe>
      </div>
    );
    return paragraphs;
  };
  return (
    <div>
      {rockets !== undefined ? (
        <div>
          {rockets.map((rocket: any) => (
            <p key={rocket.id}>{imprimirCosas(rocket)}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
