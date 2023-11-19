import { team } from "../data"


const Team = () => {
  return (
    <section className="section" id="team">
        <div className="container mx-auto text-center">
                <h2 className="text-primary text-5xl font-primary font-extrabold mb-4 ">
                    Our Attorneys
                </h2>
                <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex adipisci, dicta sequi explicabo quae quasi ab deserunt eum ipsa.
                </p>

                <div className="lg:grid lg:grid-cols-3 lg:gap-x-[30px]">
                    {
                        team.map(({image, name, position, description}, i) => (
                            <div className=" text-center lg:text-left mb-12" key={i}>
                                <img src={image} alt={name} className="mx-auto lg:mx-0 mb-6 rounded-xl" />
                                <h4 className="text-2xl mb-2 font-primary font-bold">
                                    {name}
                                </h4>
                                <p className="text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]">
                                    {position}
                                </p>
                                <p className="max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0">
                                    {description}
                                </p>
                            </div>
                        ))
                    }
                </div>
        </div>
    </section>
  )
}

export default Team