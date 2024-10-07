import { pdf } from '@react-pdf/renderer';

// const resendAPI = import.meta.env.RESEND_API; 
// const resend = new Resend(`${resendAPI}`);

export const generatePDF = async (DocComponent) => {
    const asBlob = await pdf(DocComponent).toBlob();
    return asBlob;
  };

export const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const sendEmail = (email, subject, message, attachment) => {
    email = 'mini.dasha.12@gmail.com'
    window.Email.send({
      Host: "smtp.elasticemail.com", 
      Username: "strumndrum.wi@gmail.com",
      Password: "52127BD36CAF57AF6218976BC94DE2172D54",
      To: email,
      From: "strumndrum.wi@gmail.com",
      Subject: subject,
      Body: message,
      Attachments: [
        {
          name: "order-details.pdf",
          data: attachment,
        },
      ],
    }).then((message) => {
        console.log(email)
        console.log(message)
    }) 
    .catch((error) => {
        console.error("Error sending email:", error)
    }

    );

  };
  