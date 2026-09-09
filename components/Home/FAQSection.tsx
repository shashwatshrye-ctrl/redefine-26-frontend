"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is Redefine?",
    answer:
      "Redesign is a designathon organized by IEEE CS VIT where participants solve real-world problems through innovative design and technology.",
  },
  {
    question: "How many members per team?",
    answer:
      "Teams can have up to 4 members. You can build your own team or join an existing one using a team code.",
  },
  {
    question: "What are the tracks?",
    answer:
      "There are 6 tracks: E-Commerce, Smart Education, Healthcare Companion, Travel & Exploration, Finance, and Social Impact Platform.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, participation is completely free. Register through the button on the top right.",
  },
  {
    question: "When does the event take place?",
    answer:
      "The event spans multiple phases. Check the Timeline section for exact dates.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-pink-600/40">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold text-white transition hover:bg-pink-500/10 md:text-lg"
      >
        <span>{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 shrink-0 text-2xl text-pink-400"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-sm text-white/60 md:text-base">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      className="relative w-full bg-black px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-2xl font-bold uppercase tracking-widest text-white md:text-3xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="flex flex-col gap-3">
          {FAQ_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              <AccordionItem
                item={item}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
