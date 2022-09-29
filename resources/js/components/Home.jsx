import React, { useEffect } from 'react';
import { MainTable } from './MainTable';
import axios from "axios";

export function Home() {
    useEffect(() => {
        axios.get("/api/tasks").then((res) => {
            const data = res.data
            console.log(data);
        })
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1 style={{ textAlign: "center" }}>タスク管理</h1>
                        <br />
                        <MainTable />
                    </div>
                </div>
            </div>
        </div>
    );
}
