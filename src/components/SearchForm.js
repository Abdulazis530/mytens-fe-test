import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { loadRepo } from '../actions'

export default function SearchForm() {
    const [val, setVal] = useState("abdulazis530")
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        if(val)dispatch(loadRepo(val))  
    }
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <form onSubmit={handleSubmit} role="search">
                        <div className="input-group">
                            <input className="form-control search__form"
                                onChange={(e) => setVal(e.target.value)}
                                value={val}
                                placeholder="Search your repositories here."
                                type="text" />
                            <div className="input-group-btn">
                                <button type="submit" className="search__btn" id="searchbtn">
                                    Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
