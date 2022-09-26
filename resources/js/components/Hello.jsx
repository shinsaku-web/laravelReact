import { useEffect } from "react"
export const Hello = () => {
    useEffect(() => {
        fetch('/api/hello')
            .then((res) => console.log(res.json))
            // .then((data) => console.log(data))
            .catch((e) => console.error(e))
    }, []);
    return (
        <div>
            <h2>Hello components</h2>
            <button>Thiis is button</button>
        </div>
    )
}