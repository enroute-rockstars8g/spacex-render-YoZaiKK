import React, { FC, useEffect, useState } from "react";
import { getDragonInfo } from "../../services/spaceX/service";

export const DragonDisplay: FC = () => {
  const [dragons, setDragons] = useState<any>(undefined);

  useEffect(() => {
    const firstDragon = async () => {
      const auxDragons = await getDragonInfo();
      setDragons(auxDragons);
    };
    firstDragon();
  }, []);
  const imprimirCosas = (value: any) => {
    const paragraphs = [];
    console.log(value.id);
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
      {dragons !== undefined ? (
        <div>
          {dragons.map((dragon: any) => (
            <p key={dragon.id}>{imprimirCosas(dragon)}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
