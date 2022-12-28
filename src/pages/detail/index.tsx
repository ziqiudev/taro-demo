import { View } from "@tarojs/components";
import Table, { Columns } from "taro-react-table";

const Detail = () => {
  const columns: Columns[] = [
    {
      title: "日期",
      dataIndex: "date",
      fixed: "left"
    },
    {
      title: "商品名称",
      dataIndex: "name"
    },
    {
      title: "销售额",
      dataIndex: "name2"
    },
    {
      title: "库存",
      dataIndex: "name3"
    },
    {
      title: "日均用量",
      dataIndex: "name4"
    }
  ];

  return (
    <View>
      商品详情
      <Table dataSource={[]} columns={columns} colWidth={140}></Table>
    </View>
  );
};

export default Detail;
