import React, { useEffect, useState } from 'react';
import './quote.css';

export default function Quote() {
  const [quote, setQuote] = useState('');
  const [hasErr, setHasErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: {
            'x-api-key': 'T/TGjzAIvTi2pRubA26+Vw==altqSPkVlndInZEJ',
          },
        });
        const data = await response.json();
        setQuote(data[0]);
        setIsLoading(false);
      } catch (error) {
        setHasErr(true);
      }
    };
    fetchQuote();
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (hasErr) return <div>Something went wrong!</div>;

  return (
    <div className="aquote">
      <blockquote>{`"${quote.quote}"`}</blockquote>
      <p className="author">{quote.author}</p>
    </div>
  );
}
