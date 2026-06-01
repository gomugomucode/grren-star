"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Balachandran",
    text: "Whenever I need expert advice about technology products, I call Silver Green Automations. They have an impressive amount of knowledge and a knack for helping the technically-challenged make sense of it all.",
  },
  {
    name: "Ram Prasad",
    text: "Just want to thank you and your team for the totally professional way you handled our gate design and installation. All completed now, and it looks great and works very well indeed.",
  },
  {
    name: "Balchand Mahaveers",
    text: "Thank you for repairing our Rolling Shutters. We are very pleased with the work done and would recommend you to our friends.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mb-3 mx-auto w-fit">
            <Star className="h-3 w-3" />
            Testimonials
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Customer Reviews</h2>
          <p className="text-slate-500 mt-3 text-sm">
            What our clients say about our gate automation and home automation services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="industrial-card p-7 flex flex-col gap-4"
            >
              <Quote className="h-8 w-8 text-green-200" />
              <p className="text-sm text-slate-600 leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 pt-2 border-t border-slate-100">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <footer className="text-sm font-bold text-slate-800">{review.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
