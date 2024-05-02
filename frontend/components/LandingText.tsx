'use client'
import { db } from '@/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

const LandingText = () => {

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const auth = getAuth(db);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const user = auth.currentUser
        // If user is signed in, set the display name
        setUserName(user!.displayName!);
      } else {
        // If user is signed out, set display name to null
        setUserName('');
      }
    });

    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='h-[20rem] grid items-center bg-gradient-to-r from-purple-50 to-gray-100'>
        <div className='mx-auto'>

        <h1 className='my-3 font-extrabold drop-shadow bg-gradient-to-r from-purple-700 to-gray-800 bg-clip-text text-transparent tracking-tight text-5xl'>

            {userName ? `Hello, ${userName}` : 'Hello'}

        </h1>

        <p className='font-semibold px-2'>We deliver water right to your doorstep, with the ability to track
            your order!
        </p>

        <p className='font-semibold px-2'>Get started by searching your address below 👇</p>

        </div>
      
    </div>
  )
}

export default LandingText
