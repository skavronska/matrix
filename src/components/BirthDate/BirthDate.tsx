import React from 'react';
import './BirthDate.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { storeSlice } from '../../store/reducers/StoreSlice';

export const BirthDate = () => {
  const { userData } = useAppSelector((state) => state.storeReducer);
  const dispatch = useAppDispatch();

  const date = new Date().getFullYear();

  return (
    <div className="birth-data">
      <button
        className="btn"
        onClick={() => {
          dispatch(storeSlice.actions.resetUserData());
        }}
      >
        Ввести іншу дату
      </button>
      <div>
        <b>Дата народження: </b>
        {userData.birth}
      </div>
      <div>
        <b>{`Ім'я та вік: `}</b>
        {userData.name}, {date - parseInt(userData.birth.slice(6, 10))}
      </div>
    </div>
  );
};
