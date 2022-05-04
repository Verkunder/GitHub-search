import React, {useRef, useState} from "react"
import GitHubUser from "./components/GitHubUser"
import Git from "./assets/png/git.png"

const App = () => {
    const style = {
        display: "flex",
        justifyContent: "center",
    }
    const text = useRef<HTMLInputElement>(null)
    const [newValue, setValue] = useState<string | undefined>('verkunder')

    const textChange = () => {
        const newValue = text.current?.value
        setValue(newValue)
    }

    return (
        <>
            <div className='container pt-5'>
                <div className='row justify-content-center'>
                    <div className='col align-self-center' style={style}>
                        <h1>
                            Аккаунт GitHub
                            <img src={Git} style={{ width: "50px" }}></img>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='container pt-5 pb-5'>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input ref={text} onChange={textChange} type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1" />
                </div>
            </div>
            <GitHubUser username={newValue} />
        </>
    )
}

export default App
