import React from 'react'

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">Popular Courses</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master in courses for better future</h1>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Machine Learning</h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-base">Machine learning (ML) is a field of study in artificial intelligence concerned with the development and study of statistical algorithms that can effectively generalize and thus perform tasks without explicit instructions</p>
                    <a href className="mt-3 text-green-500 inline-flex items-center">Learn More
                    </a>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">MERN Full Stack</h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-base">MERN is one of several variations of the MEAN stack, where the traditional Angular.js front-end framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node).</p>
                    <a href className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Data Structures</h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-base">Data structures are generally based on the ability of a computer to fetch and store data at any place in its memory, specified by a pointer—a bit string, representing a memory address, that can be itself stored in memory and manipulated by the program.</p>
                    <a href className="mt-3 text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
                
            </div>
            </div>
        </div>
    </section>
  )
}

export default Features