import React, { useEffect, useState } from 'react'

const WeatherIcon = (props) => {
    const [img, setImg] = useState("")
    let condition = props.data

    useEffect(() => {

        switch (condition) {
            case "Haze":
                setImg("https://cdn-icons-png.flaticon.com/128/2930/2930095.png")
                console.log(condition)
                break;
            case "Clear":
                setImg("https://cdn-icons-png.flaticon.com/128/6974/6974833.png")
                console.log(condition)
                break;
            case "Clouds":
                setImg("https://cdn-icons-png.flaticon.com/128/1146/1146869.png")
                console.log(condition)
                break;
            case "Rain":
                setImg("https://cdn-icons-png.flaticon.com/128/1163/1163657.png")
                break;
            case "Snow":
                setImg("https://cdn-icons-png.flaticon.com/128/2315/2315309.png")
                console.log(condition)
                break;

            default:
                setImg("https://cdn-icons-png.flaticon.com/128/3845/3845731.png")
                console.log(condition)
                break;
        }
    }, [props.data])
    return (
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>

            <h3>{condition}</h3>    <img src={img} style={{ width: "50px" }} />

        </div>
    )
}

export default WeatherIcon
