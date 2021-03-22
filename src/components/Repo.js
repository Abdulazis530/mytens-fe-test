import React from 'react'

export default function Repo({name,description,html_url}) {
    if(!name) return null
    return (
        <div className="card col-10 col-md-3 mx-3 my-3 card-custom text-center" >
            <div className="card-header">
                <p className="font-weight-bold">{name}</p>
            </div>
            <div className=" card-body ">
                {description ? description : "No Description" }
            </div>
            <div className="card-footer">
                <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-info">Visit repo </a>
            </div>
        </div>
    )
}
