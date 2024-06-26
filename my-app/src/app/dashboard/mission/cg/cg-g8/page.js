'use client'

import Footer from '@/page/Footer';
import React, { useState, useRef, useEffect } from 'react';
import BudgetChart from '@/page/BudgetChart';

const CG_G8 = ({data}) => {
  const parseBudgetData = (data2) => {
    let arr = []
    let data = [...data2];
    while (data.length > 0) {
      arr.push(data.splice(0, 36));
    }
    arr.forEach(e => e.splice(12,24));
    let tmp = [];
    let names = Array.from(new Set(arr.map(e => e[0].type)));
    let totals = Array.from(new Set(arr.map(e => parseFloat(e[0].budget))));
    for (let i = 0; i < arr.length; i++) {
      let total = 0;
      for (let j = 0; j < arr[i].length; j++) {
        total += parseFloat(arr[i][j].amount);
      }
      tmp.push(total);
    }
    let spent = Array.from(tmp);
    // totals.map((e, i) => totals[i] = totals[i] - tmp[i]);
    return {
      spent: tmp,
      budget: totals,
      names: names,
      difference: spent.map((e, i) => spent[i] = totals[i] - tmp[i]),
    }
  }

  return (
    <div className="container">
      <div className="text-2xl text-center"> Budget Data </div>
      <BudgetChart data={parseBudgetData(data)} />
      <Footer/>
    </div>
  )
}

export default CG_G8;