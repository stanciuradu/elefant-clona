import React from 'react';
import RecomandsItem from '../RecomandsItem/RecomandsItem';

function RecomandsList(props) {
    const{recomands}=props;
    return (
        <div className='container'>
            <div className='row'>
            {
                recomands.map((recomand,index)=>{
                        return <RecomandsItem
                                image={recomand.image}
                                name={recomand.name}
                                description={recomand.description}
                                RRP={recomand.RRP}
                                price={recomand.price}
                                priceTop={recomand.priceTop}
                                key={index}
                                />
                })
            }

            </div>
        </div>
    );
}

export default RecomandsList;
