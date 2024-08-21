import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';



 function SignButton(text: string, signIn : boolean) {

    const navigate = useNavigate();

    const { openSignIn } = useClerk();

    const handleSignIn = () => {
        openSignIn();

        navigate('/home');
    };

  return (
    <button 
      onClick={handleSignIn} 
      className={"text-black rounded-2xl px-3 py-2 text-m font-medium" + (signIn ? "bg-slate-200 hover:bg-slate-300" : "bg-emerald-400 hover:bg-emerald-500")} 
    >
      {text}
    </button>
  );
}

export default SignButton; 