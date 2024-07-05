import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const navigate = useNavigate()
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=82c415ee87479acba31f52b7b4eccb56`)
            .then((res) => {
                console.log(res.data.results);
                setMovies(res.data.results)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    

    const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        console.log(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let usernameData = data.username.toLowerCase()
        let passwordData = data.password.toLowerCase()
        if (usernameData === "supra" && passwordData === "etihad") {
            navigate('/home')
        } else {
            alert("Eitsss coba lagi!")
        }
    }

    const [data, setData] = useState(
        {
            username: "",
            password: ""
        }
    )

    const formatDecimals = (x) => {
        let num = parseFloat(x);
        return Math.floor(num * 10) / 10;
    };

    const truncateWords = (text, maxWords) => {
        const words = text.split(" ");
        if (words.length <= maxWords) {
          return text;
        }
        return words.slice(0, maxWords).join(" ") + "...";
      };

    let state = { data, setData, movies, setMovies }
    let handleFunction = { handleInput, handleSubmit, formatDecimals, truncateWords }

    return (
        <GlobalContext.Provider value={
            {
                state,
                handleFunction
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}

