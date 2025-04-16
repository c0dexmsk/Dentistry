import React, { useEffect, useState } from 'react';

export default function withBitrixDoctorsData(WrappedComponent) {
  return function(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'http://nonscrdk.beget.tech/local/api/?endpoint=get-page-data&pageCode=person_page'
          );

          // Проверяем Content-Type перед парсингом
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
              const text = await response.text();
              throw new Error(`Ожидался JSON, получено: ${text.substring(0, 100)}...`);
            }

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || 'Ошибка сервера');
            }

            // Обрабатываем данные страницы услуг
            const pageData = result.data.content || {};
            console.log(pageData);

          setData({
            // Основная информация
            name: pageData.title || '/default/path/to/guide.jpg',
            slug: pageData.slug || 'Имя специалиста',
            specialization: pageData.specialization || 'Специализация',
            direction: pageData.direction || 'Направление лечения',
            experience: pageData.experience || 'Опыт',
            education: pageData.education || 'Образование',

            photo: pageData.photo || '/default/path/to/service.jpg',

          });

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