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
            '/local/api/?endpoint=get-page-data&pageCode=main_page'
            // 'http://nonscrdk.beget.tech/local/api/?endpoint=get-page-data&pageCode=main_page'
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
          //console.log(contentData);

          setData({
            MAIN_SWIPER_TITLE: result.data.content.title || 'Без названия',
            MAIN_SWIPER_TEXT: result.data.content.MAIN_SWIPER_TEXT,
            HERO_SWIPER_IMAGE: result.data.content.HERO_SWIPER_IMAGE
                    ? result.data.content.HERO_SWIPER_IMAGE
                    : '/local/templates/react_app/assets/static/media/zainap.png',
            SWIPER_LINK1: result.data.content.SWIPER_LINK1 || '',

            MAIN_SWIPER_TITLE2: result.data.content.title2 || 'Без названия',
            MAIN_SWIPER_TEXT2: result.data.content.MAIN_SWIPER_TEXT2,
            HERO_SWIPER_IMAGE2: result.data.content.HERO_SWIPER_IMAGE2
                    ? result.data.content.HERO_SWIPER_IMAGE2
                    : '/local/templates/react_app/assets/static/media/zainap.png',
            SWIPER_LINK2: result.data.content.SWIPER_LINK2 || '',

            MAIN_SWIPER_TITLE3: result.data.content.title3 || 'Без названия',
            MAIN_SWIPER_TEXT3: result.data.content.MAIN_SWIPER_TEXT3,
            HERO_SWIPER_IMAGE3: result.data.content.HERO_SWIPER_IMAGE3
                    ? result.data.content.HERO_SWIPER_IMAGE3
                    : '/local/templates/react_app/assets/static/media/zainap.png',
            SWIPER_LINK3: result.data.content.SWIPER_LINK3 || '',

            MAIN_SWIPER_BUTTON: result.data.content.MAIN_SWIPER_BUTTON,
            PERCENT_VALUE: result.data.content.PERCENT_VALUE,
            PERCENT_TEXT: result.data.content.PERCENT_TEXT,
            TOOTH_SWIPER_ICON: result.data.content.TOOTH_SWIPER_ICON,
            RECOVERY_TITLE: result.data.content.RECOVERY_TITLE,
            RECOVERY_TEXT: result.data.content.RECOVERY_TEXT,
            QUESTIONS: result.data.content.QUESTIONS,

            PHOTO1: result.data.content.PHOTO1,
            PHOTO2: result.data.content.PHOTO2,
            PHOTO3: result.data.content.PHOTO3,

            VTITLE1: result.data.content.VTITLE1,
            VTITLE2: result.data.content.VTITLE2,
            VDESC1: result.data.content.VDESC1,
            VDESC2: result.data.content.VDESC2,

            CASE:result.data.content.CASE,
            CASELINK:result.data.content.CASELINK,

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