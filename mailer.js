nodemailer = require('nodemailer');


// service provider, credentials, handshaking

    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:true,
        auth:{
            user: 'mk5297523@gmail.com',
            pass: 'nsgj csnr hmks fvjc'
        }
    })


//mail object
mail = {
    from: 'mk5297523@gmail.com',
    to: 'nsti07@hotmail.com',
    subject: 'OTP',
    text: 'otp sent sucessfully'
}

//send mail
transporter.sendMail(mail, (err, data) => {
    if (err) {
        console.log(err)
    }else {
        console.log(data)
    }
})