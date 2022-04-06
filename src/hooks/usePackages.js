import { useEffect, useState } from 'react';

const usePackages = () => {
    const [tourPackages, setTourPackages] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/packages")
            .then(res => res.json())
            .then(data => setTourPackages(data));
    }, []);

    return [tourPackages];

};

export default usePackages;