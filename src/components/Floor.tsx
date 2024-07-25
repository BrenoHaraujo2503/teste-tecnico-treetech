import { useElevator } from "@/uses/use-elevator";
import { Button } from "./ui/button";
import { Circle } from 'lucide-react'

interface FloorProps {
  floorNumber: number
}

export function Floor({ floorNumber }: FloorProps) {
  const { handleFloorRequest } = useElevator()

  function request() {
    handleFloorRequest(floorNumber)
  }

  return (
    <div className="flex">
      <div className="w-52 h-32" />
      <div className="flex flex-col justify-center items-center ml-1">
        <Button size="icon" variant="ghost" className="rounded-sm border border-zinc-600 size-8" onClick={() => request()}>
          <Circle className="size-2 fill-black" />
        </Button>
      </div>
      <div className="m-auto">
        {floorNumber}° andar
      </div>
    </div>  
  )
}