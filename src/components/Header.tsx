import React from 'react';
import profileImg from '../assets/profilee.jpeg';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 text-white text-center py-6">
      <img
        src={profileImg}
        alt="Muskan Mujawar"
        className="w-24 h-24 mx-auto rounded-full mb-2 border-2 border-white object-cover"
      />
      <h1 className="text-2xl font-bold">Muskan Mujawar</h1>
      <p className="text-sm">Software Engineer | Full Stack Developer | MCA Student</p>
    </header>
  );
};

export default Header;
