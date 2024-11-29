"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ButtonProps } from "@/components/ui/button";

interface ContactButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export function ContactButton({ className, children = "Contact Us", ...props }: ContactButtonProps) {
  const handleContactClick = () => {
    window.location.href = "tel:9849777297";
  };

  return (
    <Button className={className} onClick={handleContactClick} {...props}>
      <Phone className="mr-2 h-4 w-4" />
      {children}
    </Button>
  );
}