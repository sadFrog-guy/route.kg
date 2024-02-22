import React, { useState } from "react"
import ImageOfBus from "./Components/ImageOfBus/ImageOfBus"
import Input from "./Components/MyInput/Input"
import Card from "./Components/MyCards/Card"
import Button from "./Components/MyButton/Button"
import "./global.css"

function App() {
  const [number , setNumber] = useState("");
  const [current, setCurrent] = useState("");

  const routes = [
    '107',
    '433',
    '228',
    '110',
    '105',
    '109',
    '108',
  ]

  return (
    <div className="App">
      <ImageOfBus></ImageOfBus>
      <p className="heading">Выберите маршрут</p>
      <Input setNumber={setNumber} number={number}>{number}</Input>
      <div className="Card-box">
        {routes.map(item => {
          if(item.includes(number)){
            return <Card
                      setCurrent={setCurrent}
                      clicked={current === item ? true : false}
                      current={current}
                    >
                      {item}
                    </Card>
          }
        })}
      </div>
      <Button disabled={current ? false : true}>Далее</Button>
    </div>
  )
}

export default App