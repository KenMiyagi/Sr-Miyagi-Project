const { admin } = require("../../db");

//EMAIL
/* const path = require("path");
const transporter = require("../../Tools/email");
const fs = require("fs");
const emailUser = process.env.EMAIL_USER;
const emailTemplate = fs.readFileSync(
  path.join(__dirname, "../../Templates/emailRecovery.html"),
  "utf-8"
); */

const getAdminAccController = async (email, code) => {
  const adminAcc = await admin.findOne({
    where: { email },
    /* include: [
    ], */
  });

  /* if ((code, adminAcc)) {
    const emailTemplateConValores = emailTemplate.replace(
      "${randomCode}",
      code
    );

    const menssageRegister = {
      from: emailUser,
      to: email,
      subject: `Codigo de recuperacion`,
      html: emailTemplateConValores,
    };

    transporter.sendMail(menssageRegister, (error, info) => {
      if (error) {
        console.error("Error al enviar el correo electrónico :", error);
      } else {
        console.log("Correo electrónico enviado con éxito:", info.response);
      }
    });
  } */

  if(adminAcc) return adminAcc
  return false
};

module.exports = {
  getAdminAccController,
};
