import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const Showsuccese = (mesg)=>{
toast.success(mesg,{
        position: "bottom-left",
        autoClose: 5000
    })
}
export const ShowErroe = (mesg)=>{
    toast.error(mesg,{
        position: "top-center",
        autoClose: 5000
    })
}