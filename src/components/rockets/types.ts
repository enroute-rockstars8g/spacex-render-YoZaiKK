import { ChangeEvent } from "react";

export interface LaunchpadDisplayProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    position: number
}