// import { Children } from "react"
function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // domElement.innerText = reactElement.children
    for(let prop in reactElement.props){
        if (prop=== 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type : 'a',
    props: {
        href : "https://google.com",
        target: '_blank'
    },
    children : "Click me to get App"
}

const mainContainer = document.querySelector('#root')

customRender(reactElement , mainContainer)

// const a = document.createElement("a")
// a.textContent = "Click me to get App"
// a.href = "https://google.com"
// a.target = "_blank"

// document.querySelector("#root").appendChild(a)
