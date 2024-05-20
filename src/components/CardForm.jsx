import { useState } from 'react'

function CardForm({addCard}) {
    const [formData, setFormData] = useState({
        code: '3',
        name: '',
        details: ''
    });

  const handleClick = () => {
    
    const item = { 
        code: formData.code, 
        name: formData.name,
        details: formData.details
    };

    setFormData({
        code: '',
        name: '',
        details: ''
    });

    addCard(item);
  } 

  const handleInputChange =(e) => {
    const { name, value, type } = e.target;
    setFormData({...formData, [name]: value});
  }

  return (
    <>
      <div className='flex flex-col gap-3 w-80 mb-10'>
        <input type='text' id='code' name='code' className='bg-amber-100' value={formData.code} onChange={handleInputChange}></input>
        <input type='text' id='name' name='name' className='bg-amber-100' value={formData.name} onChange={handleInputChange}></input>
        <input type='text' id='details' name='details' className='bg-amber-100' value={formData.details} onChange={handleInputChange}></input>
        <button onClick={handleClick}>Aggiungi card</button>
      </div>
    </>
  )
}

export default CardForm
