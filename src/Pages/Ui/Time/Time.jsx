
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import "./Time.css"

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }


    componentDidMount() {
        this.timerID = setInterval(() => 
            this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }


  render() {
    // const { t } = useTranslation()
    return (
      <div className='watch' >
        <h1 className='time-control' style={{fontSize: '80px'}}>{this.state.time}</h1>
        <div className='text-time' style={{ display: 'flex', justifyContent:"center", textAlign:"center", gap:'25px'}}>
        <p>{this.props.t("cаат")}</p>
        <p>{this.props.t("мүнөт")}</p>
        <p>{this.props.t("секунд")}</p>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Time)
