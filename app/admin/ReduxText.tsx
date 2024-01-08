"use client"

import React from 'react';

import type { RootState } from "@/redux/store"
import { useSelector, useDispatch } from "react-redux"
// import { increment, decrement, incrementByAmount } from "@/redux/Features/productReducer"

const ReduxText = () => {
    // const count = useSelector((state: RootState) => state.counter.value)
    // const dispatch = useDispatch()

    return (
        <div>
            {/* {count}
            <div>
                <button onClick={
                    () => dispatch(increment())
                } >Increment</button>
            </div>
            <div>
                <button onClick={
                    () => dispatch(decrement())
                } >Decrement</button>
            </div> */}

        </div>
    );
}

export default ReduxText;
