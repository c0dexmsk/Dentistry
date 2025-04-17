import React, { useEffect, useState } from 'react';

export default function withBitrixPriceBlockData(WrappedComponent) {
  return function(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {

          const response = await fetch(
            'http://nonscrdk.beget.tech/local/api/?endpoint=get-reviews&pageCode=price_block_page'
          );

          const rawText = await response.text();
        console.log('Raw response text:', rawText);

          const result = await response.json();
            
          if (!response.ok || !result.success) {
              throw new Error(result.error || 'Ошибка сервера');
          }

          const pageData = result.data.map(doc => ({
            name: doc.name,
            description: doc.description,
            price: doc.price,
            time: doc.time,
            count: doc.count,
            departmentName: doc.departmentName,
            departmentCode: doc.departmentCode,
            departmentCode1: doc.departmentCode1
          }));

          console.log(pageData);
          
          setData(pageData);

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