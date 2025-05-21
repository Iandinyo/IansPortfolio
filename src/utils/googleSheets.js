import { google } from 'googleapis';

const GOOGLE_SHEETS_API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
const GOOGLE_SHEETS_SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID;

export const submitToGoogleSheets = async (formData) => {
  try {
    const sheets = google.sheets({ version: 'v4', auth: GOOGLE_SHEETS_API_KEY });
    
    // Format the data for Google Sheets
    const values = [
      [new Date().toISOString(), formData.name, formData.email, formData.message]
    ];

    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'A1:D1', // This will automatically find the next empty row
      valueInputOption: 'RAW',
      resource: { values }
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
};
