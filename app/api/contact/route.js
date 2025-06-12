import { NextResponse } from 'next/server';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Add validation for required config
if (!firebaseConfig.projectId) {
  console.error('Firebase projectId is missing');
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function POST(request) {
  try {
    console.log('API route called'); // Debug log
    
    const formData = await request.json();
    console.log('Form data received:', formData); // Debug log

    // Validate required fields
    if (!formData.firstName || !formData.email) {
      return NextResponse.json({ 
        message: "Missing required fields" 
      }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, "contacts"), {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
      submittedAt: new Date()
    });

    console.log("Document written with ID: ", docRef.id);

    return NextResponse.json({
      message: "Form submitted successfully!",
      id: docRef.id 
    }, { status: 200 });

  } catch (error) {
    console.error("Detailed error:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);

    return NextResponse.json({ 
      message: "Error submitting form.",
      error: error.message,
      code: error.code
    }, { status: 500 });
  }
}