// components/ui/Accordion.tsx
import { useState } from "react";

export default function Accordion({ title, children }: { 
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
}