/*
  SETUP:
  1. script.google.com -> New project (or Extensions -> Apps Script inside any Sheet).
  2. Paste this script, Save.
  3. Deploy -> New deployment -> Web app -> Who has access: Anyone -> Deploy. Allow permissions.
  4. Copy the Web App URL into APPS_SCRIPT_URL in firebase-config.js.
  This script only sends OTP emails (free via Gmail quota). All other data lives in Firestore.
*/
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  if (data.action === "sendOtp") {
    MailApp.sendEmail({
      to: data.email,
      subject: "Brand Crafter - Your Verification Code",
      body: "Your OTP is: " + data.otp + "\n\nValid for 10 minutes. If you did not request this, ignore this email.\n\n- Brand Crafter Team"
    });
    return ContentService.createTextOutput(JSON.stringify({ result: "sent" })).setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput(JSON.stringify({ result: "unknown_action" })).setMimeType(ContentService.MimeType.JSON);
}
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "OTP mailer live" })).setMimeType(ContentService.MimeType.JSON);
}
