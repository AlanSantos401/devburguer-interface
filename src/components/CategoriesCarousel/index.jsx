import { useState } from 'react';
import { api } from '../../services/api';
import { useEffect } from 'react';

export function CategoriesCarousel(){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
       
        async function loadCategories() {
            const res = await api.get('/categories');
            console.log(res)
        }
        
        loadCategories();
    }, []);

    return (
        <div>
            <h1>ok</h1>
        </div>
    );
}