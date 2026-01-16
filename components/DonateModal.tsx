"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";
import Script from "next/script";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonateModal({ isOpen, onClose }: DonateModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="relative bg-tech-blue p-6 text-white overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-tech-blue to-cyan-600" />
                <div className="relative flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <Heart className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Support Innovation</h3>
                      <p className="text-blue-100 text-sm">Help us build the future of Jewish life at UCLA.</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Widget Container */}
              <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                 {/* Givebutter Widget */}
                 <givebutter-widget id="j2YP2p"></givebutter-widget>
              </div>
            </motion.div>
          </motion.div>

          {/* Load Givebutter Script */}
          <Script src="https://js.givebutter.com/elements/latest.js" strategy="lazyOnload" />
        </>
      )}
    </AnimatePresence>
  );
}

// Add type definition for custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'givebutter-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { id: string };
    }
  }
}
