import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default function index() {
  
    return (
        ReactDom.render(
<ReactMarkdown
    children={`The lift coefficient ($C_L$) is a dimensionless coefficient.`}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
  />,
  document.body
    ))
  }
