import { ElevatorContext } from "@/contexts/ElevatorContext";
import { useContext } from "react";

export const useElevator = () => {
  const context = useContext(ElevatorContext);
  if (!context) {
    throw new Error('useElevator must be used within an ElevatorProvider');
  }
  return context;
};