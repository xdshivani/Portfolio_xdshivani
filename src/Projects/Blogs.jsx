export default function Blogs() {
  const articles = [
    {
      id: 1,
      title: "Getting Started with React",
      content:
        "React is a powerful JavaScript library for building user interfaces. In this article, we’ll explore the basics and why React has become the go-to choice for developers...",
      date: "Sep 5, 2025",
      category: "React",
    },
    {
      id: 2,
      title: "Understanding React Router",
      content:
        "React Router helps you create multi-page navigation experiences in single-page applications. Let’s break down how routing works and how to use it effectively...",
      date: "Aug 25, 2025",
      category: "Routing",
    },
    {
      id: 3,
      title: "Why Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework that makes styling faster and consistent. Here’s why developers are choosing Tailwind over traditional CSS frameworks...",
      date: "Aug 15, 2025",
      category: "CSS",
    },
  ];

  return (
    <div className="p-10 md:p-20 text-white min-h-screen bg-[#171d32]">
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">
        📚 Tech Articles
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Tag + Date */}
            <div className="flex justify-between items-center mb-3 text-sm text-gray-400">
              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                {article.category}
              </span>
              <span>{article.date}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>

            {/* Content preview */}
            <p className="text-gray-300 mb-4 line-clamp-3">
              {article.content}
            </p>

            {/* Read more */}
            <a
              href={`/blogs/${article.id}`}
              className="text-blue-400 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
