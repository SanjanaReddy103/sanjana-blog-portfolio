import PostPreview from '../components/post-preview'
import { PORTFOLIO } from '../lib/constants'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {PORTFOLIO.BLOGS.MORE_HEADER_TEXT}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-32 gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
