import { Elevator } from "@/components/Elevator";
import { Floor } from "@/components/Floor";

export function ElevatorPage() {
  return (
    <>
      <div className="max-w-md mx-auto mt-4 p-3 bottom-0 shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4 mt-4">Elevador</h2>
        <div className="grid grid-row-4 grid-flow-row">
          <Floor floorNumber={4} />
          <Floor floorNumber={3} />
          <Floor floorNumber={2} />
          <Floor floorNumber={1} />
        </div>
      </div>
      <div className="max-w-md mx-auto">
        <Elevator />
      </div>
    </>
  )
} 