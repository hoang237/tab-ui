import React from 'react';
import { useState } from 'react';
import './App.css';

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";



function App() {
  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }
  return (
    <>
      <div className='d-flex align-item-center justify-content-center'>
        <div className='col-3 tab p-5'>
          <ul className='d-flex'>
            <li className='flex-fill' onClick={() => updateToggle(1)}>HTML</li>
            <li className='flex-fill' onClick={() => updateToggle(2)}>CSS</li>
            <li className='flex-fill' onClick={() => updateToggle(3)}>JavaScript</li>
            <li className='flex-fill' onClick={() => updateToggle(4)}>Reactjs</li>
          </ul>
          <div className={toggle === 1 ? "show-content" : "content"}>
            <h1 className='h1-html'> <FaHtml5 />HTML</h1>
            <p>
              HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes.
            </p>
          </div>
          <div className={toggle === 2 ? "show-content" : "content"}>
            <h1 className='h1-css'><IoLogoCss3 />CSS</h1>
            <p>
              CSS is the abbreviation for Cascading Style Sheets, which helps create image colors, styles, etc. for HTML pages. In short, it is a language that creates style for a website. You can simply understand that, if HTML plays the role of formatting elements on the website such as creating paragraphs of text, titles, tables, etc. then CSS will help us add styles to the elements. That HTML is like changing the layout, page color, changing text color, font, changing structure...
            </p>
          </div>
          <div className={toggle === 3 ? "show-content" : "content"}>
            <h1 className='h1-js'><IoLogoJavascript />JavaScript</h1>
            <p>
              JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.
            </p>
          </div>
          <div className={toggle === 4 ? "show-content" : "content"}>
            <h1 className='h1-reactjs'><RiReactjsLine />Reactjs</h1>
            <p>
              React.js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
