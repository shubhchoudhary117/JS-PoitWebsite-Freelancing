const openBar = document.getElementById("openMenu")
const menu = document.getElementById("menubar")
const loader = document.getElementById("loader-section")
const sendButton = document.getElementById("contact-btn")
const username = document.getElementById("name")
const senderemail = document.getElementById("email")
const mobile = document.getElementById("mobile")
const address = document.getElementById("address")
const message = document.getElementById("message")
const AlertMessage = document.getElementById("alert-message")
const InvalidAlert = document.getElementById("invalid-alert")



// window loader
window.addEventListener("load", function () {
    loader.style.display = "none"
})



// open menubar after click bar
function openMenuBar() {
    menu.style.left = "0px";
    openBar.style.display = "none"
}

// close menu bar after click close btn
function closeMenuBar() {
    menu.style.left = "-100%"
}


// email sender

sendButton.addEventListener('click', function(){
    let email=senderemail.value;
    if (validateEmail(email)) {
        SendingMail(username.value,senderemail.vlaue,mobile.value,address.value,message.value)
    }
    else {
        InvalidAlert.style.display = "block"
    }

})

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};



function SendingMail(userName, userEmail, userMobile, userAddress, userMessage) {

    const params = {
        from_name: userName,
        email_id: userEmail,
        message: `${userMessage}Address--${userAddress}--Mobile Number${userMobile}`
    }
    emailjs.init("pNeFe6H5LSbFn4_U8")
    emailjs.send("service_0u80zjw", "template_qgyu15p", params).then(function (res) {
        if (res.status === 200) {
            username.value = " ";
            email.value = " ";
            mobile.value = " ";
            address.value = " ";
            message.value = " ";
            AlertMessage.style.display = "block";
            InvalidAlert.style.display = "none"
        }
        else {

            InvalidAlert.style.display = "block"
            AlertMessage.style.display = "none";
        }
    })
}