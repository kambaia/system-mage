import dayjs from "dayjs";
import { Table } from "@components/ui/table";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const columns = [
  {
    title: "Código de rastreio",
    dataIndex: "tracking_number",
    key: "tracking_number",
    align: "center",
    width: 150,
    render: (tracking_number: string) => (
      <span className="uppercase ">#{tracking_number?.slice(-5)}</span>
    ),
  },
  {
    title: "Código de rastreio",
    dataIndex: "tracking_number",
    key: "tracking_number",
    align: "center",
    width: 150,
    render: (tracking_number: string) => (
      <span className="uppercase ">#{tracking_number?.slice(-5)}</span>
    ),
  },
  {
    title: "Código de rastreio",
    dataIndex: "tracking_number",
    key: "tracking_number",
    align: "center",
    width: 150,
    render: (tracking_number: string) => (
      <span className="uppercase ">#{tracking_number?.slice(-5)}</span>
    ),
  },
  {
    title: "Código de rastreio",
    dataIndex: "tracking_number",
    key: "tracking_number",
    align: "center",
    width: 150,
    render: (tracking_number: string) => (
      <span className="uppercase ">#{tracking_number?.slice(-5)}</span>
    ),
  },
  {
    title: "Código de rastreio",
    dataIndex: "tracking_number",
    key: "tracking_number",
    align: "center",
    width: 150,
    render: (tracking_number: string) => (
      <span className="uppercase ">#{tracking_number?.slice(-5)}</span>
    ),
  },
  {
    title: "Código de rastreio",
    dataIndex: "tracking_number",
    key: "tracking_number",
    align: "center",
    width: 150,
    render: (tracking_number: string) => (
      <span className="uppercase ">#{tracking_number?.slice(-5)}</span>
    ),
  },
  {
    title: "Data do Pedido",
    dataIndex: "created_at",
    key: "created_at",
    align: "center",
    render: (date: string) => {
      dayjs.extend(relativeTime);
      dayjs.extend(utc);
      dayjs.extend(timezone);
      return (
        <span className="whitespace-nowrap">
          {dayjs.utc(date).tz(dayjs.tz.guess()).fromNow()}
        </span>
      );
    },
  },
  
];

type IProps = {
  orders: [];
  title?: string;
};

const ListPanel = ({ orders, title }: IProps) => {
  return (
    <>
      <div className="w-full rounded overflow-hidden shadow mb-6">
        <h3 className="text-heading text-center font-semibold px-4 py-3 bg-white border-b border-gray-200">
          {title}
        </h3>
        <Table
		
          //@ts-ignore
          columns={columns}
          data={orders}
          rowKey="id"
          scroll={{ x: 700 }}
        />
      </div>
    </>
  );
};

export default ListPanel;


