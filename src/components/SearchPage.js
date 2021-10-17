import React from 'react'
import { Link } from 'react-router-dom';
import response from '../response';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css';
import Search from './Search';

const SearchPage = () => {
    const [{term}, dispatch] = useStateValue();

    // LIVE API CALL
    // const {data} = useGoogleSearch(term);

    const data = response;

    // https://developers.google.com/custom-search/v1/using_rest

    //https://cse.google.com/cse/create/new

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
              <Link to="/">
                  <img 
                   className="searchPage__logo"
                   src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                   alt=""
                  />
              </Link>
              <div className="searchPage__headerBody">
                  <Search hideButtons />
              </div>
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
