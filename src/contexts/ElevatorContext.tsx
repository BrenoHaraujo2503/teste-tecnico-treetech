/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext, ReactNode,  useState } from "react";

export interface ElevatorContextType {
  currentFloor: number;
  queue: number[];
  direction: "moving" |'stopped';
  moveElevator: () => void;
  handleFloorRequest: (floor: number) => void;
  setDirection: (direction: "moving" |'stopped') => void;
  setCurrentFloor: (floor: number) => void;
}

interface ElevatorProviderProps {
  children: ReactNode
}

export const ElevatorContext = createContext<ElevatorContextType | undefined>(undefined);

export function ElevatorProvider({ children }: ElevatorProviderProps) {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [queue, setQueue] = useState<Array<number>>([])
  const [direction, setDirection] = useState<'stopped' | 'moving'>('stopped')

  function moveElevator() {
    if(queue.length == 0) {
      return;
    }
    setQueue(queue.filter(q => q !== queue[0])) 
    setCurrentFloor(queue[0])
  }

  function handleFloorRequest(floor: number) {
    if (queue.includes(floor)) {
      return;
    }
    setQueue(prevQueue => [...prevQueue, floor])
  }

  return (
    <ElevatorContext.Provider
      value={{
        currentFloor,
        queue,
        direction,
        moveElevator,
        handleFloorRequest,
        setDirection,
        setCurrentFloor,
      }}
    >
      {children}
    </ElevatorContext.Provider>
  )

}