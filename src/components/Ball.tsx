import { View, StyleSheet } from 'react-native';

type BallProps = {
    x: number;
    y: number;
};

const Ball = ({ x, y }: BallProps) => {

    return (
        <View
            style={[styles.ball, {
                    transform: [
                        { translateX: x },
                        { translateY: y },
                    ],
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    ball: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
    },
});

export default Ball;