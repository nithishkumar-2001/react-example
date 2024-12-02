import React from 'react'
function Titles({ className,text,link,class1}) {
    return (
        <>
           <div className={className}>{text}<a className={class1} href='#'>{link}</a></div>
        </>

    )
}

export default Titles
