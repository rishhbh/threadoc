export const verificationEmail = (verificationUrl) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <title>Verify your email</title>
        </head>

        <body
            style="
                margin:0;
                padding:40px 20px;
                background:#f5f5f5;
                color:#0c0a09;
                font-family:Arial, Helvetica, sans-serif;
            "
        >
            <divDOCTYPEDOCTYPE
                style="
                    max-width:600px;
                    margin:auto;
                    background:#ffffff;
                    padding:40px;
                    border:1px solid #e7e5e4;
                    border-radius:16px;
                "
            >

                <h2
                    style="
                        margin:0 0 20px;
                        color:#0c0a09;
                        font-family:Georgia, 'Times New Roman', serif;
                        font-size:32px;
                        font-weight:300;
                        line-height:1.2;
                        letter-spacing:-0.3px;
                    "
                >
                    Verify your email
                </h2>

                <p
                    style="
                        margin:0;
                        color:#4e4e4e;
                        font-size:16px;
                        line-height:1.5;
                    "
                >
                    Thank you for signing up! Click the button below to verify
                    your email address.
                </p>

                <a
                    href="${verificationUrl}"
                    style="
                        display:inline-block;
                        margin-top:28px;
                        padding:13px 22px;
                        background:#292524;
                        color:#ffffff;
                        text-decoration:none;
                        border-radius:9999px;
                        font-size:15px;
                        font-weight:500;
                    "
                >
                    Verify Email
                </a>

                <p
                    style="
                        margin:28px 0 0;
                        padding-top:20px;
                        border-top:1px solid #e7e5e4;
                        color:#777169;
                        font-size:14px;
                        line-height:1.5;
                    "
                >
                    This verification link expires in
                    <strong style="color:#292524;">15 mins</strong>.
                </p>

                <p
                    style="
                        margin:16px 0 0;
                        color:#777169;
                        font-size:14px;
                        line-height:1.5;
                    "
                >
                    If you didn't create an account, you can safely ignore
                    this email.
                </p>

            </div>
        </body>
        </html>
    `;
};