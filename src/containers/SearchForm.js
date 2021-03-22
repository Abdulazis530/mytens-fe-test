import React, {useState} from 'react'

export default function SearchForm() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <form action="#" method="#" role="search">
                        <div className="input-group">
                            <input className="form-control search__form" placeholder="Search your repositories here."   type="text" />
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
