import { useEffect, useState } from "react"
import { Box, Button, Container, TextField } from '@mui/material';
import { useParams } from "react-router-dom";

export const Update = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("/api/tasks/edit/" + id).then((res) => {
            const data = res.data
            console.log(data);
            setData(data);
        })
    }, []);
    return (
        <div className="container">
            <div>
                <Container maxWidth="lg">
                    <h1 style={{ textAlign: "center" }}>~ 編集 ~</h1>
                    <Box sx={{
                        margin: "40px auto",
                        padding: "32px",
                        width: "600px",
                        border: "1px solid #f7f7f7",
                        borderRadius: "4px",
                        boxShadow: "4px 4px 15px rgba(0,0,0,0.1)"
                    }}>
                        <form action="">
                            <TextField
                                // error
                                id="name"
                                label="name"
                                placeholder="Hello World!"
                                variant="outlined"
                                value={data ? data.name : "loading..."}
                            />
                            <br />
                            <br />
                            <TextField
                                sx={{ width: "100%" }}
                                id="content"
                                label="content"
                                placeholder="タスクを入力"
                                variant="outlined"
                                multiline
                                value={data ? data.content : "loading..."}
                            />
                            <br />
                            <br />
                            <Button variant="contained">編集！</Button>
                        </form>
                    </Box>
                </Container>
            </div>
        </div>
    )
}