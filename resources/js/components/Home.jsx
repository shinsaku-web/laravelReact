import React, { useEffect } from 'react';
import { MainTable } from './MainTable';
import axios from "axios";

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];

export function Home() {
    useEffect(() => {
        axios.get("/api/hello").then((res) => {
            const data = res.data
            console.log(data);
        })
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <MainTable />
                    </div>
                </div>
            </div>
        </div>
    );
}
