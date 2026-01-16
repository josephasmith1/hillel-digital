"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Briefcase, MessageSquare } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "student",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log("Form submitted:", formState);
    alert("Thank you for getting involved! We'll be in touch soon.");
    onClose();
  };

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
              className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Digital Gradient Border/Glow */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-tech-blue via-cyan-400 to-ucla-gold" />
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Get Involved</h3>
                  <p className="text-slate-400 text-sm">
                    Join the innovation ecosystem. Connect with students, startups, and the future.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-tech-blue" /> Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Bruin"
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-tech-blue/50 focus:border-transparent transition-all"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-tech-blue" /> Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@ucla.edu"
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-tech-blue/50 focus:border-transparent transition-all"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-tech-blue" /> I am a...
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Student", "Alumni", "Investor", "Community"].map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setFormState({ ...formState, role: role.toLowerCase() })}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            formState.role === role.toLowerCase()
                              ? "bg-tech-blue text-white shadow-lg shadow-tech-blue/25"
                              : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-tech-blue" /> Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="How would you like to get involved?"
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-tech-blue/50 focus:border-transparent transition-all resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-tech-blue to-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transform transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
