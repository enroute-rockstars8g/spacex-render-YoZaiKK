import React, { FC } from "react";
// import {Fibonacci} from "../../problems.ts";
import { LaunchpadDisplayProps } from "./types";

export const LaunchpadDisplay: FC<LaunchpadDisplayProps> = ({onChange, position}) => {
  return (
    <div>
      <input type="number" onChange = {onChange}/>
        <h3>Fibonacci number: </h3> 
        {/* <p>{Fibonacci(position)}</p> */}
    </div>
  );
};