import { useMemo } from "react"
import { useState } from "react"

function App() {
  const [totalAmount, setTotalAmount] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(1)

  const toPay = useMemo(() => {
    if (totalAmount <= 0 || numberOfPeople <= 0) {
      return null
    }

    return (totalAmount / numberOfPeople).toFixed(2)
  }, [totalAmount, numberOfPeople])

  return (
    <main className="mx-auto container mt-24 flex flex-col gap-y-5">
      <div className="flex flex-col">
        <label htmlFor="totalAmount">Importe total</label>
        <input
          type="number"
          id="totalAmount"
          className="border px-2 py-3"
          value={totalAmount}
          onInput={(event) => {
            setTotalAmount(event.target.value)
          }}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="numberOfPeople">Número de personas</label>
        <input
          type="number"
          id="numberOfPeople"
          className="border px-2 py-3"
          value={numberOfPeople}
          onInput={(event) => {
            setNumberOfPeople(event.target.value)
          }}
        />
      </div>
      {toPay && (
        <div>
          A pagar por persona <span>{toPay} €</span>
        </div>
      )}
    </main>
  )
}

export default App
