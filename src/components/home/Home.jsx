import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import { Carousel, DatePicker, Table } from "antd";
import CountUp from "react-countup";
import "./styles.css";

import { useEffect, useState } from "react";
const { RangePicker } = DatePicker;
const Home = () => {
  const [data, setData] = useState([]);
  const [dashboard, setDashboard] = useState([]);
  const images = [img5, img2, img3, img4, img6];
  useEffect(() => {
    fetchData();
    fetchDashboardData();
  }, []);
  const fetchData = async (startDate, endDate) => {
    try {
      let url = "http://localhost:8000/api/v1/bids/bids-chart";
      if (startDate) {
        url = `${url}?startDate=${startDate}`;
      }
      if (endDate) {
        url = `${url}&endDate=${endDate}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDashboardData = async () => {
    try {
      let url = "http://localhost:8000/api/v1/users/dashboard";

      const response = await fetch(url);
      const data = await response.json();
      console.log(data.data);
      setDashboard(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const allBidsColumns = [
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "3",
      width: 80,
      // searchable: true,
      render: (_, { createdAt }) => new Date(createdAt).toLocaleDateString("en-US"),
    },
    {
      title: "11:00 AM(2x)",
      dataIndex: "eleven",
      key: "1",
      width: 100,
      // searchable: true,
      render: (_, { eleven }) => (eleven ? eleven : "---"),
    },
    {
      title: "01:00 PM(2x)",
      dataIndex: "thirteen",
      key: "2",
      width: 100,
      // searchable: true,
      render: (_, { thirteen }) => (thirteen ? thirteen : "---"),
    },
    {
      title: "03:00 PM(2x)",
      dataIndex: "fifteen",
      key: "3",
      width: 100,
      // searchable: true,
      render: (_, { fifteen }) => (fifteen ? fifteen : "---"),
    },
    {
      title: "05:00 PM(2x)",
      dataIndex: "seventeen",
      key: "4",
      width: 100,
      // searchable: true,
      render: (_, { seventeen }) => (seventeen ? seventeen : "---"),
    },
    {
      title: "06:00 PM(100x)",
      dataIndex: "eighteen",
      key: "5",
      width: 100,
      // searchable: true,
      render: (_, { eighteen }) => (eighteen ? eighteen : "---"),
    },
    {
      title: "07:00 PM(2x)",
      dataIndex: "nineteen",
      key: "5",
      width: 100,
      // searchable: true,
      render: (_, { nineteen }) => (nineteen ? nineteen : "---"),
    },
    {
      title: "09:00 PM(2x)",
      dataIndex: "nineteen",
      key: "5",
      width: 100,
      // searchable: true,
      render: (_, { nineteen }) => (nineteen ? nineteen : "---"),
    },
    {
      title: "09:00 PM(2x)",
      dataIndex: "twentyone",
      key: "5",
      width: 100,
      // searchable: true,
      render: (_, { twentyone }) => (twentyone ? twentyone : "---"),
    },
  ];

  return (
    <div>
      {/* <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img style={{ height: "80vh", objectFit: "cover" }} src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel> */}
      <Carousel autoplay infinite>
        {/* <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div> */}
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img
              style={{ height: "80vh", width: "100%", objectFit: "cover" }}
              src={imageUrl}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
      <div style={{ margin: "50px" }}>
        <div
          style={{
            textAlign: "center",
            fontSize: 25,
            marginBottom: 30,
          }}
        >
          Metrics Overview
        </div>
        <div className="dashboard-data">
          {Object.keys(dashboard)?.map(
            (it, index) =>
              it !== "total_Amount" && (
                <div key={index} className="circle">
                  <CountUp end={dashboard[it]} separator="," />
                  <span style={{ fontSize: "15px" }}>{it?.replace("_", " ")?.toUpperCase()}</span>
                </div>
              )
          )}
        </div>
      </div>
      <div className="chart">
        <div
          style={{
            textAlign: "center",
            fontSize: 25,
            marginBottom: 20,
          }}
        >
          Daily Chart
        </div>
        <RangePicker
          style={{ marginBottom: 10 }}
          onChange={(e, d) => {
            fetchData(d[0], d[1]);
          }}
          format={"YYYY-MM-DD"}
        />
        <Table scroll={{ x: 500 }} columns={allBidsColumns} dataSource={data} />
      </div>
    </div>
  );
};

export default Home;
