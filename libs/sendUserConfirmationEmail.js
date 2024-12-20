// var nodemailer = require("nodemailer");
import { createTransport } from "nodemailer";
// const nodeMailer = require("nodemailer");

const confirm_email_code_html = ({ verification_code }) => {
  return `<!DOCTYPE html>

<html
  lang="en"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <!--[if !mso]><!-->
    <!--<![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }

      .image_block img + div {
        display: none;
      }

      sup,
      sub {
        line-height: 0;
        font-size: 75%;
      }

      @media (max-width: 520px) {
        .desktop_hide table.icons-inner,
        .social_block.desktop_hide .social-table {
          display: inline-block !important;
        }

        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .mobile_hide {
          display: none;
        }

        .row-content {
          width: 100% !important;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }

        .row-1 .column-1 .block-3.paragraph_block td.pad > div {
          font-size: 14px !important;
        }
      }
    </style>
    <!--[if mso
      ]><style>
        sup,
        sub {
          font-size: 100% !important;
        }
        sup {
          mso-text-raise: 10%;
        }
        sub {
          mso-text-raise: -10%;
        }
      </style>
    <![endif]-->
  </head>
  <body
    class="body"
    style="
      background-color: #ffffff;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #ffffff;
      "
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-1"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        color: #000000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="heading_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #1e0e4b;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 38px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 45.6px;
                                    "
                                  >
                                    <span
                                      class="tinyMce-placeholder"
                                      style="word-break: break-word"
                                      >InvenMatrix</span
                                    >
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad" style="width: 100%">
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <div style="max-width: 500px">
                                      <img
                                        height="auto"
                                        src="https://res.cloudinary.com/drfqge33t/image/upload/v1725287775/inventory_ajzu0u.jpg"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 100%;
                                        "
                                        width="500"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="paragraph_block block-3"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #444a5b;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 16px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 19.2px;
                                    "
                                  >
                                    <p style="margin: 0; margin-bottom: 16px">
                                      Please click on this link below to verify
                                      your email address... If the link is not
                                      clickable, just copy and paste on your
                                      browser to verify.
                                    </p>
                                    <p style="margin: 0; margin-bottom: 16px">
                                      The link is valid for just 30mins...
                                      Anything after that, the link will be void
                                      / invalid.
                                    </p>
                                    <p style="margin: 0; margin-bottom: 16px">
                                    If you feel this mail was a mistake or If you don't have an account with InvenMatrix, Please ignore this message
                                    </p>
                                    <p style="margin: 0">Thank you</p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-4"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                max-height: 0;
                                /* overflow: hidden; */
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    align="center"
                                    style="
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      text-align: center;
                                    "
                                  >
                                    <!-- <div class="our-class"> -->
                                    <p>
                                      Click or copy and paste this link below
                                    </p>
                                    <a
                                      href="https://crm-inventory-dashboard.vercel.app/verify_email?verification_id=${verification_code}"
                                      >https://crm-inventory-dashboard.vercel.app/verify_email?verification_id=${verification_code}</a
                                    >
                                    <!-- </div> -->
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="social_block block-5"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="social-table"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        display: inline-block;
                                      "
                                      width="144px"
                                    >
                                      <tr>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            ><img
                                              alt="Facebook"
                                              height="30"
                                              width="30"
                                              src="https://res.cloudinary.com/drfqge33t/image/upload/v1725288320/facebook_sgvemr.jpg"
                                              style="
                                                display: block;
                                                height: 30;
                                                width: 30;
                                                border: 0;
                                                border-radius: 50;
                                                object-fit: cover;
                                              "
                                              title="facebook"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://res.cloudinary.com/drfqge33t/image/upload/v1725288322/twitter_oqv8je.jpg"
                                            target="_blank"
                                            ><img
                                              alt="Twitter"
                                              height="30"
                                              width="30"
                                              src="https://res.cloudinary.com/drfqge33t/image/upload/v1725288975/sl_z_072523_61700_07_glqoxo.jpg"
                                              style="
                                                display: block;
                                                height: 30;
                                                width: 30;
                                                border: 0;
                                                border-radius: 50%;
                                                object-fit: cover;
                                              "
                                              title="twitter"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.linkedin.com/"
                                            target="_blank"
                                            ><img
                                              alt="Linkedin"
                                              height="30"
                                              width="30"
                                              src="https://res.cloudinary.com/drfqge33t/image/upload/v1725288322/linkedin_ufbawi.jpg"
                                              style="
                                                display: block;
                                                height: 30;
                                                width: 30;
                                                border: 0;
                                                border-radius: 50%;
                                                object-fit: cover;
                                              "
                                              title="linkedin"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            ><img
                                              alt="Instagram"
                                              height="30"
                                              width="30"
                                              src="https://res.cloudinary.com/drfqge33t/image/upload/v1725288319/ig_qrntva.jpg"
                                              style="
                                                display: block;
                                                height: 30;
                                                width: 30;
                                                border: 0;
                                                border-radius: 50%;
                                                object-fit: cover;
                                              "
                                              title="instagram"
                                              width="32"
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>
  `;
};
export const sendConfirmationMailCode = async ({
  user_email,
  subject,
  code,
}) => {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "kennyegun240@gmail.com",
      pass: "nzvk zrti dxxu eonz",
    },
  });

  var mailOptions = {
    from: "kennyegun240@gmail.com",
    to: user_email,
    subject: subject,
    // text: "That was easy!",
    html: confirm_email_code_html({ verification_code: code }),
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {}
};
