const addHeader = () => {
    const div = document.createElement("div")
    div.innerText = "yooo!"
    document.getElementById("content").appendChild(div)
    return div
}

export { addHeader };