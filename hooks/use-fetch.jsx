import { useState } from 'react'
import { toast } from 'sonner';

const useFetch = (cb) => {
    const [data, setDtata ] = useState(undefined);
    const [loading, setLoading ] = useState(null);
    const [error, setError ] = useState(null);

    const fn = async (...args) => {
        setLoading(true);
        setError(null);

        try{
            const response = await cb(...args);
            setDtata(response);
            setError(null);
        }catch(error){
            setError(error);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    return { data, loading, error, fn, setDtata};
}

export default useFetch;