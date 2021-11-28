const socket = io();

// Elements
const $msgForm = document.querySelector("#msg-form")
const $msgInput = $msgForm.querySelector("input")
const $msgFormBtn = document.querySelector('#submit-btn')
const $sendLocationBtn = document.querySelector('#send-location-btn')
const $msgsDiv = document.querySelector("#msgs")

// Templates
const msgTemplate = document.querySelector("#msg-template").innerHTML
const urlTemplate = document.querySelector("#location-url-template").innerHTML

// Options
const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

$msgForm.addEventListener("submit", (e) => {
    e.preventDefault();

    $msgFormBtn.setAttribute("disabled", "disabled")

    let msg = e.target.elements.message.value;

    socket.emit("sendMessage", msg, (err) => {
        $msgFormBtn.removeAttribute("disabled")
        $msgInput.value = ""
        $msgInput.focus()

        if (err) {
            return console.log(err)
        }

        console.log('msg delivered successfully!')
    });
});


socket.on("message", (msg) => {
    const html = Mustache.render(msgTemplate, {
        message: msg.text,
        createdAt: moment(msg.createdAt).format('h:mm a')
    });
    $msgsDiv.insertAdjacentHTML('beforeend', html)

})

socket.on("locationMessage", (url) => {
    const html = Mustache.render(urlTemplate, {
        url: url.url,
        createdAt: moment(url.createdAt).format('h:mm a')
    });
    $msgsDiv.insertAdjacentHTML('beforeend', html)
})

$sendLocationBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
        return alert("Geolocation is not supported on this browser");
    }

    $sendLocationBtn.setAttribute("disabled", "disabled")

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longtitude: position.coords.longitude
        }, () => {
            $sendLocationBtn.removeAttribute("disabled")
            console.log("Location shared!")
        })
    });
});


socket.emit('join', { username, room })