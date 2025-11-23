import { View,Text, StyleSheet, Animated } from "react-native"
import { useEffect, useRef } from "react";
import Svg,{Path,Defs, LinearGradient, Stop} from "react-native-svg"

export function GaugePromedio({value=0, size = 200}){
    const strokerWidth = 20;
    const radius =(size - strokerWidth) /2;
    const circumference = Math.PI * radius;

    const animatedProgress = useRef(new Animated.Value(0)).current;

    useEffect(() =>{
        Animated.timing(animatedProgress,{
            toValue:value,
            duration:1200,
            useNativeDriver:false,
        }).start();
    },[value])
    const AnimatedStroke = animatedProgress.interpolate({
        inputRange:[0, 100],
        outputRange:[0, circumference],
        extrapolate:"clamp",
    })
    const arcPath = `
    M ${size / 2 - radius}, ${size / 2}
    A ${radius},${radius} 0 0,1 ${size / 2 + radius}, ${size / 2}
    `;

    return(
        <View style={styles.container}>
            <Svg width={size} height={size/1.2}>
                <Defs>
                    <LinearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
                        <Stop offset="0%" stopColor="#115688"/>
                        <Stop offset="100%" stopColor="#c8f2f4"/>
                    </LinearGradient>
                </Defs>
                <Path
                    d={arcPath}
                    stroke="#1e293b30"
                    strokeWidth={strokerWidth}
                    fill="none"
                    strokeLinecap="round"
                />
                <AnimatedPath
                    d={arcPath}
                    stroke="url(#grad)"
                    strokeWidth={strokerWidth}
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={[AnimatedStroke, circumference]}
                />
            </Svg>
            <Text style={[styles.text, {top: size*0.23}]}>
                {value}
            </Text>
        </View>
    )
}

const AnimatedPath = Animated.createAnimatedComponent(Path)

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        position: "absolute",
        fontSize: 28,
        fontWeight: "bold",
        color: "#1f74b4ff",
    }
});