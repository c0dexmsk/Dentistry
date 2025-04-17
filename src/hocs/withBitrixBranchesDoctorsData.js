import React, { useEffect, useState } from 'react';

export default function withBitrixBranchesDoctorsData(WrappedComponent) {
  return function(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {

          const response = await fetch(
            'http://nonscrdk.beget.tech/local/api/?endpoint=get-reviews&pageCode=branches_page'
          );

          const result = await response.json();
            
          if (!response.ok || !result.success) {
              throw new Error(result.error || 'Ошибка сервера');
          }
            
          //Surgery_Implantation - 5
          //Orthopedics - 6
          //Therapy - 7
          //Orthodontics - 8
          //Periodontology-9
          //Anesthesiologists -10
          //KidsDoctorsBranch -11

          const doctorsData = result.data.map(doc => ({
            name: doc.name,
            profession: doc.profession,
            department: doc.department,
            photo: doc.photo,
            link: doc.link,
            departmentId: doc.departmentId
          }));

          console.log(doctorsData);
          
          setData(doctorsData);

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