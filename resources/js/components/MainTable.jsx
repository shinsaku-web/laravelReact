import React from 'react';
import { Button, Card } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];

// 完了処理
const destroy = (id) => {
    axios.post('/api/tasks/delete', {
        id: id
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err)
        // alert('エラー')
    })
}

export function MainTable({ tasks }) {
    return (
        <Card>
            {/* テーブル部分の定義 */}
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    {/* ヘッダー部分 */}
                    <TableHead>
                        <TableRow>
                            {headerList.map((item, index) => (
                                <TableCell align="center" key={index}>{item}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {/* ボディ部分 */}
                    <TableBody>
                        {tasks.map((task, i) => (
                            <TableRow key={i}>
                                <TableCell align="center">{task.name}</TableCell>
                                <TableCell align="center">{task.content}</TableCell>
                                <TableCell align="center"><Button href={`/tasks/edit/${task.id}`} color="secondary" variant="contained">編集</Button></TableCell>
                                <TableCell align="center"><Button onClick={() => destroy(task.id)} color="primary" variant="contained">完了</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}
