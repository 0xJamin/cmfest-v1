import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";
import WaitListTemplate from "@/templates/emails/WaitListTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_TOKEN);

export default async function addToWaitList(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fullName, email } = req.body;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY!.split(String.raw`\n`).join("\n")!,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const sheets = google.sheets({ version: "v4", auth });
  const metaData = await sheets.spreadsheets.get({
    spreadsheetId,
  });

  // read rows from spreadsheets
  // const rows = await sheets.spreadsheets.values.get({
  //   spreadsheetId,
  //   range: "Sheet1",
  // });

  //write to spreadsheet
  const sheet = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:B",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[fullName, email]],
    },
  });
  if (sheet.status === 200) {
    try {
      const data = await resend.emails.send({
        from: "CMFest Africa <no-reply@emails.cmfest.africa>",
        to: email,
        subject: "Congratulations you're on the #CMFest23 Waitlist",
        html: "<strong>It works!</strong>",
        react: WaitListTemplate({ fullName }),
      });

      res.send(data);
      console.log(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
