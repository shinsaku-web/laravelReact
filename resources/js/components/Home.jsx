import React, { useEffect, useState } from 'react';
import { MainTable } from './MainTable';
import axios from "axios";

export function Home() {
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
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1 style={{ textAlign: "center" }}>タスク管理</h1>
                        <br />
                        {data ? <MainTable tasks={data} /> : <p>loading...</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
