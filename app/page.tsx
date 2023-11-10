import HomeClient from "./_client/client"

export default function Home() {
    async function fetchServerRequest() {
        "use server"

        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const json = await response.json()
        return json
    }

    // Return the client component
    return <HomeClient fetchServerRequest={fetchServerRequest} />
}