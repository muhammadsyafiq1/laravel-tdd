import React from 'react'
import App from '@/Layouts/App'
import Input from '@/Components/Input'
import Button from '@/Components/Button'
import {useForm} from '@inertiajs/inertia-react'

export default function Create(props) {

    const {categories} = props;
    // console.log(categories)

    const {data, setData, reset, post} = useForm({
        title: '', body: '', category_id: ''
    })


    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const storeHandler = (e) => {
        e.preventDefault();
        post(route('threads.store'));
    }

    return (
        <div>
        
            <form onSubmit={storeHandler}>

                {/* karena Input gunakan handleChange */}
                <div className="mb-5">
                    <Input value={data.title} type="text" name="title" handleChange={handleChange} />
                </div>

                <div className="mb-5">
                    <textarea value={data.body} name="body" onChange={handleChange} />
                </div>

                <div className="mb-5">
                    <select value={data.category_id} onChange={handleChange} name="category_id">
                        <option>Choose Category</option>
                        
                        {categories.map(category => <option key={category.id} value={category.id} >{category.name}</option> )} 

                    </select>
                </div>

                <Button>
                    Create
                </Button>

            </form>

        </div>
    );  
}

Create.layout = page => <App children={page} title="Create thread"/>
 