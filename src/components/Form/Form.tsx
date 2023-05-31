import React, { useState } from 'react';
import './Form.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { TextField } from '@mui/material';
import { storeSlice } from '../../store/reducers/StoreSlice';

export const Form = () => {
  const [userName, setUserName] = useState<string>('');
  const [birthDate, setStartDate] = useState<string>('');

  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.storeReducer);

  return (
    <div className="form">
      <label htmlFor="name">{`Ім'я: `}</label>
      <TextField
        id="name"
        name="name"
        onChange={(e) => setUserName(e.target.value)}
        size="small"
        value={userName}
      />
      <label className="label" htmlFor="date">
        Дата народження:{' '}
      </label>
      <TextField
        id="date"
        name="date"
        size="small"
        type="date"
        onChange={(e) => setStartDate(e.target.value.toString())}
      />
      <button
        className="btn"
        id="form_btn"
        onClick={() => {
          dispatch(storeSlice.actions.setUserData([userName, birthDate]));
        }}
      >
        Розрахувати
      </button>
    </div>
  );
};
