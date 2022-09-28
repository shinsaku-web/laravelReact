import { useEffect } from "react"
import { Box, Button, Container, TextField } from '@mui/material';
import { MainTable } from './MainTable';
import { borderRadius } from "@mui/system";

export const Create = () => {
    // useEffect(() => {
    //     fetch('/api/hello')
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((e) => console.error(e))
    // }, []);
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
            <MainTable />
        </div >
    )
}