import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

export function CreeditosChart({creditosCursados,creditosTotales}){
    const screenWidth = Dimensions.get("window").width;
    const creditosFaltantes = creditosTotales - creditosCursados;

    const dataPie =[
            {
                name:"Cursados",
                population:creditosCursados,
                color:"#115688",
                legendFontColor:"#115688",
                legendFontSize:14
            },
            {
                name:"Faltantes",
                population:creditosFaltantes,
                color:"#b0c4de",
                legendFontColor:"#334155",
                legendFontSize:14
            }
        ]
    const chartConfig ={
        backgroundGradientFrom:"#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces:1,
        color:(opacity = 1) => `rgba(17,86,136, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(51, 65,85,${opacity})`
    }

    return(
        <PieChart 
            data={dataPie} 
            width={screenWidth - 20}
            height={200}
            chartConfig={chartConfig} 
            accessor={"population"} 
            backgroundColor={"transparent"} 
            paddingLeft={"10"}
        />
    );
}