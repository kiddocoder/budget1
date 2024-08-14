import "../App.css";

const Header = () =>{

      return (
            <>
            <section className="header flex items-center justify-center text-white w-full h-[250px] bg-cover bg-center">
                  <div className="flex flex-col gap-2">
                        <p className="font-light text-xl">Available budget in september : </p>
                        <p className="text-4xl text-center">+1,12548</p>

                        <div className="mt-5 flex flex-col gap-2">
                              <div className="flex justify-between p-2 bg-emerald-500">
                                   <span className="text-xl text-black">Incomes</span>
                                   <span className="mr-10">+1,152</span>
                              </div>

                              <div className="flex justify-between items-center p-2 bg-red-500">
                                   <span className="text-xl text-black">Expenses</span>
                                   <div className="flex justify-between">
                                       <span className="mr-2">+1,152</span>
                                       <span className="align-middle bg-red-300 rounded-sm p-1 text-[12px]">50%</span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
            </>
      )
}

export default Header;