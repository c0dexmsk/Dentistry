import {fetchUrl} from '../config';
import React, { useEffect, useState } from 'react';

export default function withBitrixReviewsData(WrappedComponent) {
  return function(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {

          const response = await fetch(
            `${fetchUrl}/?endpoint=get-reviews&pageCode=reviews_page`
          );

          const result = await response.json();
            
          if (!response.ok || !result.success) {
              throw new Error(result.error || 'Ошибка сервера');
          }
            
          const reviewData = result.data.map(review => ({
              name: review.author,
              starsCount: review.stars,
              department: review.department,
              description: review.text,
              icon: review.icon || '',
              iconTitle: review.iconTitle || 'Источник'
          }));

          //console.log(reviewData);
          
          setData(reviewData);

        } catch (err) {
          console.error('Fetch error:', err);
          setError(err.message || 'Произошла ошибка при загрузке данных');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) return <div className="loader">Загрузка...</div>;
    if (error) return <div className="error">Ошибка: {error}</div>;
    if (!data) return <div className="error">Нет данных</div>;

    return <WrappedComponent {...props} bitrixData={data} />;
  };
}