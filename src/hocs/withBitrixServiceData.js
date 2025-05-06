import React, { useEffect, useState } from 'react';

export default function withBitrixServiceData(WrappedComponent) {
  return function(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            '/local/api/?endpoint=get-page-data&pageCode=service_page'
            // 'http://nonscrdk.beget.tech/local/api/?endpoint=get-page-data&pageCode=service_page'
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

            const pageData = result.data.map(doc => ({
              id: doc.id || '404',
              guideImage: doc.guideImage || '/default/path/to/guide.jpg',
              guideName: doc.guideName || 'Имя специалиста',
              title_H1: doc.title_H1 || 'Название услуги',
              description_H1: doc.description_H1 || 'Описание услуги',
              mainImage: doc.image || '/default/path/to/service.jpg',

              ICON1: doc.ICON1 || '',
              ICON2: doc.ICON2 || '',
              ICON3: doc.ICON3 || '',
              ICON4: doc.ICON4 || '',
              ICON5: doc.ICON5 || '',
              specialization: doc.specialization || '',

              // Основной контент
              title_H2: doc.title_H2 || '',
              description1_H2: doc.description1_H2 || '',
              description2_H2: doc.description2_H2 || '',
              important_1: doc.important_1 || '',
              important_2: doc.important_2 || '',

              // Блок возможностей
              ability_H2: doc.ability_H2 || 'Наши возможности',
              abilityBlocks: doc.ability_blocks || [],

              // Услуги и цены
              services: doc.services || [],

              // Вопросы и ответы
              questions: doc.questions || []
            }));
            // Обрабатываем данные страницы услуг
            //console.log(pageData);

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