import React from 'react';
import CategoriesItem from './CategoriesItem';
function CategoriesList(props) {
    const {categories}=props;
    return (
        <div className='container'>
            <div className='row'>
            {
                categories.map((category,index)=>{
                    return <CategoriesItem
                            name={category.name}
                            image={category.image}
                            key={index}
                            />
                })
            }

            </div>
        </div>
    )
}

export default CategoriesList;
