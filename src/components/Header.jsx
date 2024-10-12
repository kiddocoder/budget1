import "../assets/css/App.css";
import formatNumber  from "../utils";
const Header = ({ total,monthPro}) => {

    return (
        <section className="header flex flex-col justify-center items-center text-white w-full h-[250px] bg-cover bg-center">
            <div className="flex flex-col gap-2">
                <p className="font-light text-xl text-center">Available budget in {new Date(0,monthPro).toLocaleString('en-US',{month:'long'})} :</p>
                <p className="text-4xl text-center">{(total.all<=0)? '' : '+'}{total.all && formatNumber(total.all)}</p>
                <div className="mt-5 flex flex-col gap-2">

                    <div className="item flex justify-between  items-center w-[300px] p-2 bg-emerald-500 cursor-pointer">
                        <span className="text-xl text-black">Incomes</span>
                        <div className="flex justify-between">
                            <span className="mr-2" >{(total.incomes>0)? '+' : ''}{total.incomes && (formatNumber(total.incomes))}</span>
                            <span className="align-middle bg-emerald-300 rounded-sm p-1 text-[12px]" id="percent">{total.percentIncomes && total.percentIncomes}%</span>
                        </div>
                    </div>

                    <div className="item flex justify-between items-center w-[300px] p-2 bg-red-500 cursor-pointer">
                        <span className="text-xl text-black">Expenses</span>
                        <div className="flex justify-between">
                            <span className="mr-2">{(total.expenses>0)? '-' : ''}{total.expenses && (formatNumber(total.expenses))}</span>
                            <span className="align-middle bg-red-300 rounded-sm p-1 text-[12px]" id="percent">{total.percentExpenses && total.percentExpenses}%</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Header;