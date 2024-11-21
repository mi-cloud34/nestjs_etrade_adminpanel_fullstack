import Link from "next/link"
import { usePathname } from "next/navigation"
import { MdDashboard,MdManageAccounts } from "react-icons/md"
import { RiShoppingCartLine } from "react-icons/ri"
import { GrTransaction } from "react-icons/gr"
import { IoAnalytics,IoSettings } from "react-icons/io5"
const menus=[
    {title:"Dashboard",icon:<MdDashboard/> ,href:"/admin/dashboard"},
    {title:"Products",icon:<RiShoppingCartLine/> ,href:"/admin/dashboard/products"},
    {title:"Accounts",icon:<MdManageAccounts/> ,href:"/admin/dashboard/acounts"},
    {title:"Transactions",icon:<GrTransaction/> ,href:"#"},
    {title:"Analyticks",icon:<IoAnalytics/> ,href:"#"},
]
const Sidebar=()=>{
   
    const pathName=usePathname()
    return (
        <div className=" bg-white w-[300px] min-h-screen p-4 shrink-0">
            <div className="flex items-center gap-4">
                <img className="size-12 rounded-lg" src="/next.svg" alt="" />
                <h2 className="text-[20px] font-semibold">Admin Panel</h2>
            </div>
            <ul className="space-y-4 mt-6">
                {
                    menus.map(menu=><Link key={menu.title} href={menu.href} className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white
                        ${pathName===menu.href?"bg-blue-400 text-white":"bg-gray-200"}
                        `}>
                            <div className="text-[20px]">{menu.icon}</div>
                            <p>{menu.title}</p>
                        </Link>)
                }
            </ul>
        </div>
    )
}
export default Sidebar;