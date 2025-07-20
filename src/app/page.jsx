import React from 'react';
import { Code2, ChevronRight, Globe, Zap, Shield, Code, UserCheck, Palette, Cpu, Smartphone, BrainCircuit, Paintbrush, ShoppingBag, Mail, UtensilsCrossed, Contact } from 'lucide-react';
import Image from 'next/image';
import ContactForm from './ContactForm';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProjectCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ...rest of the file unchanged... */}
    </div>
  );
}
