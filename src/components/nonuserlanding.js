
const NonUserLanding = () => {



return(
<div className="NonUserLanding">
    <div className="bg-gray-50 pt-6 max-w-5xl rounded mx-auto border-2 mt-16 border-indigo-800">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Welcome to NUBER.</span>
        <span className="block text-purple-700">Sign in to get started.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-full shadow-md ">
            <a href="#" className="inline-flex items-center justify-center rounded-full border border-transparent bg-purple-600 px-5 py-3 text-base font-medium text-white hover:bg-purple-500">Get started</a>
        </div>
        <div class="ml-3 inline-flex rounded-full shadow-md ">
            <a href="#" className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium text-purple-600 hover:bg-purple-50">Learn more</a>
        </div>
        </div>
    </div>
    </div>
</div>

)


}

export default NonUserLanding;
