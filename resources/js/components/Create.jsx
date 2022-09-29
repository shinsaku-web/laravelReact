import { Box, Button, Container, TextField } from '@mui/material';
import { MainTable } from './MainTable';
import { borderRadius } from "@mui/system";
import React, { useEffect, useState } from 'react';

export const Create = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("/api/tasks").then((res) => {
            const data = res.data
            console.log(data);
            setData(data);
        })
    }, []);
    return (
        <div className="container">
            <div>
                <Container maxWidth="lg">
                    <h1 style={{ textAlign: "center" }}>新規登録</h1>
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
                            />
                            <TextField
                                sx={{ marginLeft: "24px" }}
                                id="task"
                                label="task"
                                placeholder="タスクを入力"
                                variant="outlined"
                            />
                            <Button sx={{ marginLeft: "16px", marginTop: "8px" }} variant="contained">登録！</Button>
                        </form>
                    </Box>
                </Container>
            </div>
            {data ? <MainTable tasks={data} /> : <p>loading...</p>}
        </div >
    )
}