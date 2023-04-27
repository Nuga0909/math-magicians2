import React, { useEffect, useState } from 'react';
import './quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [hasError, setHasError] = useState(false);
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
        setHasError(true);
      }
    };
    fetchQuote();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (hasError) return <div>Something went wrong!</div>;
  return (
    <div className="quote">
      <blockquote>{`"${quote.quote}"`}</blockquote>
      <p className="author">{quote.author}</p>
    </div>
  );
};

export default Quote;