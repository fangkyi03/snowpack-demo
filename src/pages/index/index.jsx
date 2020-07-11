import React from 'react'
import { Button, Input, Select, message } from 'antd';
import styles from './index.module.css'

export default function Index() {
    const [videoUrl,setVideoUrl] = React.useState('https://www.qmaile.com/ks.html?123123')
    const [selectData,setSelectData] = React.useState([])
    const [select,setSelect] = React.useState('https://jx.du2.cc/?url=')
    const [inputValue,setInputValue] = React.useState('')
    React.useEffect(()=>{ 
      setSelectData(
        [
          {
            label:'⑤号通用vip引擎系统【全网解析】',
            value:'https://jx.du2.cc/?url='
          },
          {
            label:'④号通用vip引擎系统【超级稳定通用】',
            value:'https://jx.drgxj.com/?url='
          },
          {
            label:'③号通用vip引擎系统【稳定通用】',
            value:'https://jx.618ge.com/?url='
          },
          {
            label:'②号通用vip引擎系统【稳定通用】',
            value:'https://vip.jlsprh.com/?url='
          },
          {
            label:'无广告超速解析',
            value:'https://jx.drgxj.com/?url='
          },
          {
            label:'①号通用vip引擎系统【稳定通用】',
            value:'https://jx.598110.com/?url='
          },
          {
            label:'vip超清视频解析【全网vip解析】',
            value:'https://jx.idc126.net/jx/?url='
          }
        ]
      )
    },[])
    function renderTitle() {
      return (
        <div>视频在线解析</div>
      )
    }
    function renderVideo() {
      return (
        <iframe src={videoUrl} className={styles.video} frameBorder={'no'} webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""/>
      )
    }
    function onInputChange(data) {
      const {target} = data
      const {value} = target
      setInputValue(value)
    }
    function renderInput() {
      return (
        <Input placeholder={'请输入视频地址'} value={inputValue} onChange={onInputChange}/>
      )
    }
    function onSelectChange(data) {
      setSelect(data)
    }
    function renderSelect() {
      return (
        <Select onChange={onSelectChange} style={{width:'100%'}} value={select}>
          {
            selectData.map((e,i)=>{
              return (
                <Select.Option value={e.value} key={i}>
                  {
                    e.label
                  }
                </Select.Option>
              )
            })
          }
        </Select>
      )
    }
    function onPlay() {
      if (!inputValue) {
        message.error('请输入视频地址')
        return 
      }
      if (!select) {
        message.error('请选择播放源')
        return 
      }
      setVideoUrl(select + inputValue)
    }
    function renderButton() {
      return (
        <Button onClick={onPlay}>点击解析</Button>
      )
    }
    function renderBody() {
      return (
        <div className={styles.body}>
            {renderTitle()}
            {renderVideo()}
            {renderSelect()}
            {renderInput()}
            {renderButton()}
        </div>
      )
    }
    return (
        <div className={styles.main}>
            {renderBody()}
        </div>
    )
}
