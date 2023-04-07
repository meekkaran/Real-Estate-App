import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const  ListingForm = (props) => {
    const [formData, setFormData] = useState[{
        sale_type: 'For sale',
        price:'50+',
        bedrooms:'0+',
        home_type:'House',
        bathrooms: '0+',
        sqft:'1000+',
        days_listed:'1 or less',
        has_photos:'1+',
        open_house:'false',
        keywords:''
    }];

    const{ sale_type, price,bedrooms,home_type,bathrooms,sqft,days_listed, has_photos, open_house, keywords } = formData;

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData[{ ...formData, [e.target.name]: e.target.value}];

    const onSubmit = e => {
        e.preventDefault();

        axios.defaults.headers = {
            "Content-Type": "aplication/json"
        };

        setLoading(true);
        axios.post('http:/localhost:8000/api/listings/search', {sale_type, price,bedrooms,home_type,bathrooms,sqft,days_listed, has_photos, open_house, keywords})
        .then(res => {
            setLoading(false);
            props.setListings(res.data);
            window.scrollTo(0, 0);
        })
        .catch(err =>{
            setLoading(false);
            window.scrollTo(0,0);
        })
    }


    return (
        <form className='listingform'onsubmit={e => onSubmit(e)}>
            <div className='row'>
                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='sale_type'>Sale or Rent</label>
                        <select className='listingform__select' name='sale_type'onChange={e => onChange(e)} value={sale_type}>
                            <option>For Sale</option>
                            <option>For Rent</option>
                        </select>
                    </div>
                </div>
                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='sqft'>Sqft</label>
                        <select className='listingform__select' name='sqft'onChange={e => onChange(e)} value={sqft}>
                            <option>1000+</option>
                            <option>1200+</option>
                            <option>1500+</option>
                            <option>2000+</option>
                            <option>Any</option>
                        </select>
                    </div>
                </div>
                <div className='col-1-of-6'>
                     <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='price'>Minimum price</label>
                        <select className='listingform__select' name='price'onChange={e => onChange(e)} value={price}>
                            <option>$0+</option>
                            <option>$200,000+</option>
                            <option>$400,000+</option>
                            <option>$600,000+</option>
                            <option>$800,000+</option>
                            <option>$1,000,000+</option>
                            <option>$1,200,000+</option>
                            <option>$1,500,000+</option>
                            <option>Any</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    ); 
}

export default ListingForm