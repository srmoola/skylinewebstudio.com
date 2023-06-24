const sendname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const phone = document.getElementById("telephone");
const message = document.getElementById("message");
const submit = document.getElementById("form_button");
const form = document.getElementById("formcontainer");
const thanks = document.getElementById("tycontainer");

$(submit).click( () => {

    const emailvalue = email.value;
    const namevalue = sendname.value;
    const subjectvalue = subject.value;
    const phonevalue = phone.value;
    const messagevalue = message.value;

    let params = {
        from_name: namevalue,
        email_id: emailvalue,
        number: phonevalue,
        subject: subjectvalue,
        message: messagevalue,
    }

    if (Object.values(emailvalue).indexOf('@') === -1) {
        email.style.borderBottom = "solid 2px red"
        return false;

    } else if(phonevalue.length < 9){
        phone.style.borderBottom = "solid 2px red"
        return false;
    } else{
        emailjs.send("service_t18p3jg", "template_emaw3he", params).then( (res) => {
            if(!res.status === 200){
                alert("Oops, something went wrong! Please try again!")
                return false;
            }
            else{
                form.style.display = "none";
                thanks.style.display = "block";
            }
        });;
    }
});

