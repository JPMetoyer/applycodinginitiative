
import { initializeApp } from "firebase/app";
import { json, type RequestHandler } from '@sveltejs/kit';
import { API_KEY, APP_ID, AUTH_DOMAIN, MEASUREMENT_ID, MESSAGING_SENDER_ID } from '$env/static/private';


interface Application {
    stream: string;
    name: string;
    ID: number;
    email: string;
    interest: string;
    successfulYearDescription: string;
    cartoon: string;
    pizza: string;
}

const applicationConfiguration = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: "wunschecodinginitiative",
    storageBucket: "wunschecodinginitiative.appspot.com",
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
}
  

export const POST: RequestHandler = async ({ request }) => {

    const application = initializeApp(applicationConfiguration);
    const data : Application = await request.json();

    return json({ response: "Received" });
};




