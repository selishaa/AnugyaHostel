import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactButton } from "@/components/contact-button";
import { 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  PhoneIcon, 
  MapPinIcon 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2">
          <h3 className="text-lg font-semibold">Anugya Girls Hostel</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Providing safe, comfortable, and modern accommodation for young women in Nepal. 
            Experience luxury living with world-class amenities and 24/7 security.
          </p>
          <div className="flex space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://facebook.com" target="_blank">
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://instagram.com" target="_blank">
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com" target="_blank">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0 md:w-1/2">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">Contact Info</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center text-sm text-muted-foreground">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  <ContactButton>9849777297</ContactButton>
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  Sano Kharibot, Shantinagar, Nepal
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/rooms" className="text-sm text-muted-foreground hover:text-primary">
                    Our Rooms
                  </Link>
                </li>
                {/* <li>
                  <Link href="/amenities" className="text-sm text-muted-foreground hover:text-primary">
                    Amenities
                  </Link>
                </li> */}
                <li>
                  <ContactButton className="text-sm text-muted-foreground hover:text-primary">
                    Contact Us
                  </ContactButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-4 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anugya Girls Hostel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}