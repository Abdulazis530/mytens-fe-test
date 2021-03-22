import React from 'react';
import { useSelector } from 'react-redux';
import bookIcon from '../assets/book.png';
import gmail from '../assets/gmail.png';
import pin from '../assets/pin.png';
import Spinners from './Spinners';

export default function CardProfile() {
    const { profile, isLoadingProfile } = useSelector(state => state.repos)
    if (isLoadingProfile) return (<Spinners />)

    return (
        <div className="container d-flex justify-content-center">
            <div className="card p-2">
                <div className="row no-gutters">
                    <div className="col-auto">
                        <img src={profile.avatar_url} style={{ borderRadius: '50%', width: 200, height: 200 }} alt="" />
                    </div>
                    <div className="col d-flex flex-column justify-content-around py-2">
                        <div className="title"><h5 className="font-weight-bold">{profile.login}</h5></div>
                        <div className="bio"><p className="font-weight-bold text-info">"{profile.bio}"</p></div>
                        <div className="information d-flex align-items-center justify-content-center px-2">
                            <div className="information__wraper d-flex">
                                <img src={bookIcon} alt="icon" style={{ width: 25, height: 25 }} />
                                <p className="d-inline ml-1">Repositories</p>
                                <p className="ml-1 badge badge-primary d-flex align-items-center">{profile.public_repos}</p>

                            </div>
                            <div className="mx-5 information__wraper d-flex">
                                <img src={gmail} alt="icon" style={{ width: 25, height: 25 }} />
                                <p className="d-inline ml-1">Email : </p>
                                <p className="ml-1 badge badge-info d-flex align-items-center">{profile.email ? profile.email : profile.blog}</p>
                            </div>
                            <div className="information__wraper d-flex">
                                <img src={pin} alt="icon" style={{ width: 25, height: 25 }} />
                                <p className="d-inline ml-1">Location</p>
                                <p className="ml-1 badge badge-success d-flex align-items-center">{profile.location}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
