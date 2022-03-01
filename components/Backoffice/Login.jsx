import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

export default function Login(props) {
    const router = useRouter();
    const [load,setLoad] = useState(false);
    const [admin, setAdmin] = useState({
        username: '',
        password: ''
    });
    const [invalid,setInvalid] = useState();
    
    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setAdmin({
            ...admin,
            [name]: value
        });
    }

    const SubmitHandler = async(e) => {
        e.preventDefault();
        const username = admin.username;
        const password = admin.password;

        setLoad(true);
        const response = await signIn('credentials', {
            redirect:false,
            username, 
            password
        });

        setLoad(false);
        if(!response.error)
        {
            return router.replace('backoffice/data-guest');v
        } else {
            setInvalid({
                title: "Invalid Form",
                content: response.error
            });
            return ;
        }
    }

    const invalidHandler = () => {
        setInvalid(null);
    }

    return(
        <div>
            {load === true && <Loader positionBox={`md:!left-[46rem]`}/>}
            {invalid && <Modal title={invalid.title} content={invalid.content} onConfirm={invalidHandler} positionBox={`md:!left-[37rem]`} />}
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
    </div>
    )
}