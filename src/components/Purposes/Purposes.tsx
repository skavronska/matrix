import React from 'react';
import './Purposes.css';
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
} from '../../service/calculator';
import { useAppSelector } from '../../hooks/redux';

export const Purposes = () => {
  const { mainString, userData } = useAppSelector((state) => state.storeReducer);
  // const mainString = ['2', '4', '0', '1', '1', '9', '9', '7'];

  return (
    <div className="purposes_container">
      <h3>ПРИЗНАЧЕННЯ</h3>
      <div className="purposes">
        <div className="purposes_top">
          <div className="purpose personal">
            <h3 className="purpose_h3">Особисте</h3>
            <p>Створення стосунків, нарождення дітей, формування потрібних якостей.</p>
            <div className="rect">
              <div className="content">
                <div className="content_row">
                  Небо:
                  <div className="circle_purpose">
                    {getSum(
                      largeCircleValue1(mainString, userData.birth) +
                        largeCircleValue8(mainString, userData.birth)
                    )}
                  </div>
                </div>
                <div className="content_row">
                  Земля:
                  <div className="circle_purpose">
                    {getSum(
                      largeCircleValue4(mainString, userData.birth) +
                        largeCircleValue5(mainString, userData.birth)
                    )}
                  </div>
                </div>
              </div>
              <div className="right-border">
                <span className="span left-brace-tl"></span>
                <span className="span left-brace-tr"></span>
                <br />
                <span className="span left-brace-bl"></span>
                <span className="span left-brace-br"></span>
              </div>
              <div className="circle_purpose circle_sum">
                {getSum(
                  largeCircleValue1(mainString, userData.birth) +
                    largeCircleValue8(mainString, userData.birth) +
                    largeCircleValue4(mainString, userData.birth) +
                    largeCircleValue5(mainString, userData.birth)
                )}
              </div>
            </div>
          </div>
          <div className="purpose social">
            <h3 className="purpose_h3">Соціальне</h3>
            <p>В чому моя користь для людей? Пошук справи по душі.</p>
            <div className="rect">
              <div className="content">
                <div className="content_row word">
                  <span className="word">Ч:</span>
                  <div className="circle_purpose">
                    {getSum(
                      largeCircleValue2(mainString, userData.birth) +
                        largeCircleValue7(mainString, userData.birth)
                    )}
                  </div>
                </div>
                <div className="content_row word">
                  <span className="word">Ж:</span>
                  <div className="circle_purpose">
                    {getSum(
                      largeCircleValue6(mainString, userData.birth) +
                        largeCircleValue3(mainString, userData.birth)
                    )}
                  </div>
                </div>
              </div>
              <div className="right-border">
                <span className="span left-brace-tl"></span>
                <span className="span left-brace-tr"></span>
                <br />
                <span className="span left-brace-bl"></span>
                <span className="span left-brace-br"></span>
              </div>
              <div className="circle_purpose circle_sum">
                {getSum(
                  getSum(
                    largeCircleValue2(mainString, userData.birth) +
                      largeCircleValue7(mainString, userData.birth)
                  ) +
                    getSum(
                      largeCircleValue6(mainString, userData.birth) +
                        largeCircleValue3(mainString, userData.birth)
                    )
                )}
              </div>
            </div>
          </div>
        </div>

        {/*<div className="purposes_bottom">*/}
        {/*  <div className="purpose spiritual">*/}
        {/*    <h3 className="purpose_h3">Духовне</h3>*/}
        {/*    <p>Через що моя дорога до Бога? Де Бог в мені?</p>*/}
        {/*    <div className="rect">*/}
        {/*      <div className="content circle_solo">*/}
        {/*        <div className="circle">5</div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="purpose planetary">*/}
        {/*    <h3 className="purpose_h3">Планетарне</h3>*/}
        {/*    <p>Чим я можу бути корисним для своєї планети?</p>*/}
        {/*    <div className="rect">*/}
        {/*      <div className="content circle_solo">*/}
        {/*        <div className="circle">5</div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div className="purpose planetary">
        <h3 className="purpose_h3">Загальне</h3>
        <div className="rect">
          <div className="content circle_solo">
            <div className="circle">
              {getSum(
                getSum(
                  largeCircleValue1(mainString, userData.birth) +
                    largeCircleValue8(mainString, userData.birth) +
                    largeCircleValue4(mainString, userData.birth) +
                    largeCircleValue5(mainString, userData.birth)
                ) +
                  getSum(
                    getSum(
                      getSum(
                        largeCircleValue2(mainString, userData.birth) +
                          largeCircleValue7(mainString, userData.birth)
                      ) +
                        getSum(
                          largeCircleValue6(mainString, userData.birth) +
                            largeCircleValue3(mainString, userData.birth)
                        )
                    )
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
