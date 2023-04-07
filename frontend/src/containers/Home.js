import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import ListingForm from '../components/ListingForm';
import Listings from '../components/Listings';
import Pagination from '../components/Pagination';


const  Home = () => {
    const [listings, setListings] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [listingsPerPage, setlistingsPerPage] = useState(3);
    const [active, setActive] = useState(1);

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing);

    const visitPage = (page) => {
        setcurrentPage(page);
        setActive(page);
    };

    const previous_number = () => {
        if (currentPage !== 1){
            setcurrentPage(currentPage-1);
            setActive(currentPage-1)
        }
    };

    const next_number = () => {
        if (currentPage !== Math.ceil(listings.length/3)){
            setcurrentPage(currentPage+1);
            setActive(currentPage+1)
        }
    };


    return(
        <main className='home'> 
            <Helmet>
                <title>Realest Estate - Home</title>
                <meta
                    name='description'
                    content='Realest Estate Home Page'
                />
            </Helmet>
            <section className='home__form'>
                <ListingForm setListings={setListings} />
            </section>
            <section className='home__listings'>
                <Listings listings={currentListings} />
            </section>
            <section className='home__pagination'>
                <div className='row'>
                    {
                        listings.length !== 0 ? (
                            <Pagination
                                itemsPerPage={listingsPerPage}
                                count={Listings.length}
                                visitPage={visitPage}
                                previous={previous_number}
                                next={next_number}
                                active={active}
                                setActive={setActive}
                            />
                        ) : null
                    }
                </div>
            </section>
        </main>
    ); 
};

export default Home