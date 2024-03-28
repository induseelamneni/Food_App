const Contact = () => {
    return (
        <div>
            <h1>ContactUs</h1>
            <form>
                <input type="input" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-half rounded-md sm:text-sm focus:ring-1 mr-2" placeholder="enter text"/>
                <input type="input" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-half rounded-md sm:text-sm focus:ring-1 mr-2" placeholder="enter text"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact