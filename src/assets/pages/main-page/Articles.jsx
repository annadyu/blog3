import { Link } from "react-router-dom";
import Article from "./Article";

const Articles = ({ articles, setArticles }) => {
  const handleLike = (slug) => {
    const updated = articles.map((article) =>
      article.slug === slug
        ? { ...article, favoritesCount: article.favoritesCount + 1 }
        : article
    );

    setArticles(updated);
    localStorage.setItem("localArticles", JSON.stringify(updated));
  };
  return (
    <ul className="blog-list">
      {articles.map((article) => (
        <li key={article.slug}>
          <Link to={`/articles/${article.slug}`}>
            <Article
            slug={article.slug}
              key={article.slug}
              author={article.author.username}
              date={article.createdAt}
              likes={article.favoritesCount}
              title={article.title}
              description={article.description}
              tags={article.tagList}
              handleLike={handleLike}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Articles;
