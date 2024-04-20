import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { CONTENTFUL_CONFIG } from '../contentfulConfig';

const client = createClient(CONTENTFUL_CONFIG);

function NewsPage() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'news' })
      .then((response) => {
        setNewsItems(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>News Page</h1>
      <ul>
        {newsItems.map((item) => (
          <li key={item.sys.id}>
            <h2>{item.fields.title}</h2>
            <p>{item.fields.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsPage;
