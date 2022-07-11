import React from 'react';
import {useEffect, useState} from "react";
import Album from "../../components/Album/Album";

const AllAlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(value =>
                setAlbums([...value]))
    }, []);

    return (
        <div>
            <h1>ALBUMS:</h1>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>

    );
};
export default AllAlbumsPage
