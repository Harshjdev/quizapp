import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MdDarkMode, MdLightbulb } from 'react-icons/md';

function Layout() {
  const [mode, setMode] = useState('light'); 

  const changeMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark'); 

  return (
    <div className={`${mode === 'dark' ? 'dark' : ''} bg-background transition-all ease-linear duration-100`}>
      <div className="h-screen flex flex-col items-center justify-start">
        <h1 className={`${mode === 'dark' ? 'text-white' : 'text-black'} text-4xl font-bold mb-8 mt-2`}>QUIZ APP</h1>
        <Outlet />
        <Button onClick={changeMode} className='absolute right-10 top-4 opacity-80'>
          {mode === 'dark' ? <MdLightbulb size={20} /> : <MdDarkMode size={20} />}
        </Button>
      </div>
    </div>
  );
}

export default Layout;
