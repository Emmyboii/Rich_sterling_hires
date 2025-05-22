// google.js
import { gapi } from "gapi-script";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

export const ensureGapiInitialized = async () => {
    if (!gapi.auth2 || !gapi.auth2.getAuthInstance()) {
        try {
            await gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                scope: SCOPES,
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
            });
        } catch (error) {
            console.error("Failed to initialize Google API", error);
            alert("Google API failed to initialize. Please try again later.");
            return false;
        }
    }
    return true;
};

export const createGoogleCalendarEvent = async (eventData) => {
    return gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: eventData,
    });
};
