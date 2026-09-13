import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  isVisible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  isVisible,
  title,
  message,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed top-20 right-4 sm:right-6 z-50 glass-card border border-brand-accent/50 rounded-2xl p-4 shadow-2xl max-w-sm flex items-start gap-3.5"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <CheckCircle2 className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-white">{title}</h4>
            <p className="text-xs text-brand-textMuted mt-0.5 leading-relaxed">{message}</p>
          </div>

          <button
            onClick={onClose}
            className="text-brand-textMuted hover:text-white p-1 rounded-lg hover:bg-white/5 transition"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
