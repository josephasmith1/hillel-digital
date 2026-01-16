"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";
import Script from "next/script";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn", delay: 0.1 }
  }
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 40
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      delay: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.3, ease: "easeOut" }
  }
};

export function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Give widget time to render after script loads
      const timer = setTimeout(() => setWidgetLoaded(true), 500);

      // Remove Givebutter branding
      const removeBranding = () => {
        try {
          // Navigate through nested shadow DOMs:
          // #j2YP2p -> shadowRoot -> givebutter-iframe -> shadowRoot -> branding div
          const widget = document.querySelector('#j2YP2p');
          if (!widget?.shadowRoot) return;

          const givebutterIframe = widget.shadowRoot.querySelector('givebutter-iframe');
          if (!givebutterIframe?.shadowRoot) return;

          const brandingDiv = givebutterIframe.shadowRoot.querySelector(
            'div.rounded-b-2xl.border.border-t-0.border-gray-300.flex.w-full.items-center.justify-center.bg-gray-100.py-3.text-center'
          );
          if (brandingDiv) {
            (brandingDiv as HTMLElement).style.display = 'none';
          }
        } catch (e) {
          // Shadow DOM not ready yet
        }
      };

      // Run immediately and observe for changes
      const observer = new MutationObserver(() => {
        removeBranding();
      });

      observer.observe(document.body, { childList: true, subtree: true });

      // Also run on intervals for a bit to catch late-loading elements
      const brandingTimer = setInterval(removeBranding, 500);
      setTimeout(() => clearInterval(brandingTimer), 5000);

      return () => {
        clearTimeout(timer);
        clearInterval(brandingTimer);
        observer.disconnect();
      };
    } else {
      setWidgetLoaded(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              style={{ maxHeight: "min(720px, 90vh)" }}
            >
              {/* Header */}
              <motion.div
                className="relative bg-tech-blue px-5 py-4 text-white overflow-hidden shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-tech-blue to-cyan-600" />
                <div className="relative flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <Heart className="w-5 h-5 text-white fill-current" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Support Innovation</h3>
                      <p className="text-blue-100 text-sm">Help build the future of Jewish life at UCLA</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Widget Container */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 overflow-y-auto bg-white relative"
              >
                <div
                  className={`transition-opacity duration-500 ${
                    widgetLoaded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <givebutter-giving-form
                    id="j2YP2p"
                    account="HA0Mt2Iv8aiAyRog"
                    campaign="CJKPLN"
                    theme-color="#187cb8"
                    embed-url="https://givebutter.com/embed/c/CjkPLn"
                    max-width="100%"
                    show-goal-bar="false"
                  ></givebutter-giving-form>
                </div>

                {/* Loading state */}
                {!widgetLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-3 border-tech-blue/30 border-t-tech-blue rounded-full animate-spin" />
                      <p className="text-sm text-gray-500">Loading donation form...</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Load Givebutter Script */}
          <Script
            src="https://widgets.givebutter.com/latest.umd.cjs?acct=HA0Mt2Iv8aiAyRog&p=other"
            strategy="lazyOnload"
          />
        </>
      )}
    </AnimatePresence>
  );
}

// Add type definition for custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'givebutter-giving-form': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id: string;
        account: string;
        campaign: string;
        'theme-color'?: string;
        'embed-url'?: string;
        'max-width'?: string;
        'show-goal-bar'?: string;
      };
    }
  }
}
