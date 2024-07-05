import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const FormComponent = () => {
    const {state, handleFunction} = useContext(GlobalContext)
    const {data} = state
    const {handleInput, handleSubmit} = handleFunction
    
    return (
      <>
      <div className="bg-white">
        <div className="textbox" data-aos="fade-up">
            <h1 className="text-center text-2xl mb-3 font-bold">Main Tebak-Tebakan Dulu!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="username" value="Username (Clue : Mobil Impian Bagus)" />
                    </div>
                    <TextInput onChange={handleInput} value={data.username} type="text" name="username" placeholder="enter your username..." required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Password (Clue : Stadion Mancity)" />
                    </div>
                    <TextInput onChange={handleInput} value={data.password} type="password" name="password" placeholder="enter your password..." required />
                </div>
                <Button gradientDuoTone="greenToBlue" className="mt-3" type="submit">Submit</Button>
            </form>

        </div>
        </div>
      </>
    )
}

export default FormComponent;

