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
            'http://nonscrdk.beget.tech/local/api/?endpoint=get-page-data&pageCode=service_page'
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
            const serviceData = result.data.content || {};
            console.log(serviceData, ' - ', serviceData.abilityBlocks);

          setData({
            // Основная информация
            guideImage: serviceData.guideImage || '/default/path/to/guide.jpg',
            guideName: serviceData.guideName || 'Имя специалиста',
            title_H1: serviceData.title_H1 || 'Название услуги',
            description_H1: serviceData.description_H1 || 'Описание услуги',
            mainImage: serviceData.image || '/default/path/to/service.jpg',

            // Основной контент
            title_H2: serviceData.title_H2 || '',
            description1_H2: serviceData.description1_H2 || '',
            description2_H2: serviceData.description2_H2 || '',
            important_1: serviceData.important_1 || '',
            important_2: serviceData.important_2 || '',

            // Блок возможностей
            ability_H2: serviceData.ability_H2 || 'Наши возможности',
            abilityBlocks: serviceData.ability_blocks || [],

            // Услуги и цены
            services: serviceData.services || [],

            // Вопросы и ответы
            questions: serviceData.questions || []
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