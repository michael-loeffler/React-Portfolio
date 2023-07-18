import React from 'react';
import Badge from 'react-bootstrap/Badge';
import '../App.css';

function Project({title, src, github, deployed, badges, description}) {
    return (
    <div className="card w-25 mb-5 mt-3 mx-1 bg-light text-dark" style={{height: '650px'}}>
        <img className="card-img-top" src={src} alt="" style={{height: '400px', objectFit: 'contain', borderBottomStyle: 'solid'}}/>
        <div className="card-body" style={{maxHeight: '250px'}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text mt-3">{description}</p>
            {badges.map((badge) => {
            return (<Badge key={badge} className="mx-1 mt-1 text-dark" pill bg="info">{badge}</Badge>)
            })}
        </div>
        <div className="card-footer d-flex justify-content-between">
            <a href={deployed} target="_blank" rel="noopener noreferrer"><small className="text-dark">Deployed App</small></a>
            <a href={github} target="_blank" rel="noopener noreferrer"><small className="text-dark">GitHub Repo</small></a>
        </div>
    </div>
    )
}

export default Project;