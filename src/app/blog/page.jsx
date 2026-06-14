'use client';
import { BLOG_POSTS } from '../../data';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
export default function BlogPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const stagger = { show: { transition: { staggerChildren: 0.1 } } };

  return (
    <div className="bg-[#0F1114] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" animate="show" variants={stagger} className="mb-14">
          <motion.p
            variants={fadeUp}
            className="text-[#8DC63F] font-mono text-sm tracking-widest uppercase mb-3"
          >
            Insights & News
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-display font-bold text-white">
            The FlatEarth Brief
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/50 mt-3 text-lg">
            Market intelligence for serious Nigerian real estate investors.
          </motion.p>
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group relative rounded-3xl overflow-hidden mb-10 cursor-pointer h-80 lg:h-96"
        >
          <img
            src={BLOG_POSTS[0].img}
            alt={BLOG_POSTS[0].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="inline-block bg-[#8DC63F] text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
              {BLOG_POSTS[0].category}
            </span>
            <h2 className="text-white font-display font-bold text-2xl lg:text-3xl leading-tight mb-2">
              {BLOG_POSTS[0].title}
            </h2>
            <p className="text-white/60 text-sm">{BLOG_POSTS[0].excerpt}</p>
            <div className="text-white/40 font-mono text-xs mt-3">{BLOG_POSTS[0].date}</div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {BLOG_POSTS.slice(1).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/8 bg-white/3"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#8DC63F] text-black text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-white font-display font-bold text-lg leading-tight mb-2">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="text-white/30 font-mono text-xs">{post.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
