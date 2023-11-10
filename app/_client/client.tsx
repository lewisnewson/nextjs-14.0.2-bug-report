"use client"

import { useEffect } from "react"

export default function HomeClient({ fetchServerRequest }) {
    useEffect(() => {
        // Attempt to fetch data from the server action
        fetchServerRequest().then((response: object[]) => {
            console.log(response)
        }).catch((error: any) => {   
            console.log(error)
        })
    }, [])

    return "App root"
}