'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  FileCheck,
  House,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

const faqCategories = [
  {
    title: 'Buying Property',
    icon: House,
    questions: [
      {
        question: 'How do I buy a property through Benol Property?',
        answer:
          'Start by sharing your budget, preferred location, property type and intended use. We can help you explore suitable available listings and understand the considerations involved. Before committing, inspect the property, verify the relevant documentation and obtain appropriate legal advice.',
      },
      {
        question: 'Which areas of Lagos does Benol Property cover?',
        answer:
          'Our property focus includes Ikoyi, Victoria Island, Lekki, Oniru, Chevron, Ikota, Orchid Road and Sangotedo. Availability depends on the current listings and the type of property you are looking for.',
      },
      {
        question: 'What additional costs should I budget for when buying?',
        answer:
          'Beyond the agreed purchase price, you may need to budget for legal fees, agency fees where applicable, title registration, consent and other documentation costs, taxes, service charges and maintenance. The exact costs depend on the transaction and property. Request a clear breakdown before making a commitment.',
      },
      {
        question: 'Can I inspect a property before making an offer?',
        answer:
          'Yes. We encourage prospective buyers to arrange a physical inspection where possible. If you cannot attend in person, ask about available virtual viewing options and consider appointing an independent representative to inspect the property on your behalf.',
      },
    ],
  },
  {
    title: 'Property Verification',
    icon: ShieldCheck,
    questions: [
      {
        question: 'How can I verify that a property has a valid title?',
        answer:
          'Property verification may involve reviewing the available title documents, conducting appropriate searches with the relevant authorities, checking ownership and transaction authority, and confirming applicable planning requirements. The process depends on the property and its location. Engage a qualified property lawyer before paying or signing binding documents.',
      },
      {
        question: 'What documents should I check before buying land?',
        answer:
          'Relevant documents may include a Certificate of Occupancy, registered conveyance or deed, survey plan, allocation documents and other evidence of title, depending on the property. No single document automatically guarantees that a transaction is safe. Have a qualified lawyer independently verify the title and identify any encumbrances or disputes.',
      },
      {
        question: 'Is it safe to pay for a property based on pictures or videos?',
        answer:
          'Pictures and videos can help you shortlist properties, but they do not establish ownership, title validity, physical condition or suitability. Arrange an inspection and independent legal verification, confirm the seller’s authority, and understand the transaction terms before making payment.',
      },
    ],
  },
  {
    title: 'Investment & Renting',
    icon: MapPin,
    questions: [
      {
        question: 'Is buying property in Lagos a good investment?',
        answer:
          'It depends on the property, purchase price, location, holding period, expenses, demand and your financial objectives. Property values and rental income are not guaranteed to increase. Compare similar properties, estimate realistic costs and returns, and consider the risks before investing.',
      },
      {
        question: 'How do I estimate the rental yield of a property?',
        answer:
          'Gross rental yield is generally calculated by dividing the expected annual rental income by the property purchase price and multiplying by 100. Net yield also accounts for relevant expenses such as maintenance, service charges, management costs and vacancy periods. Use realistic rental estimates rather than relying only on projected figures.',
      },
      {
        question: 'Does Benol Property offer properties for rent?',
        answer:
          'Rental availability depends on our current listings. Contact us with your preferred area, budget, property type and intended move-in date so we can discuss suitable available options.',
      },
    ],
  },
  {
    title: 'Diaspora Buyers & Payments',
    icon: FileCheck,
    questions: [
      {
        question: 'Can I buy property in Lagos while living abroad?',
        answer:
          'You can explore property opportunities remotely, subject to the applicable legal requirements and transaction arrangements. Request current property information, arrange virtual or independent inspections, verify all documentation through qualified professionals and use traceable payment channels. Do not rely solely on a representative’s assurances.',
      },
      {
        question: 'Can I arrange a virtual property viewing?',
        answer:
          'Virtual viewing options may be available depending on the property. Contact our team to ask about current viewing arrangements. A virtual tour is useful for an initial assessment, but it should not replace independent inspection and legal due diligence.',
      },
      {
        question: 'How do I confirm the correct payment details?',
        answer:
          'Confirm the payment instructions directly through an independently verified Benol Property contact and ensure the recipient and transaction terms are documented. Be cautious of last-minute account changes, personal account requests or pressure to transfer funds before verification is complete.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All Questions');
  const [openQuestion, setOpenQuestion] = useState(null);
  const [search, setSearch] = useState('');

  const allQuestions = faqCategories.flatMap((category) =>
    category.questions.map((item) => ({
      ...item,
      category: category.title,
    }))
  );

  const filteredQuestions = allQuestions.filter((item) => {
    const matchesCategory = activeCategory === 'All Questions' || item.category === activeCategory;

    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0F1114] pb-20 pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-8">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#8DC63F]/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8DC63F]/20 bg-[#8DC63F]/5 px-4 py-2">
            <CircleHelp size={16} className="text-[#8DC63F]" />
            <span className=" text-xs uppercase tracking-[0.2em] text-[#8DC63F]">
              Frequently Asked Questions
            </span>
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Questions About
            <span className="block text-[#8DC63F]">Real Estate?</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            Find answers to common questions about buying property, verifying documents, investing
            in Lagos real estate and working with Benol Property.
          </p>
        </motion.div>
      </section>

      {/* FAQ content */}
      <section className="mx-auto max-w-5xl px-6">
        {/* Search */}
        <div className="mb-8">
          <input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setOpenQuestion(null);
            }}
            placeholder="Search your question..."
            aria-label="Search frequently asked questions"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#8DC63F]/50"
          />
        </div>

        {/* Category filters */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {['All Questions', ...faqCategories.map((item) => item.title)].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setOpenQuestion(null);
              }}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm transition-colors ${
                activeCategory === category
                  ? 'border-[#8DC63F] bg-[#8DC63F] text-[#0F1114]'
                  : 'border-white/10 bg-white/[0.02] text-white/55 hover:border-white/25 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-10">
          {faqCategories.map((category) => {
            const questions = filteredQuestions.filter((item) => item.category === category.title);

            if (questions.length === 0) return null;

            const CategoryIcon = category.icon;

            return (
              <div key={category.title}>
                <div className="mb-4 flex items-center gap-3">
                  <CategoryIcon size={20} className="text-[#8DC63F]" />
                  <h2 className="text-lg font-semibold text-white">{category.title}</h2>
                  <span className="text-xs text-white/30">({questions.length})</span>
                </div>

                <div className="space-y-3">
                  {questions.map((item) => {
                    const isOpen = openQuestion === item.question;

                    return (
                      <div
                        key={item.question}
                        className={`overflow-hidden rounded-xl border transition-colors ${
                          isOpen
                            ? 'border-[#8DC63F]/30 bg-white/[0.04]'
                            : 'border-white/10 bg-white/[0.02]'
                        }`}
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                        >
                          <span className="text-sm font-medium leading-relaxed text-white sm:text-base">
                            {item.question}
                          </span>

                          <ChevronDown
                            size={19}
                            className={`shrink-0 text-[#8DC63F] transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-6 text-sm leading-relaxed text-white/55 sm:px-6">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredQuestions.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-12 text-center">
              <CircleHelp size={32} className="mx-auto mb-4 text-[#8DC63F]" />
              <h2 className="mb-2 text-lg font-semibold text-white">No matching questions found</h2>
              <p className="text-sm text-white/50">
                Try another search term or select a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setActiveCategory('All Questions');
                  setOpenQuestion(null);
                }}
                className="mt-5 text-sm font-medium text-[#8DC63F] hover:text-[#b4e879]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mt-20 px-6">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#8DC63F]/20 bg-[#8DC63F]/[0.06] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#8DC63F]/10 blur-[90px]" />

          <div className="relative">
            <p className="mb-4  text-xs uppercase tracking-[0.2em] text-[#8DC63F]">
              We're Here to Help
            </p>

            <h2 className="mx-auto mb-4 max-w-2xl font-display text-3xl font-bold text-white md:text-4xl">
              Still Have Questions?
            </h2>

            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
              Every property decision is different. Contact our team to discuss your requirements
              and get guidance on the next steps.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#8DC63F] px-6 py-3.5 font-semibold text-[#0F1114] transition-colors hover:bg-[#9cdb4b]"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/properties"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-medium text-white transition-colors hover:border-[#8DC63F]/50 hover:text-[#8DC63F]"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
