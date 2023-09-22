/* eslint-disable prettier/prettier */
import { Tabs } from "antd";
import Pie from "./components/pie";
import Curve from "./components/curve";
import "./index.less";
import BookSum from "./images/book-sum.png";
import AddPerson from "./images/add_person.png";
import AddTeam from "./images/add_team.png";
import Today from "./images/today.png";
import BookSum1 from "./images/book_sum.png";
const { TabPane } = Tabs;

// 1
const DataVisualize = () => {
	const onChange = (key: string) => {
		console.log("onChange", key);
	};

	const tabsList = [
		{ label: "未来7日", name: 1 },
		{ label: "近七日", name: 2 },
		{ label: "近一月", name: 3 },
		{ label: "近三月", name: 4 },
		{ label: "近半年", name: 5 },
		{ label: "近一年", name: 6 }
	];

	return (
		<div className="dataVisualize-box"> 
			<h2 style={{fontSize: 20}}>Charts中用useEcharts复用：组件中setOption / init / resize   使用Ref控制Div</h2>
			<h2 style={{fontSize: 20}}>切换月份使用 Tabs + Tabs.TabPane</h2>
			<div className=" card top-box">
				<div className="top-title">数据可视化</div>
				{/* 切换Tab */}
				<Tabs defaultActiveKey="2" onChange={onChange}>
					{tabsList.map(item => {
						return <TabPane tab={item.label} key={item.name}></TabPane>;
					})}
				</Tabs>
				<div className="top-content">
					<div className="item-left sle">
						<span className="left-title">访问总数</span>
						<div className="img-box">
							<img src={BookSum} alt="" />
						</div>
						<span className="left-number">848.132w</span>
					</div>
					<div className="item-center">
						<div className="gitee-traffic traffic-box">
							<div className="traffic-img">
								<img src={AddPerson} alt="" />
							</div>
							<span className="item-value">2222</span>
							<span className="traffic-name sle">Gitee 访问量</span>
						</div>
						<div className="gitHub-traffic traffic-box">
							<div className="traffic-img">
								<img src={AddTeam} alt="" />
							</div>
							<span className="item-value">2222</span>
							<span className="traffic-name sle">GitHub 访问量</span>
						</div>
						<div className="today-traffic traffic-box">
							<div className="traffic-img">
								<img src={Today} alt="" />
							</div>
							<span className="item-value">4567</span>
							<span className="traffic-name sle">今日访问量</span>
						</div>
						<div className="yesterday-traffic traffic-box">
							<div className="traffic-img">
								<img src={BookSum1} alt="" />
							</div>
							<span className="item-value">1234</span>
							<span className="traffic-name sle">昨日访问量</span>
						</div>
					</div>
					{/* TODO: 饼图 */}
					<div className="item-right">
						<div className="echarts-title">Gitee / GitHub 访问量占比</div>
						<div className="book-echarts">
							<Pie />
						</div>
					</div>
				</div>
			</div>

			<div className="card bottom-box">
				<div className="bottom-title">数据来源</div>
				{/* 切换Tab */}
				<div className="bottom-tabs">
					<Tabs defaultActiveKey="1" onChange={onChange}>
						{tabsList.map(item => {
							return <TabPane tab={item.label} key={item.name}></TabPane>;
						})}
					</Tabs>
				</div>
				{/* TODO: 柱状图 */}
				<div className="curve-echarts">
					<Curve />
				</div>
			</div>
			
		</div>
	);
};

export default DataVisualize;
