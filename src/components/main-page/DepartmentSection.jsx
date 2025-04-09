
import { Link } from 'react-router-dom';
import blackArrow from '../../assets/black-arrow.svg';
import whiteArrow from '../../assets/white-arrow.svg';
import femalePhoto from '../../assets/female-photo.svg';
import kidPhoto from '../../assets/kid-photo.svg';
import React from 'react';

export default function DepartmentSection () {


    return (
        <>
            <section className='department container'>
                <div>
                    <h2> Отделения </h2>

                    <div className='department-inner'>

                        <div className='department__adults'>
                            <div className='department__adults__links'>
                                <Link to="/adults">
                                    <h3>
                                        Взрослое
                                    </h3>
                                </Link>
                                <Link to="/adults">
                                    <img src={blackArrow} alt="blackArrow" />
                                </Link>
                            </div>
                            <img src={femalePhoto} alt="Девушка" />
                        </div>

                        <div className='department__kids'>
                            <div className='department__kids__links'>
                                <Link to="/kids">
                                    <h3>
                                        Детское
                                    </h3>
                                </Link>
                                <Link to="/adults">
                                    <img src={whiteArrow} alt="blackArrow" />
                                </Link>
                            </div>
                            <img src={kidPhoto} alt="Ребёнок" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}