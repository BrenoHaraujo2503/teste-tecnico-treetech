import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GeneratePassword } from "./pages/GeneratePassword"
import { RomanNumbers } from "./pages/RomanNumbers"
import { ElevatorPage } from "./pages/ElevatorPage"
import { ElevatorProvider } from "./contexts/ElevatorContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RomanNumbers />
  },
  {
    path: "/senha",
    element: <GeneratePassword />
  },
  {
    path: "/elevador",
    element: <ElevatorProvider><ElevatorPage /></ElevatorProvider>
  }
])

export function App() {
  return <RouterProvider router={router} />
}
