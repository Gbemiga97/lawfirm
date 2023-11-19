

const Newsletter = () => {
  return (
    <section className="bg-accent pt-[54px] pb-[74px] ">
        <div className="container mx-auto px-8 text-center">
            <h3 className="font-primary text-[40px] font-extrabold leading=[1.2]
            text-white mb-[12px]">
                Subscribe to our newsleter
            </h3>
            <p className="mb-[40px] text-white text-sm">Be the first to get latest news about us.</p>


            <form className="max-w-[600px] mx-auto flex flex-col md:justify-between md:gap-2 md:flex-row" >
                <input type="text" 
                className="form-control mb-4"
                placeholder="Your email address" />
                <button className="btn md:max-w-[12rem] bg-primary hover:bg-primary-hover lg:max-w-[150px]
                lg:ml-4">
                    Join
                </button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter