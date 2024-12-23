import React, { useState } from 'react'
import lang from '../utils/langConstants'
import { useSelector } from 'react-redux';
import client from '../utils/openai';
const GptSearchBar = () => {
  const [inpt, setInpt] = useState(null);
  const isLang = useSelector(store => store.config.lang);
  // console.log(isLang, "isLang");

  const handleClick = async () => {
    console.log(inpt);
   const gptResults = await client.chat.completions.create({
        messages: [{ role: 'user', content: inpt }],
        model: 'gpt-3.5-turbo',
      });
    console.log(gptResults.choices?.[0]?.message?.content); 
  }
  return (
    <div className='pt-40 '>
        <form action="" className='bg-black p-4 w-[90%] m-auto flex justify-center gap-2 max-w-[500px]'
        onSubmit = {(e) => e.preventDefault()}>
      <input type="text" className='border-2 border-red-600  outline-none  p-2 w-[90%] placeholder:text-sm'
      placeholder={lang[isLang].gptSearchPlaceholder} onChange={((e) => setInpt(e.target.value))} 
      onClick={(e) => console.log(e.target.value)} value={inpt}/>
      <button className='bg-red-500 text-white w-[30%]' onClick={handleClick}>{lang[isLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar