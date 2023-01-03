import { View } from "@tarojs/components";

import Echarts, { EChartOption } from "taro-react-echarts";
import echarts from "../../assets/js/echarts";

const Overview = () => {
  const option: EChartOption = {
    legend: {
      top: 50,
      left: "center",
      z: 100
    },
    tooltip: {
      trigger: "axis",
      show: true,
      confine: true
    },
    xAxis: {
      type: "category",
      data: ["1-12", "1-23", "2-4", "3-5", "3-15", "5-7", "8-11"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line"
      }
    ]
  };

  return (
    <View>
      概览
      <Echarts echarts={echarts} option={option} />
    </View>
  );
};

export default Overview;
