import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-white">iHub</h3>
            <p className="text-slate-400">
              Bridging Campus Life with the Start-Up Nation.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="text-slate-400 space-y-2">
              <p>574 Hilgard Avenue</p>
              <p>Los Angeles, CA 90024</p>
              <p className="pt-2 text-white">(310) 208-3081</p>
            </div>
          </div>

          {/* Social / Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/HillelatUCLACommunity" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/hillelatucla" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCzZMRkJr7asAWcU2X3EN2TA" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hillel at UCLA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
