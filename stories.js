msgData = JSON.parse(new URLSearchParams(window.location.search).get("story"))

sender = msgData.chain[0][0].sender
receiver = msgData.people[0] == sender ? msgData.people[1] : msgData.people[0]

document.getElementById("recipient").innerText = receiver

phone = document.getElementById("phone")
msgData.chain.forEach((msgSet) => {
    timeSkip1 = document.createElement("p")
    timeSkip1.className = "timeskip"
    timeSkip1.innerText = "Messages"
    timeSkip2 = document.createElement("p")
    timeSkip2.className = "timeskip"
    timeSkip2.innerHTML = "<b>XXXXX</b>, XX:XX XM"
    phone.appendChild(timeSkip1)
    phone.appendChild(timeSkip2)
    msgSet.forEach((msg) => {
        if (msg.sender == sender) {
            phone.innerHTML += `<div class="msgContainerRight">
            <div class="msg msgRight">${msg.message}</div>
        </div>`
        } else {
            phone.innerHTML += `<div class="msgContainerLeft">
            <div class="msg msgLeft">${msg.message}</div>
        </div>`
        }
    })
})
phone.innerHTML += "<p class=\"end\">THE END.</p>"
console.log(msgData.chain, sender, receiver)