import React from 'react';
import { useSelector } from 'react-redux';
import Repo from './Repo';
import Spinners from './Spinners';


export default function RepoBox() {
    const { isLoadingRepo, repositories } = useSelector(state => state.repos)
    if (isLoadingRepo) return <Spinners />
    const repos = repositories.map((item, index) =>  (<Repo {...item} key={item.id} />))

    return (
        <div className="container my-5">
            <div className='row justify-content-center my-5'>
                {repos}
            </div>
        </div>
    )
}
