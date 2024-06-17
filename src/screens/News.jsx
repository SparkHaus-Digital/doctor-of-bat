import React, { useEffect, useState } from 'react';
import client from '../constraint/contentfulClient';
import '../css/NewsPage.css';

const NewsPage = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		client
			.getEntries({ content_type: 'newsArticle' })
			.then((response) => {
				setArticles(response.items);
			})
			.catch(console.error);
	}, []);

	return (
		<div className="news-container">
			<h1>GENERAL NEWS</h1>
			{articles.map((article) => (
				<div key={article.sys.id} className="news-item">
					<img
						src={article.fields.image.fields.file.url}
						alt={article.fields.title}
					/>
					<div>
						<h2>{article.fields.title}</h2>
						<p>{new Date(article.fields.date).toLocaleDateString()}</p>
						<p>{article.fields.summary}</p>
						<button>Read More</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default NewsPage;
