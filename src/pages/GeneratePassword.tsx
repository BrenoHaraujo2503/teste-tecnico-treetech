/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { generatePassword } from "@/functions/GeneratePassword";
import { strengthPasswordCalculator } from "@/functions/StrengthPassword";
import { cn } from "@/lib/utils";
// import { strengthPasswordCalculator } from "@/functions/StrengthPassword";
import { useEffect, useState } from "react";

export function GeneratePassword() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState([12])
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)

  const [strengthPassword, setStrengthPassword] = useState(10);

  const { toast } = useToast();

  function handleCopyPassword() {
    navigator.clipboard.writeText(password)

    toast({
      title: "Senha copiada para area de transferencia",

    })
  }

  useEffect(() => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      toast({
        title: "Você não selecionou nenhum checkbox para criar a senha!!",
        variant: "destructive"
      })
      setPassword("")
      return;
    }
    setPassword(generatePassword({
      length: length[0],
      lowercase,
      numbers,
      symbols,
      uppercase,
      emotes: false,
    }))

    setStrengthPassword(strengthPasswordCalculator(password))
  }, [length, uppercase, lowercase, numbers, symbols])

  return (
    <div className="max-w-md mx-auto mt-4 p-3 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4 mt-4">GERADOR DE SENHAS</h2>
      <div className="mb-4">
        <Label className="block text-sm font-medium text-gray-700">Tamanho da senha: {length}</Label>
        <Slider
          max={50} step={1} value={length}
          onValueChange={(e) => setLength(e)}
          className="mt-4"
        />
      </div>
      <div className="mb-4">
        <Label className="block font-medium text-gray-700 mb-2 text-lg">Incluir:</Label>
        <div className="flex flex-col space-y-2 ml-2">
          <div className="flex items-center">
            <Checkbox
              className="h-5 w-5"
              checked={uppercase}
              onClick={() => setUppercase(!uppercase)}
            />
            <Label className="text-sm text-gray-700 ml-2">Letras maiúsculas</Label>
          </div>
          <div className="flex items-center">
            <Checkbox
              className="h-5 w-5"
              checked={lowercase}
              onClick={() => setLowercase(!lowercase)}
            />
            <Label className="text-sm text-gray-700 ml-2">Letras minusculas</Label>
          </div>
          <div className="flex items-center">
            <Checkbox
              className="h-5 w-5"
              checked={numbers}
              onClick={() => setNumbers(!numbers)}
            />
            <Label className="text-sm text-gray-700 ml-2">Números</Label>
          </div>
          <div className="flex items-center">
            <Checkbox
              className=" h-5 w-5"
              checked={symbols}
              onClick={() => setSymbols(!symbols)}
            />
            <Label className="text-sm text-gray-700 ml-2">Símbolos</Label>
          </div>
        </div>
      </div>
      <div className="mb-4 mt-3">
        <Label className="block text-sm font-medium text-gray-700 mb-2">Senha gerada</Label>
        <Textarea
          readOnly
          value={password}
          className="resize-none"
        />
        <div className="mt-2 flex justify-between">
          {password && (<>
            <h2 className={cn("text-md font-semibold",
              {
                "text-red-500": strengthPassword < 0,
                "text-yellow-500": strengthPassword > 0 && strengthPassword <= 10,
                "text-green-500": strengthPassword > 10,
              })}>Senha {strengthPassword < 0 ? "Fraca" : strengthPassword <= 10 ? "Moderada" : "Forte"}</h2>
            <Button
              onClick={handleCopyPassword}
            >
              Copiar senha
            </Button>
          </>
          )}
        </div>
      </div>
    </div>
  )
}