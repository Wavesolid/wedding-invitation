import { useState } from 'react';

export default function Login(props) {

    const [admin, setAdmin] = useState({
        username: '',
        password: ''
    })
    
    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setAdmin({
            ...admin,
            [name]: value
        });
    }

    const SubmitHandler = (e) => {
        e.preventDefault();

        props.onAdminLogin(admin);
        setAdmin({
            username: '',
            password: ''
        })

    }

    return(
        <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="text-[24px] bold">Login Backoffice</h1>
        <div className="w-[20rem] p-[16px] shadow-md">
            <form onSubmit={SubmitHandler}>
                <div className="mb-[12px]">
                    <label htmlFor="username">Username</label>
                    <input  onChange={onChangeHandler} value={admin.username} name="username" className="w-[100%] p-[4px] rounded-[5px] border-[1px] border-[grey]" id="username" type="text"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={onChangeHandler} value={admin.password} name="password" className="w-[100%] p-[4px] rounded-[5px] border-[1px] border-[grey]" id="password" type="password"></input>
                </div>
                <div className="text-center mt-[16px]">
                    <button type="submit" className="py-[4px] px-[40px] rounded-[25px] text-[white] bg-[grey]">
                        <span>Login</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}