import "../App.css";

const Header = () =>{

      return (
            <>
            <section className="header flex items-center justify-center text-white w-full h-[250px] bg-cover bg-center">
                  <div>
                        <p className="font-light text-xl">Available budget in september : </p>
                        <p className="text-4xl text-center">+1,12548</p>
                        <div className="flex justify-between p-2 bg-emerald-500">
                             <span className="text-2xl">Incomes</span>
                        </div>
                  </div>
            </section>
            </>
      )
}

export default Header;