
import { initializeApp } from "firebase/app";
import { Timestamp, collection, doc, getDoc, getDocs, getFirestore, limit, query, setDoc } from "firebase/firestore";
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

    try {
        const application = initializeApp(applicationConfiguration);
        const database = getFirestore(application);

        const data : Application = await request.json();

        const documentReference = doc(database, "hourofcode", data.email);
        await setDoc(documentReference, { ... data, time: Timestamp.now() }, { merge: false });

        return json({ status: 300, message: "Successfully sent application" });
    
    } catch (error) {
        return json({ status: 405, message: "Internal server error sending application request" })
    }    
};

export const GET: RequestHandler = async ({ request }) => {
    try {
        
        const application = initializeApp(applicationConfiguration);
        const database = getFirestore(application);

        const applicationCollection =  collection(database, `hourofcode`);
        const snapshot = await getDocs(applicationCollection);

        const responses = snapshot.docs.map((document) => document.data());

        return json({ status: 300, applications: responses, length: responses.length });
    } catch {
        return json({ status: 405, message: "Couldn't get data" })
    }
}


