import React, { useEffect, useState } from 'react';

export default function withBitrixData(WrappedComponent) {
  return function(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'http://nonscrdk.beget.tech/local/api/?endpoint=get-page-data&pageCode=main_page'
            // `/local/api/?endpoint=get-page-data&pageCode='main_page'}`
          );

          // Проверяем Content-Type перед парсингом
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Сервер вернул не JSON ответ');
          }

          const result = await response.json();

          if (!response.ok) {
            throw new Error(result.error || 'Ошибка сервера');
          }

          // Безопасный парсинг content, если он есть
          const contentData = result.data.content.content
            ? JSON.parse(result.data.data.content)
            : {};

          setData({
            MAIN_SWIPER_TITLE: result.data.content.title || 'Без названия',
            MAIN_SWIPER_TEXT: result.data.content.MAIN_SWIPER_TEXT,
            MAIN_SWIPER_BUTTON: result.data.content.MAIN_SWIPER_BUTTON,
            PERCENT_VALUE: result.data.content.PERCENT_VALUE,
            PERCENT_TEXT: result.data.content.PERCENT_TEXT,
            HERO_SWIPER_IMAGE: result.data.content.HERO_SWIPER_IMAGE
                    ? result.data.content.HERO_SWIPER_IMAGE
                    : '/local/templates/react_app/assets/static/media/zainap.png',
            TOOTH_SWIPER_ICON: result.data.content.TOOTH_SWIPER_ICON,
            RECOVERY_TITLE: result.data.content.RECOVERY_TITLE,
            RECOVERY_TEXT: result.data.content.RECOVERY_TEXT,
          });
        } catch (err) {
          console.error('Fetch error:', err);
          setError(err.message || 'Произошла ошибка при загрузке данных');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [props.pageCode]);

    if (loading) return <div className="loader">Загрузка...</div>;
    if (error) return <div className="error">Ошибка: {error}</div>;
    if (!data) return <div className="error">Нет данных</div>;

    return <WrappedComponent {...props} bitrixData={data} />;
  };
}