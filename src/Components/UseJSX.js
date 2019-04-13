import React from 'react'
// const hello = () =>{
//     return (
//         <div>
//          <h1> Hello Kundan Test</h1>
//         </div>
//     )
          
// }

const hello = () =>{
   // return React.createElement('div',null,'Hello World');
   //return React.createElement('div',null,'<h1>Hello World</h1>')
   // return React.createElement('div',null,'h1','Hello World')
   //return React.createElement('div',null,React.createElement('h1',null,'Hello World'))
   //return React.createElement('div',{id:23,class : 'Kundan'},React.createElement('h1',null,'Hello World'))

   return React.createElement('div',{id:23,className : 'Kundan'},React.createElement('h1',null,'Hello World'))


}
export default hello;