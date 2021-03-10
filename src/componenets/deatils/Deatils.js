import React, { useEffect, useState } from "react";
import axios from "axios";



export const Deatils = () => {

    const options = {
        method: 'GET',
        url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666',
        headers: {
          'x-rapidapi-key': '9da9f853dcmsh86bba916aa656c2p18fc8djsne2562db22529',
          'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
        }
      };


    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
      }, []);

    return (
        <div>
            
        </div>
    )
}
