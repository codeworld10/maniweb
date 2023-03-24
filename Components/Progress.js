import React, {useState} from 'react'

const Progress = () => {
    const [progressValue, setProgressValue] = useState(90);
    const [css, setCss] = useState(80)
    const [javascript, setJavascript] = useState(70)
    const [react, setReact] = useState(75)
    const [next, setNext] = useState(72)
  return (
    <>
    <div className='Progress_center'>
    <div className="progress-bar-container">
    <div
      className="HTML"
      style={{ width: `${progressValue}%`, transition: 'width 0.3s' }}
    >HTML 90%</div>
  </div>
    </div>
   
    <div className='Progress_center'>
    <div className="progress-bar-container">
    <div
      className="CSS"
      style={{ width: `${css}%`, transition: 'width 0.3s' }}
    >CSS3 90%</div>
  </div>
    </div>

    <div className='Progress_center'>
    <div className="progress-bar-container">
    <div
      className="JAVASCRIPT"
      style={{ width: `${javascript}%`, transition: 'width 0.3s' }}
    >JAVASCRIPT 90%</div>
  </div>
    </div>

    <div className='Progress_center'>
    <div className="progress-bar-container">
    <div
      className="REACT"
      style={{ width: `${react}%`, transition: 'width 0.3s' }}
    >REACT JS 90%</div>
  </div>
    </div>

    <div className='Progress_center'>
    <div className="progress-bar-container">
    <div
      className="NEXT"
      style={{ width: `${next}%`, transition: 'width 0.3s' }}
    >NEXT JS 90%</div>
  </div>
    </div>

    <div className='Progress_center'>
    <div className="progress-bar-container">
    <div
      className="NODE"
      style={{ width: `${next}%`, transition: 'width 0.3s' }}
    >NODE JS 90%</div>
  </div>
    </div>

    <div className='Progress_center'>
    <div className="progress-bar-container">
    <div
      className="EXPRESS"
      style={{ width: `${next}%`, transition: 'width 0.3s' }}
    >EXPRESS JS 90%</div>
  </div>
    </div>

    <div className='Progress_center'>
    <div className="progress-bar-container">
    <div
      className="MONGO"
      style={{ width: `${next}%`, transition: 'width 10.5s ease-in-out' }}
    >MONGODB 90%</div>
  </div>
    </div>
</>
  )
}

export default Progress