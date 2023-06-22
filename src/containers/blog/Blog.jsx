import React from 'react'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Jun 22, 2023" text="GPT-3 and OpenAI is the future. Let's explort it." />
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={blog02} date="Jun 22, 2023" text="GPT-3 and OpenAI is the future. Let's explort it." />
        <Article imgUrl={blog03} date="Jun 22, 2023" text="GPT-3 and OpenAI is the future. Let's explort it." />
        <Article imgUrl={blog04} date="Jun 22, 2023" text="GPT-3 and OpenAI is the future. Let's explort it." />
        <Article imgUrl={blog05} date="Jun 22, 2023" text="GPT-3 and OpenAI is the future. Let's explort it." />
        </div>
      </div>
    </div>
  )
}

export default Blog