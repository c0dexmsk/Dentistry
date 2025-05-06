import React, { useEffect, useState } from 'react';

export default function withBitrixHistoryData(WrappedComponent) {
  return function(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            '/local/api/?endpoint=get-page-data&pageCode=history_page'
            // 'http://nonscrdk.beget.tech/local/api/?endpoint=get-page-data&pageCode=history_page'
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
            //console.log(pageData);

            setData({
                // Основная информация
                TITLE: pageData.TITLE || 'Название истории',
                TITLE_H2: pageData.TITLE_H2 || 'Краткое описание истории',
                TITLE_P: pageData.TITLE_P || 'Описание истории',
                TITLE_PHOTO:pageData.TITLE_PHOTO || 'Не подргузилась картинка',

                D1: pageData.D1 || '',
                D1_ICON: pageData.D1_ICON || '/default/path/to/icon1.png',

                D2: pageData.D2 || '',
                D2_ICON: pageData.D2_ICON || '/default/path/to/icon2.png',

                D3: pageData.D3 || '',
                D3_ICON: pageData.D3_ICON || '/default/path/to/icon3.png',

                D4: pageData.D4 || '',
                D4_ICON: pageData.D4_ICON || '/default/path/to/icon4.png',

                STEP1_H2: pageData.STEP1_H2 || 'Шаг 1',
                STEP2_H2: pageData.STEP2_H2 || 'Шаг 2',
                STEP3_H2: pageData.STEP3_H2 || 'Шаг 3',

                STEP1_P: pageData.STEP1_P || 'Описание шага 1',
                STEP2_P: pageData.STEP2_P || 'Описание шага 2',
                STEP3_P: pageData.STEP3_P || 'Описание шага 3',

                STEP1_ICON: pageData.STEP1_ICON || '/default/path/to/step1_icon.png',
                STEP2_ICON: pageData.STEP2_ICON || '/default/path/to/step2_icon.png',
                STEP3_ICON: pageData.STEP3_ICON || '/default/path/to/step3_icon.png',

                RESULT_PHOTO1: pageData.RESULT_PHOTO1 || '/default/path/to/result_photo1.jpg',
                RESULT_PHOTO2: pageData.RESULT_PHOTO2 || '/default/path/to/result_photo2.jpg',

                RESULT1: pageData.RESULT1 || 'Результат 1',
                RESULT2: pageData.RESULT2 || 'Результат 2',
                RESULT3: pageData.RESULT3 || 'Результат 3',

                NAME1: pageData.NAME1 || 'Имя 1',
                SPECIALIZATION1: pageData.SPECIALIZATION1 || 'Специализация 1',
                LINK1: pageData.LINK1 || '#',
                PHOTO1: pageData.PHOTO1 || '/default/path/to/photo1.jpg',

                NAME2: pageData.NAME2 || 'Имя 2',
                SPECIALIZATION2: pageData.SPECIALIZATION2 || 'Специализация 2',
                LINK2: pageData.LINK2 || '#',
                PHOTO2: pageData.PHOTO2 || '/default/path/to/photo2.jpg',

                NAME3: pageData.NAME3 || 'Имя 3',
                SPECIALIZATION3: pageData.SPECIALIZATION3 || 'Специализация 3',
                LINK3: pageData.LINK3 || '#',
                PHOTO3: pageData.PHOTO3 || '/default/path/to/photo3.jpg',
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