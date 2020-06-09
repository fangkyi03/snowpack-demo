import React from 'react'
import { RightOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd';
import styles from './index.module.css'

export default function Index() {
    const [num,setNum] = React.useState(0)
    function start(){
        setNum(num + 1)
    }
    function clear() {
        setNum(0)
    }
    return (
        <div className={styles.main}>
            <div style={{width:200}}>
                <Button onClick={start}>添加</Button>
                <Button onClick={clear}>清除</Button>
                <Input value={num} />
                测试icon按钮显示
                <RightOutlined />
            </div>
        </div>
    )
}
