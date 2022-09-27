import { useEffect } from "react"
import { Button } from '@mui/material';

export const Update = () => {
    useEffect(() => {
        // fetch('/api/hello')
        //     .then((res) => console.log(res.json))
        //     // .then((data) => console.log(data))
        //     .catch((e) => console.error(e))
    }, []);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Update!?</div>
                        <div className="card-body">Im an example component</div>
                        <Button color="primary" variant="contained">Hello World</Button>
                        <Button color="secondary" variant="contained">Hello World</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}