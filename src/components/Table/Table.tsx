import React from 'react';
import './Table.css';
import {
  largeCircleValue1,
  largeCircleValue4,
  largeCircleValue5,
  largeCircleValue8,
  largeCircleValueCenter,
  getSum,
} from '../../service/calculator';
import { useAppSelector } from '../../hooks/redux';

export const Table = () => {
  const { mainString, userData } = useAppSelector((state) => state.storeReducer);
  // const mainString = ['2', '4', '0', '1', '1', '9', '9', '7'];

  return (
    <div className="table_container">
      <h3>КАРТА ЗДОРОВ&apos;Я</h3>
      <table>
        <tbody>
          <tr className="th_header">
            <th className="th_small">ФІЗИКА</th>
            <th className="th_small">ЕНЕРГІЯ</th>
            <th className="th_small">ЕМОЦІЇ</th>
            <th className="th_large">НАЗВА ЧАКР</th>
          </tr>
          <tr className="tr_seven">
            <td>
              <span>{largeCircleValue4(mainString, userData.birth)} </span>
            </td>
            <td>
              <span> {largeCircleValue1(mainString, userData.birth)}</span>
            </td>
            <td>
              <span>
                {largeCircleValue4(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth)}
              </span>
            </td>
            <td>
              <span>7.САХАСРАРА</span>
            </td>
          </tr>
          <tr className="tr_six">
            <td>
              <span>
                {getSum(
                  largeCircleValue4(mainString, userData.birth) +
                    largeCircleValue4(mainString, userData.birth) +
                    largeCircleValueCenter(mainString, userData.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  largeCircleValue1(mainString, userData.birth) +
                    largeCircleValueCenter(mainString, userData.birth) +
                    largeCircleValue1(mainString, userData.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  getSum(
                    largeCircleValue4(mainString, userData.birth) +
                      largeCircleValue4(mainString, userData.birth) +
                      largeCircleValueCenter(mainString, userData.birth)
                  ) +
                    getSum(
                      largeCircleValue1(mainString, userData.birth) +
                        largeCircleValueCenter(mainString, userData.birth) +
                        largeCircleValue1(mainString, userData.birth)
                    )
                )}
              </span>
            </td>
            <td>
              <span>6.АДЖНА</span>
            </td>
          </tr>
          <tr className="tr_five">
            <td>
              <span>
                {getSum(
                  largeCircleValue4(mainString, userData.birth) +
                    largeCircleValueCenter(mainString, userData.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  largeCircleValue1(mainString, userData.birth) +
                    largeCircleValueCenter(mainString, userData.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  getSum(
                    largeCircleValue4(mainString, userData.birth) +
                      largeCircleValueCenter(mainString, userData.birth)
                  ) +
                    getSum(
                      largeCircleValue1(mainString, userData.birth) +
                        largeCircleValueCenter(mainString, userData.birth)
                    )
                )}
              </span>
            </td>
            <td>
              <span>5.ВІШУДХА</span>
            </td>
          </tr>
          <tr className="tr_eight">
            <td>
              <span>
                {getSum(
                  largeCircleValueCenter(mainString, userData.birth) +
                    largeCircleValue4(mainString, userData.birth) +
                    largeCircleValueCenter(mainString, userData.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  largeCircleValue1(mainString, userData.birth) +
                    largeCircleValueCenter(mainString, userData.birth) +
                    largeCircleValueCenter(mainString, userData.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  getSum(
                    largeCircleValueCenter(mainString, userData.birth) +
                      largeCircleValue4(mainString, userData.birth) +
                      largeCircleValueCenter(mainString, userData.birth)
                  ) +
                    getSum(
                      largeCircleValue1(mainString, userData.birth) +
                        largeCircleValueCenter(mainString, userData.birth) +
                        largeCircleValueCenter(mainString, userData.birth)
                    )
                )}
              </span>
            </td>
            <td>
              <span>4.АНАХАТА</span>
            </td>
          </tr>
          <tr className="tr_three">
            <td>{getSum(largeCircleValueCenter(mainString, userData.birth))}</td>
            <td>{getSum(largeCircleValueCenter(mainString, userData.birth))}</td>
            <td>
              {getSum(
                getSum(largeCircleValueCenter(mainString, userData.birth)) +
                  getSum(largeCircleValueCenter(mainString, userData.birth))
              )}
            </td>
            <td>3.МАНІПУРА</td>
          </tr>
          <tr className="tr_two">
            <td>
              <span>
                {getSum(
                  largeCircleValueCenter(mainString, userData.birth) +
                    largeCircleValue5(mainString, userData.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  largeCircleValueCenter(mainString, userData.birth) +
                    largeCircleValue8(mainString, userData.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  getSum(
                    largeCircleValueCenter(mainString, userData.birth) +
                      largeCircleValue5(mainString, userData.birth)
                  ) +
                    getSum(
                      largeCircleValueCenter(mainString, userData.birth) +
                        largeCircleValue8(mainString, userData.birth)
                    )
                )}
              </span>
            </td>
            <td>
              <span>2.СВАДХІСТАНА</span>
            </td>
          </tr>
          <tr className="tr_one">
            <td>
              <span>{getSum(largeCircleValue5(mainString, userData.birth))}</span>
            </td>
            <td>
              <span>{getSum(largeCircleValue8(mainString, userData.birth))}</span>
            </td>
            <td>
              <span>
                {getSum(
                  getSum(largeCircleValue5(mainString, userData.birth)) +
                    getSum(largeCircleValue8(mainString, userData.birth))
                )}
              </span>
            </td>
            <td>
              <span>1.МУЛАДХАРА</span>
            </td>
          </tr>
          <tr className="th_footer">
            <td>
              {getSum(
                largeCircleValue5(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue5(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue4(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue4(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue4(mainString, userData.birth) +
                  largeCircleValue4(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue4(mainString, userData.birth)
              )}
            </td>
            <td>
              {getSum(
                largeCircleValue8(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue8(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth)
              )}
            </td>
            <td>
              {getSum(
                largeCircleValue5(mainString, userData.birth) +
                  largeCircleValue8(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue5(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue8(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue4(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue4(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue4(mainString, userData.birth) +
                  largeCircleValue4(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth) +
                  largeCircleValueCenter(mainString, userData.birth) +
                  largeCircleValue1(mainString, userData.birth) +
                  parseInt(mainString[0]) +
                  parseInt(mainString[1]) +
                  parseInt(mainString[2]) +
                  parseInt(mainString[3])
              )}
            </td>
            <td>ПІДСУМОК</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
