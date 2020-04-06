import ReactDOM from "react-dom"
import { pp } from "./components/SomeComponent"

chrome.storage.local.get(items => {
    let collected = items['someList'] as string[]
    let dis = document.getElementById('displayPanel')!
    let pacForm = pp
    ReactDOM.render(pacForm, dis)
})
