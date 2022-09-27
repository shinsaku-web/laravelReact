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

export function MainTable() {
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
                        <TableRow>
                            <TableCell align="center">モーリー</TableCell>
                            <TableCell align="center">肩トレ</TableCell>
                            <TableCell align="center"><Button color="secondary" variant="contained">編集</Button></TableCell>
                            <TableCell align="center"><Button color="primary" variant="contained">完了</Button></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">ドンキーコング</TableCell>
                            <TableCell align="center">バナナ補給</TableCell>
                            <TableCell align="center"><Button color="secondary" variant="contained">編集</Button></TableCell>
                            <TableCell align="center"><Button color="primary" variant="contained">完了</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}
