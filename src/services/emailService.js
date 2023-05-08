require('dotenv').config();
const nodemailer = require('nodemailer');

let senSimpleEmail = async (receivedData) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.GMAIL_ACCOUNT, // generated ethereal user
            pass: process.env.GMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"CSKH Booking Care 👻" <vtt10111011@gmail.com>', // sender address
        to: receivedData.email, // list of receivers
        subject:
            receivedData.languages === 'en'
                ? 'Information to book a medical appointment'
                : 'Thông tin đặt lịch khám bệnh', // Subject line
        html: renderBodyEmail(receivedData), // html body
    });
};
let renderBodyEmail = (receivedData) => {
    if (receivedData.languages === 'en') {
        return `<h3> Dear ${receivedData.firstName} ${receivedData.lastName}!</h3> </br>
                    <div>
                        You received this email because you booked an appointment at bookingcare.vn with Dr.
                        <b>${receivedData.firstNameDoctor} ${receivedData.lastNameDoctor}</b>
                        at around time <b>${receivedData.timeDisplay}</b>
                        on date <b>${receivedData.dayDisplay}.</b>
                    </div>
                    <div>If the above information is correct, please click the link below to confirm.</div>
                    <div><a href=${receivedData.linkRedirect} target="_blank">
                    Click here to confirm</a></div>
                    <div>Bookingcare team sincerely thanks!</div>
                     `;
    } else {
        return `<h3>Xin chào ${receivedData.lastName} ${receivedData.firstName}!</h3> </br>
                    <div>
                        Bạn nhận được email này vì bạn đã đặt lịch khám bệnh tại bookingcare.vn với bác sĩ
                        <b>${receivedData.lastNameDoctor} ${receivedData.firstNameDoctor}</b>
                        vào khoảng thời gian <b>${receivedData.timeDisplay}</b>
                        ngày <b>${receivedData.dayDisplay}.</b>
                    </div>
                    <div>Nếu thông tin trên là đúng bạn vui lòng nhấn vào đường link
                    bên dưới để xác nhận.</div>
                    <div><a href=${receivedData.linkRedirect} target="_blank">
                    Nhấn vào đây để xác nhận</a></div>
                    <div>Đội ngũ Bookingcare trân trọng cảm ơn!</div> `;
    }
};
module.exports = {
    senSimpleEmail,
};
