"use client"
import React, { useEffect, useState } from 'react';

const Pagination = ({products,currPage,setCurrPage}) => {


  const pageLen = products?.length / 13 
  
  const arr = []
  for(let i= 0; i < pageLen; i ++){
    arr.push(i)
  }
    return (
        <nav aria-label="Page navigation example" className="my-10 flex-center">
        <ul className="flex items-center h-10 -space-x-px text-base">
          <li onClick={()=> setCurrPage(currPage-1 <= 0 ? 1:  currPage - 1 )}
          className="flex items-center justify-center h-10 px-4 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Предишна</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
              </svg>
          </li>
          { arr.map( (e,i) => {
    return  currPage == i +1 ? <CurrentPage num={i + 1}  key={i}/> : <Page num={i + 1} key={i} setCurrPage={setCurrPage}/>
})
          }
         
          <li className="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=> setCurrPage(currPage + 1 > Math.ceil(pageLen) ? currPage : currPage + 1)}>
              <span className="sr-only">Следваща</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
            
          </li>
        </ul>
      </nav>
    );
}

export default Pagination;

const Page = ({num, setCurrPage})=>{
  return   <li onClick={()=> setCurrPage(num)} className="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
  {num}
</li>
}

const CurrentPage = ({num})=>{
  return  <li className="z-10 flex items-center justify-center h-10 px-4 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
  {num}
</li>
}