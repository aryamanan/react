// Learning Typescript and JSX language

// Import Dependencies
import React from 'react'
import { useEffect } from 'react'
import ReactDom from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from './styles.module.css'

// Container Variable (Paragraph)
const myElement=(
  <div>
    <p>I am a paragraph</p>
    <p>I am a paragraph 2</p>
  </div>
);

// Container Variable (List)
const myElement2=(
  <ul>
    <li>Apples</li>
    <li>Oranges</li>
    <li>Bananas</li>
  </ul>
);

// Container Variable (Fragment)
// <> </> --> this is a fragment
const myElement3=(
  <> 
    <p>Maharora</p>
    <p>chaharoro</p>
  </>
)

// Container Variable (simple)
const myElement4= <h1 className="myClass">Hello world</h1>

// Container Variable (using let instead of const)
let myElement4point5=<h1>Yaya</h1>

// Using if statements
let x=5;
let text='goodbye';
if(x<10){
  text='Hello'
}
let myElement5=<h1>{text}</h1> // using template literals
// using ternary operator
let myElement6=<h1>{(x)<10?"Hello":"Goodbye"}</h1>

// this doesn't work
// because nextjs is a server side rendering framework
// cant handle client side rendering
// class Car1 extends React.Component {
//   render() {
//     return <h2>Hi, I am a car!</h2>;
//   }
// }


// container functions
function Car(){
  return <h2>Hi, I am a Car!</h2>;
}

// container functions with props
function Garage(){
  return (
    <>
    <h1> who lives in my garage</h1>
    <Car />
    </>
  )
}

// converting container variables to arrow functions
const his =()=>{
  return (
    <>
      <ul>
        <li>his1</li>
        <li>his2</li>
      </ul>
    </>
  )
}

// the final App (page which contains all the required container items in order)
export default function App() {
  return (
    <>
    <header><p>head</p></header>
    <main>
      {Car()}
      {Garage()}
      {his()}
    </main>
    <footer><p>footer</p></footer>
    </>
  )
}
