
import { getInfo} from '../services/infoService.js';
import { useEffect, useState } from 'react';

export function useInfo() {
    const [infos, setInfos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchInfos() {
            try {
                const data = await getInfo();
                setInfos(data);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }

        }
        fetchInfos();
    }, []);
    return { infos, loading, error };
}

