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
				<center>
				<div key={article.sys.id} className="news-item">
					<img
						src={article.fields.image.fields.file.url}
						alt={article.fields.title}
					/>
					<div>
						<h2>{article.fields.title}</h2>
						<p>{new Date(article.fields.date).toLocaleDateString()}</p>
						<p className='news-desc'>{article.fields.summary}</p>
						<a href={article.fields.readMoreLink} target="_blank" rel="noopener noreferrer">
                            <button className='btn-read'>Read More</button>
                        </a>
					</div>
				</div>
				</center>
			))}
		</div>
	);
};

export default NewsPage;
