import Login from '../../components/Backoffice/Login'
import Router from 'next/router'

export default function backoffice(props){

    const AdminLoginHandler = (admin) => {
        if(admin.username === "aselole" && admin.password === "123"){
            Router.push('/backoffice/data-guest')
        }else{
            alert("kamu salah");
        }
    }

    return(
        <div>
            <Login onAdminLogin={AdminLoginHandler}></Login>
        </div>
    )
}