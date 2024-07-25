import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useElevator } from "@/uses/use-elevator";

export function Elevator() {
  const [position, setPosition] = useState<number>(128);
  const { currentFloor, moveElevator, handleFloorRequest, setDirection, direction, queue } = useElevator()
  const audio = new Audio("./elevatorsong.mp3")
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Animação
      const nextPosition = currentFloor * 128;
      const step = 10;
      if (position < nextPosition) {
        setPosition(prevPosition => Math.min(prevPosition + step, nextPosition));
      } else if (position > nextPosition) {
        setPosition(prevPosition => Math.max(prevPosition - step, nextPosition));
      }

      if(position == nextPosition) {
        if(direction != 'stopped'){
          setDirection('stopped')
          audio.play()
        }
      } else {
        setDirection('moving')
      }
    }, 100); 
    return () => clearInterval(interval);
  }, [audio, currentFloor, direction, position, setDirection]);

  useEffect(() => {
    if(direction == "stopped") {
      const interval = setInterval(() => {
        if(direction == "stopped" && queue.length == 0 && currentFloor != 1) {
          handleFloorRequest(1)
        } 
        moveElevator()
      }, 2500)
      return () => clearInterval(interval);
    }
  }, [currentFloor, direction, handleFloorRequest, moveElevator, queue.length])

  return (
    <div className="w-40 h-32 ml-5 p-0" style={{ transform: `translateY(${-position}px)` }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">PORTA</div>
        <div className="flex flex-col">
          <h1>{Math.floor(position / 128)}° ANDAR</h1>
          <div className="grid grid-cols-2">
            <Button size="icon" variant="ghost" onClick={() => handleFloorRequest(1)}>
              1
            </Button>
            <Button size="icon" variant="ghost" onClick={() => handleFloorRequest(2)}>
              2
            </Button>
            <Button size="icon" variant="ghost" onClick={() => handleFloorRequest(3)}>
              3
            </Button>
            <Button size="icon" variant="ghost" onClick={() => handleFloorRequest(4)}>
              4
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}