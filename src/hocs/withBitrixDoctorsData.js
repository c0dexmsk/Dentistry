import React, { useEffect, useState } from 'react';

export default function withBitrixDoctorsData(WrappedComponent) {
  return function (props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            '/local/api/?endpoint=get-page-data&pageCode=person_page'
            // 'http://nonscrdk.beget.tech/local/api/?endpoint=get-page-data&pageCode=person_page'
          );

          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
            const text = await response.text();
            throw new Error(`Ожидался JSON, получено: ${text.substring(0, 100)}...`);
          }

          const result = await response.json();

          if (!response.ok || !result.success) {
            throw new Error(result.error || 'Ошибка сервера');
          }

          const doctors = result.data.content || [];

          const mappedData = doctors.map((item) => ({
            name: item.title || 'Имя специалиста',
            slug: item.slug || '',
            specialization: item.specialization || 'Специализация',
            direction: item.direction || 'Направление',
            experience: item.experience || 'Опыт',
            education: item.education?.TEXT || 'Образование',
            photo: item.photo || '/default/path/to/photo.jpg',
          }));

          setData(mappedData);
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
    if (!data.length) return <div className="error">Нет данных</div>;

    return <WrappedComponent {...props} bitrixData={data} />;
  };
}