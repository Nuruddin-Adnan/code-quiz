import React from 'react';

const Blog = () => {
    return (
        <div className="container my-5">
            <div className="row gy-4">
                <div className="col-xl-8 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-info">Question: #1 What is the purpose of react router?</h3>
                        </div>
                        <div className="card-body">
                            <p>React Router is a standard library for routing in React. It <strong>enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-info">Question: #2 How does context api works?</h3>
                        </div>
                        <div className="card-body">
                            <p>The React Context API is <strong> a way for a React app to effectively produce global variables that can be passed around</strong>. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-info">Question: #3 What is useRef Hook in react?</h3>
                        </div>
                        <div className="card-body">
                            <p>The useRef is <strong>a hook that allows to directly create a reference to the DOM element in the functional component</strong>. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;