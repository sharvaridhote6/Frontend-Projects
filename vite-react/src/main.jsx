import { React } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



const reactElement={
    type: "a",
    props: {
        href: "https://google.com",
        target:"_blank"
    },
    children:"click me to visit google"
}

function myApp(){
    return(
        <div>
            <h1>
                custom react app
            </h1>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
// const AnotherElement=(
    <a href="https://google.com" target="_blank">
        Visit Google
    </a>
// );

createRoot(document.getElementById('root')).render( // only 1 argument can be paszsed to root.render
//   <StrictMode>
    <App /> ,
    // <myApp/>
    // AnotherElement
//   </StrictMode>,
)
