import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/lib/site-data";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group glass flex flex-col overflow-hidden rounded-2xl"
    >
      <div className="grid-bg relative h-36 bg-gradient-to-br from-primary/20 to-accent/10">
        <span className="absolute left-4 top-4 rounded-full bg-navy/70 px-3 py-1 text-xs font-medium text-accent ring-1 ring-accent/20">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
          <span>{post.date}</span><span>·</span><span>{post.readTime} read</span>
        </div>
        <h3 className="text-base font-semibold leading-snug text-foreground">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
        <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5">
          Read More <ArrowRight size={15} />
        </Link>
      </div>
    </motion.article>
  );
}
