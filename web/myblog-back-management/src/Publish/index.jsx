// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import remarkMath from 'remark-math'
// import rehypeKatex from 'rehype-katex'
import { useState } from 'react'
import Editor from 'for-editor'

export default function Index() {
    // {/* <ReactMarkdown
    //         children={mdContent}
    //         remarkPlugins={[remarkMath]}
    //         rehypePlugins={[rehypeKatex]} /> */}
    const [mdContent, setMdContent] = useState("");
    const toolbar = {
        h1: true, // h1
        h2: true, // h2
        h3: true, // h3
        h4: true, // h4
        img: true, // 图片
        link: true, // 链接
        code: true, // 代码块
        preview: true, // 预览
        expand: true, // 全屏
        /* v0.0.9 */
        undo: true, // 撤销
        redo: true, // 重做
        save: true, // 保存
        /* v0.2.3 */
        subfield: true, // 单双栏模式
      }
    function handleChange(value) {
        setMdContent(value)
    }
    return (
        <div>
        
        <Editor value={mdContent} onChange={handleChange} subfield={true} toolbar={toolbar} />
        </div>
    
    )
  }
