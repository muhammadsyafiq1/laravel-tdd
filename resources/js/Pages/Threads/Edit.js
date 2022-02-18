import React from 'react'
import { useForm } from '@inertiajs/inertia-react'
import App from '@/Layouts/App'
import Input from '@/Components/Input'
import Button from '@/Components/Button'

export default function Edit({thread, categories}) {

    const {data, setData, put} = useForm({
        title: thread.title,
        body: thread.body,
        category_id: thread.category_id
    })

    // console.log({setData});

    const updateHandler = (e) => {
        e.preventDefault();
        put(route('threads.update',thread.id))
    }

    const handleChange = (e) => setData(e.target.name, e.target.value)

  return (
    <div>
        <form onSubmit={updateHandler}>

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
    Update
</Button>

</form>
    </div>
  )
}


Edit.layout = page => <App children={page} />