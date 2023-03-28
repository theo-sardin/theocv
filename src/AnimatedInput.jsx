import { Input } from "@mui/material";
import React, {useState, useEffect} from "react";


export const AnimatedInput = ({placeholders: passedPlaceholder = [], ...passedProps}) => {
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const [placeholders] = useState(passedPlaceholder);
    const [placeholder, setPlaceholder] = useState(placeholders[0].slice(0, 0));
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [initialCurrentPlaceholder, setInitialCurrentPlaceholder] = useState(placeholders[0]);
    const [placeholdersIndex, setPlaceholdersIndex] = useState(1);

    useEffect(() => {
        const intr = setInterval(async () => {
            setPlaceholder(initialCurrentPlaceholder.slice(0, placeholderIndex));
            if (placeholderIndex + 1 > initialCurrentPlaceholder.length) {
                await sleep(1000)
                if(placeholdersIndex >= placeholders.length - 1){
                    setPlaceholdersIndex(0)
                }else{
                    setPlaceholdersIndex(placeholdersIndex + 1)
                }

                setPlaceholderIndex(0)
                setInitialCurrentPlaceholder(placeholders[placeholdersIndex])
                setPlaceholder(initialCurrentPlaceholder.slice(0, placeholderIndex))
               

            } else {
                setPlaceholderIndex(placeholderIndex + 1)

            }
        }, 100);
        return () => {
            clearInterval(intr)
        }
    },);


    return <Input {...passedProps} placeholder={placeholder}/>
};