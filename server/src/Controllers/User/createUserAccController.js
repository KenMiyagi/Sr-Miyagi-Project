const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { user } = require("../../db");
require("dotenv").config();
const { SIGNATURE } = process.env;


/* const fs = require("fs");
const nodemailer = require("nodemailer");
const path = require("path");
const transporter = require("../../Tools/email");

const emailUser = process.env.EMAIL_USER;
const emailTemplate = fs.readFileSync(
  path.join(__dirname, "../../Templates/emailRegister.html"),
  "utf-8"
); */

const createUserAccController = async (props) => {
  /* const randomCode = Math.round(Math.random() * 999999); */
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(props.password, saltRounds);
  const lowerCaseEmail = props.email.toLowerCase();
  const defaultProfilePicture =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png";
  const [newUser, created] = await user.findOrCreate({
    where: { email: lowerCaseEmail },
    defaults: {
      ...props,
      password: hashedPassword,
      profilePicture: defaultProfilePicture
    },
  });
  /* const emailTemplateConValores = emailTemplate
    .replace("${randomCode}", randomCode)
    .replace("${newUserId}", newUser.id);

  const menssageRegister = {
    from: emailUser,
    to: email,
    subject: `Confirmación de Registro`,
    html: emailTemplateConValores,
  }; */

  if (created) {
    const returning = await user.findOne({
      where: {
        id: newUser.id,
      },
      /* include: [
        {
          model: areaTraining,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ], */
    });
    returning.password = 0;
    const token = jwt.sign(returning.dataValues, SIGNATURE);

    /* transporter.sendMail(menssageRegister, (error, info) => {
      if (error) {
        console.error("Error al enviar el correo electrónico :", error);
      } else {
        console.log("Correo electrónico enviado con éxito:", info.response);
      }
    }); */

    return { token };
  }
  return "used";
};

module.exports = {
  createUserAccController,
};
