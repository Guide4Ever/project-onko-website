import React from 'react';
import { ModeToggle } from './ModeToggle';

interface HeaderProps {
  imageUrl: string;
}

const PageHeader: React.FC<HeaderProps> = ({ imageUrl }) => {
  return (
    <div className="relative w-full">
        <div className="absolute top-0 right-0 p-4">
          <ModeToggle/>
        </div>
        <img src={imageUrl}></img>
    </div>  
  );
};

export default PageHeader;