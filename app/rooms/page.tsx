"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactButton } from "@/components/contact-button";
import { MapPin, ImageIcon } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface Room {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

const demoRooms: Room[] = [
  {
    id: "1",
    title: "Deluxe Twin Share",
    description: "Spacious room with two single beds, perfect for sharing.",
    image_url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
  },
  {
    id: "2",
    title: "Premium Single",
    description: "Comfortable single room with modern amenities.",
    image_url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: "3",
    title: "Executive Suite",
    description: "Luxury suite with private bathroom and study area.",
    image_url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
  },
];

export default function RoomsPage() {
  const [rooms] = useState<Room[]>(demoRooms);

  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=Shantinagar,Kathmandu,Nepal", "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Rooms</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience comfort and security in our thoughtfully designed rooms.
          Each room is equipped with modern amenities and maintained to the highest standards.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <ContactButton>Contact Us</ContactButton>
          <Link href="/admin" passHref>
            <Button variant="outline">
              <ImageIcon className="mr-2 h-4 w-4" />
              Admin Login
            </Button>
          </Link>
          <Button variant="outline" onClick={handleMapClick}>
            <MapPin className="mr-2 h-4 w-4" />
            View in Maps
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={room.image_url}
                  alt={room.title}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                <p className="text-muted-foreground mb-4">{room.description}</p>
                <div className="flex justify-end">
                  <ContactButton>Contact Us</ContactButton>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}