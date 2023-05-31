import React from 'react';
import './MarixMain.scss';
import RedArrow from '../../assets/1.png';
import BlueArrow from '../../assets/2.png';
import Heart from '../../assets/heart.png';
import Dollar from '../../assets/dollar.png';
import SmallArrow from '../../assets/arrowSmall.svg';

import {
  getSum,
  largeCircleValue1,
  largeCircleValue2,
  largeCircleValue3,
  largeCircleValue4,
  largeCircleValue5,
  largeCircleValue6,
  largeCircleValue7,
  largeCircleValue8,
  largeCircleValueCenter,
  mediumCircleK27,
} from '../../service/calculator';
import { useAppSelector } from '../../hooks/redux';

export const Matrix = () => {
  const { mainString, userData } = useAppSelector((state) => state.storeReducer);
  // const mainString = ['2', '4', '0', '1', '1', '9', '9', '7'];

  return (
    <div className="matrix_wrapper">
      <div className="circle circle_large" id="large-center">
        <div className="circle circle_large_inside" id="large-center_inside">
          {largeCircleValueCenter(mainString, userData.birth)}
        </div>
      </div>
      <div className="circle circle_large" id="large-1">
        <div className="circle circle_large_inside" id="large-1_inside">
          {largeCircleValue1(mainString, userData.birth)}
        </div>
      </div>
      <div className="circle circle_large" id="large-2">
        {largeCircleValue2(mainString, userData.birth)}
      </div>
      <div className="circle circle_large" id="large-3">
        {largeCircleValue3(mainString, userData.birth)}
      </div>
      <div className="circle circle_large" id="large-4">
        <div className="circle circle_large_inside" id="large-4_inside">
          {largeCircleValue4(mainString, userData.birth)}
        </div>
      </div>
      <div className="circle circle_large" id="large-5">
        <div className="circle circle_large_inside" id="large-5_inside">
          {largeCircleValue5(mainString, userData.birth)}
        </div>
      </div>
      <div className="circle circle_large" id="large-6">
        {largeCircleValue6(mainString, userData.birth)}
      </div>
      <div className="circle circle_large" id="large-7">
        {largeCircleValue7(mainString, userData.birth)}
      </div>
      <div className="circle circle_large" id="large-8">
        <div className="circle circle_large_inside" id="large-8_inside">
          {largeCircleValue8(mainString, userData.birth)}
        </div>
      </div>
      <div className="circle circle_large" id="large_center-circle"></div>
      <div className="square" id="square-1"></div>
      <div className="square" id="square-2"></div>

      <hr id="hr_top-left" />
      <hr id="hr_top-right" />
      <hr id="hr_top-left-2" />
      <hr id="hr_top-right-2" />
      <hr id="hr_bot-left-2" />
      <hr id="hr_bot-right-2" />
      <hr id="hr_bot-left" />
      <hr id="hr_bot-right" />
      <hr id="hr_center-vertical" />
      <hr id="hr_center-horizontal" />

      <hr id="hr_rotate-1" />
      <hr id="hr_rotate-2" />
      <img className="arrow" id="arrow-bot-red" src={RedArrow} alt="" />
      <img className="arrow" id="arrow-top-red" src={RedArrow} alt="" />
      <img className="arrow" id="arrow-bot-blue" src={BlueArrow} alt="" />
      <img className="arrow" id="arrow-top-blue" src={BlueArrow} alt="" />
      <p className="line" id="men-line">
        Лінія чоловічого роду
      </p>
      <p className="line" id="women-line">
        Лінія жіночого роду
      </p>

      <img className="heart" id="heart" src={Heart} alt="" />
      <img className="dollar" id="dollar" src={Dollar} alt="" />

      <div className="circle circle_medium" id="medium-1">
        <div className="circle circle_medium_inside" id="medium-1_inside">
          {getSum(
            largeCircleValue1(mainString, userData.birth) +
              getSum(
                largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth)
              )
          )}
        </div>
      </div>
      <div className="circle circle_medium" id="medium-2">
        {getSum(
          largeCircleValue2(mainString, userData.birth) +
            getSum(
              largeCircleValue2(mainString, userData.birth) +
                largeCircleValueCenter(mainString, userData.birth)
            )
        )}
      </div>
      <div className="circle circle_medium" id="medium-3">
        {getSum(
          getSum(
            largeCircleValueCenter(mainString, userData.birth) +
              largeCircleValue3(mainString, userData.birth)
          ) + largeCircleValue3(mainString, userData.birth)
        )}
      </div>
      <div className="circle circle_medium" id="medium-4">
        <div className="circle circle_medium_inside" id="medium-4_inside">
          {getSum(
            largeCircleValue4(mainString, userData.birth) +
              largeCircleValue4(mainString, userData.birth) +
              largeCircleValueCenter(mainString, userData.birth)
          )}
        </div>
      </div>
      <div className="circle circle_medium" id="medium-5">
        {getSum(
          largeCircleValueCenter(mainString, userData.birth) +
            largeCircleValue5(mainString, userData.birth) +
            largeCircleValue5(mainString, userData.birth)
        )}
      </div>
      <div className="circle circle_medium" id="medium-6">
        {getSum(
          largeCircleValue6(mainString, userData.birth) +
            getSum(
              largeCircleValueCenter(mainString, userData.birth) +
                largeCircleValue6(mainString, userData.birth)
            )
        )}
      </div>
      <div className="circle circle_medium" id="medium-7">
        {getSum(
          getSum(
            largeCircleValueCenter(mainString, userData.birth) +
              largeCircleValue7(mainString, userData.birth)
          ) + largeCircleValue7(mainString, userData.birth)
        )}
      </div>
      <div className="circle circle_medium" id="medium-8">
        {mediumCircleK27(
          getSum(
            largeCircleValueCenter(mainString, userData.birth) +
              largeCircleValue8(mainString, userData.birth)
          ),
          largeCircleValue8(mainString, userData.birth)
        )}
      </div>

      <div className="circle circle_small" id="small-1">
        <div className="circle circle_small_inside" id="small-1_inside">
          {getSum(
            largeCircleValue1(mainString, userData.birth) +
              largeCircleValueCenter(mainString, userData.birth)
          )}
        </div>
      </div>
      <div className="circle circle_small" id="small-2">
        {getSum(
          largeCircleValue2(mainString, userData.birth) +
            largeCircleValueCenter(mainString, userData.birth)
        )}
      </div>
      <div className="circle circle_small" id="small-3">
        {getSum(
          largeCircleValueCenter(mainString, userData.birth) +
            largeCircleValue3(mainString, userData.birth)
        )}
      </div>
      <div className="circle circle_small" id="small-4">
        <div className="circle circle_small_inside" id="small-4_inside">
          {getSum(
            largeCircleValue1(mainString, userData.birth) +
              largeCircleValueCenter(mainString, userData.birth) +
              largeCircleValueCenter(mainString, userData.birth)
          )}
        </div>
      </div>
      <div className="circle circle_small" id="small-5">
        <div className="circle circle_small_inside" id="small-5_inside">
          {getSum(
            largeCircleValue4(mainString, userData.birth) +
              largeCircleValueCenter(mainString, userData.birth)
          )}
        </div>
      </div>
      <div className="circle circle_small" id="small-6">
        <div className="circle circle_small_inside" id="small-6_inside">
          {getSum(
            largeCircleValueCenter(mainString, userData.birth) +
              largeCircleValue4(mainString, userData.birth) +
              largeCircleValueCenter(mainString, userData.birth)
          )}
        </div>
      </div>
      <div className="circle circle_small" id="small-7">
        <div className="circle circle_small_inside" id="small-7_inside">
          {getSum(
            largeCircleValueCenter(mainString, userData.birth) +
              largeCircleValue5(mainString, userData.birth)
          )}
        </div>
      </div>
      <div className="circle circle_small" id="small-8">
        {getSum(
          largeCircleValue6(mainString, userData.birth) +
            getSum(largeCircleValueCenter(mainString, userData.birth))
        )}
      </div>
      <div className="circle circle_small" id="small-9">
        {getSum(
          getSum(
            getSum(
              largeCircleValueCenter(mainString, userData.birth) +
                largeCircleValue8(mainString, userData.birth)
            ) +
              getSum(
                largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue5(mainString, userData.birth)
              )
          ) +
            getSum(
              largeCircleValueCenter(mainString, userData.birth) +
                largeCircleValue8(mainString, userData.birth)
            )
        )}
      </div>
      <div className="circle circle_small" id="small-10">
        {getSum(
          largeCircleValueCenter(mainString, userData.birth) +
            largeCircleValue7(mainString, userData.birth)
        )}
      </div>
      <div className="circle circle_small" id="small-11">
        {getSum(
          getSum(
            largeCircleValueCenter(mainString, userData.birth) +
              largeCircleValue8(mainString, userData.birth)
          ) +
            getSum(
              largeCircleValueCenter(mainString, userData.birth) +
                largeCircleValue5(mainString, userData.birth)
            )
        )}
      </div>
      <div className="circle circle_small" id="small-12">
        {getSum(
          getSum(
            largeCircleValueCenter(mainString, userData.birth) +
              largeCircleValue5(mainString, userData.birth)
          ) +
            getSum(
              getSum(
                largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue8(mainString, userData.birth)
              ) +
                getSum(
                  largeCircleValueCenter(mainString, userData.birth) +
                    largeCircleValue5(mainString, userData.birth)
                )
            )
        )}
      </div>
      <div className="circle circle_small" id="small-13">
        <div className="circle circle_small_inside" id="small-13_inside">
          {getSum(
            largeCircleValueCenter(mainString, userData.birth) +
              largeCircleValue8(mainString, userData.birth)
          )}
        </div>
      </div>

      <p id="comfort-zone">ЗОНА КОМФОРТУ</p>

      <div className="circle circle_xs" id="xs-1">
        Б
      </div>
      <div className="circle circle_xs" id="xs-2">
        Д
      </div>
      <div className="circle circle_xs" id="xs-3">
        Е
      </div>
      <div className="circle circle_xs" id="xs-4">
        А
      </div>
      <div className="circle circle_xs" id="xs-5">
        Л
      </div>
      <div className="circle circle_xs" id="xs-6">
        В
      </div>
      <div className="circle circle_xs" id="xs-7">
        О
      </div>
      <div className="circle circle_xs" id="xs-8">
        К
      </div>
      <div className="circle circle_xs" id="xs-9">
        Н
      </div>
      <div className="circle circle_xs" id="xs-10">
        М
      </div>
      <div className="circle circle_xs" id="xs-11">
        З
      </div>
      <div className="circle circle_xs" id="xs-12">
        Г
      </div>
      <div className="circle circle_xs" id="xs-13">
        Ж
      </div>
      <div className="circle circle_xs" id="xs-14">
        ЗК
      </div>

      <div className="small-arrow arrow-right" id="arrow-1">
        <p className="years years_right">20 років</p>
        <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />
      </div>
      <div className="small-arrow arrow-right" id="arrow-2">
        <p className="years years_right">30 років</p>
        <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />
      </div>
      <div className="small-arrow arrow-right" id="arrow-3">
        <p className="years years_right">40 років</p>
        <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />
      </div>
      <div className="small-arrow arrow-right" id="arrow-4">
        <p className="years years_right">50 років</p>
        <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />
      </div>
      <div className="small-arrow arrow-left" id="arrow-5">
        <p className="years years_left">10 років</p>
        <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />
      </div>
      <div className="small-arrow arrow-left" id="arrow-6">
        <p className="years years_left">0 років</p>
        <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />
      </div>
      <div className="small-arrow arrow-left" id="arrow-7">
        <p className="years years_left">70 років</p>
        <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />
      </div>
      <div className="small-arrow arrow-left" id="arrow-8">
        <p className="years years_left">60 років</p>
        <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />
      </div>

      <hr id="hr_dashed" />

      <div className="dot" id="dot-1"></div>
      <div className="dot" id="dot-2"></div>
      <div className="dot" id="dot-3"></div>
      <div className="dot" id="dot-4"></div>
      <div className="dot" id="dot-5"></div>
      <div className="dot" id="dot-6"></div>
      <div className="dot" id="dot-7"></div>

      <div className="dot" id="dot-8"></div>
      <div className="dot" id="dot-9"></div>
      <div className="dot" id="dot-10"></div>
      <div className="dot" id="dot-11"></div>
      <div className="dot" id="dot-12"></div>
      <div className="dot" id="dot-13"></div>
      <div className="dot" id="dot-14"></div>
    </div>
  );
};
