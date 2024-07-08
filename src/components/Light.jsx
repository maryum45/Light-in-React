import { useState } from "react"

function Light() {

    // setColor is aupdting the color and it works as functin 
    const [color, setColor] = useState("")
    // changing the button colors
    // setState used boleam data true or false
    const [isOn, setIsOn] = useState(false)

    // update on button
    const handleOn = () => {
        setColor("yellow")
        setIsOn(true)
    }

    // update off

    // creating fat arrow
    const handleOff = () => {
        setColor("white")
        setIsOn(false)
    }

    return <div className="flex justify-center">
        <div>

            <div style={{ backgroundColor: color }} className="w-[400px] h-[400px] mt-10  mr-10 border-4 border-black rounded-full"></div>

            <button style={{ backgroundColor: isOn == true ? "red" : "" }} onClick={handleOn} className=" bg-yellow-500 ml-20 mt-2 px-3 py-2 text-3xl ">On</button>
            <button style={{ backgroundColor: isOn == false ? "green" : "" }} onClick={handleOff} className=" bg-yellow-500 ml-20 mt-2 px-3 py-2 text-3xl">OFF</button>
        </div>

    </div>
}

export default Light