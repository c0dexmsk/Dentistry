
import { Link } from 'react-router-dom';
import blackArrow from '../../assets/black-arrow.svg';
import whiteArrow from '../../assets/white-arrow.svg';
import femalePhoto from '../../assets/female-photo.svg';
import kidPhoto from '../../assets/kid-photo.svg';
import femalePhoto2 from '../../assets/young-female.svg';
import kidPhoto2 from '../../assets/baby.svg';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

export default function DepartmentSection () {

    const isDesktop = useMediaQuery ( {minWidth: 768});
    const isDesktop2 = useMediaQuery ( {minWidth: 1000});

    return (
        <>
            <section className='department container-fluid px-0'>
                <div>
                    <h2> Отделения </h2>

                    <div className='department-inner'>

                        <div className='department__adults'>
                            <div className='department__adults__links'>
                                <Link to="/about">
                                    <h3>
                                        Взрослое
                                    </h3>
                                </Link>
                                <Link to="/about">
                                    <img className="white-arrow" src={whiteArrow} alt="whiteArrow" />
                                    <img className="black-arrow" src={blackArrow} alt="blackArrow" />
                                </Link>
                            </div>
                            <img className='img-fluid' src={isDesktop ? femalePhoto : femalePhoto2} alt="Девушка" />
                        </div>

                        <div className='department__kids'>
                            <div className='department__kids__links'>
                                <Link to="/kids">
                                    <h3>
                                        Детское
                                    </h3>
                                </Link>
                                <Link to="/kids">
                                    <img className="white-arrow" src={whiteArrow} alt="whiteArrow" />
                                    <img className="black-arrow" src={blackArrow} alt="blackArrow" />
                                </Link>
                            </div>
                            <img className='img-fluid' src={isDesktop ? kidPhoto : kidPhoto2} alt="Ребёнок" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}