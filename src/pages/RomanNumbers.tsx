import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { toDecimal, toRoman } from "@/functions/Roman";
import { ChangeEvent, useEffect, useState } from "react";

export function RomanNumbers() {
  const [roman, setRoman] = useState("")
  const [number, setNumber] = useState<number | null>(null)

  useEffect(() => {
    setRoman(toRoman(Number(number)))
  }, [number])

  useEffect(() => {
    setNumber(toDecimal(roman))
  }, [roman])

  function handleSetRoman(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.toUpperCase()

    const regex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
    if(!regex.test(value)) {
      toast({
        title: "Algarismo romano invalido",
        variant: "destructive"
      })
      return;
    }

    setRoman(value)
  }
  
  function handleSetDecimal(event: ChangeEvent<HTMLInputElement>) {
    if(Number(event.target.value) > 3999 || Number(event.target.value) < 0) {
      toast({
        title: "O número não pode ser maior que 3999 e menor que 0",
        variant: "destructive"
      })
      return;
    }
    setNumber(Number(event.target.value))
  }
  return (
    <div className="max-w-md mx-auto mt-4 p-3 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4 mt-4">Conversor números romanos</h2>

      <div className="mb-4">
        <Label className="block font-medium text-gray-700 mb-2 text-lg">Romano</Label>
        <div className="flex gap-2">
          <Input 
            placeholder="Número romano"
            value={roman ? roman : ""}
            onChange={handleSetRoman}
          />
        </div>
        <Label className="block font-medium text-gray-700 mb-2 text-lg mt-2">Decimal</Label>
        <div className="flex gap-2">
          <Input 
            placeholder="Número decimal"
            value={number ? number : ""}
            onChange={handleSetDecimal}
            type="number"
          />
        </div>
      </div>
    </div>
  )
}