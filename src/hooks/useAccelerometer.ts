import { useEffect, useState } from 'react';
import { Accelerometer } from 'expo-sensors';

const useAccelerometer = () => {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    useEffect(() => {

        Accelerometer.setUpdateInterval(50);

        const subscription = Accelerometer.addListener((accelerometerData) => {
            setData(accelerometerData);
        });

        return () => {
            subscription.remove();
        };

    }, []);

    return data;
};

export default useAccelerometer;