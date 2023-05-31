import React from 'react';
import './MatrixPage.css';
import { Table } from '../../Table/Table';
import { Purposes } from '../../Purposes/Purposes';
import { Matrix } from '../../Matrix/Matrix';
import { BirthDate } from '../../BirthDate/BirthDate';
import { useAppSelector } from '../../../hooks/redux';
import { Form } from '../../Form/Form';

export const MatrixPage = () => {
  const { userData } = useAppSelector((state) => state.storeReducer);

  return (
    <div className="matrix_container">
      {!userData.name ? (
        <Form />
      ) : (
        <>
          <div className="table-wrapper">
            <Table />
            <Purposes />
          </div>
          <Matrix />
          <BirthDate />
        </>
      )}
    </div>
  );
};
