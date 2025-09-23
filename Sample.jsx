import React from 'react'

function Sample() {
  return (
    <>
    <style>
        {`
           body{
              background-color: grey;
           }
            h1{
              overflow: hidden;
              text-align: center;
              font-family: "Lobster Two",sans-sreif;
              font-weight: 800;
              color: white;
              font-size: 150px;
              marign-left: 
            }
            h1::before { 
              content: attr(data-List);
              position: absolute;
              top: 1;
              left: 1;
              transform: translatex(-100%);
              color: cyan;
              white-span: nowrap;
              animation: fillText 4s forwards;
            }
            @keyframes fillText {
               to {
                // left: 1;
                transform: translatex(0);
               }
            }
               
            
              
        `}
    </style>
     <body>
        <h1 data-list="Animation">Animation</h1>
     </body>
    </>
  )
}

export default Sample
