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
    paragraphs.push(<h1>{value.name}</h1>);
    return paragraphs;
  };
  return (
    <div>
      {rockets !== undefined ? (
        <div>
          {rockets.map((rocket: any) => (
            <p key={rocket.id}>
              {imprimirCosas(rocket)} {rocket.description}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
