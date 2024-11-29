"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Wifi, 
  Users,
  MapPin,
  Phone,
  ImageIcon
} from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/contact-button";

const features = [
  {
    name: "24/7 High-Speed Internet",
    description: "Stay connected with unlimited high-speed internet access.",
    icon: Wifi,
  },
  {
    name: "Hygienic & Healthy Living",
    description: "Clean environment with regular sanitization and maintenance.",
    icon: ShieldCheck,
  },
  {
    name: "Convenient Location",
    description: "Located in the heart of Sano Kharibot, Shantinagar.",
    icon: MapPin,
  },
  {
    name: "Warm Community",
    description: "Supportive environment with like-minded students.",
    icon: Users,
  },
];

export default function Home() {
  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=Shantinagar,Kathmandu,Nepal", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 to-purple-500/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              🌸 Welcome to Anugya Girls Hostel! 🌸
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
              Your home away from home is here! 💕
            </p>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto">
              Located in the heart of Sano Kharibot, Shantinagar, our hostel is designed to provide a safe, secure, and comfortable environment for all female students. 🏠✨
            </p>
          </motion.div>

          <motion.div 
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactButton size="lg" className="bg-pink-600 hover:bg-pink-700">
              Contact Us
            </ContactButton>
            <Link href="/rooms" passHref>
              <Button size="lg" variant="outline" className="bg-white/10">
                <ImageIcon className="mr-2 h-4 w-4" />
                View Rooms
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10" onClick={handleMapClick}>
              <MapPin className="mr-2 h-4 w-4" />
              View in Maps
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Highlights</h2>
          </div>
          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 h-full border-pink-100 hover:border-pink-200 transition-colors">
                    <feature.icon className="h-8 w-8 mb-4 text-pink-600" />
                    <h3 className="text-lg font-semibold">{feature.name}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center space-y-4">
            <p className="text-lg font-semibold">📞 For inquiries, contact us at</p>
            <p className="text-2xl font-bold text-pink-600">9849777297</p>
            <div className="flex justify-center gap-4">
              <ContactButton variant="outline">
                Contact Us
              </ContactButton>
              <Link href="/rooms" passHref>
                <Button variant="outline">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  View Rooms
                </Button>
              </Link>
              <Button variant="outline" onClick={handleMapClick}>
                <MapPin className="mr-2 h-4 w-4" />
                View in Maps
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}