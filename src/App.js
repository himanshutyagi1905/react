import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  // const itemTwoName = "Ayush";
  const response = [
    {
      itemName: "Himanshu",
      itemDate: "10",
      itemMonth: "May",
      itemyear: "2000"
    },
    {
      itemName: "Himanshu1",
      itemDate: "11",
      itemMonth: "June",
      itemyear: "2000"
    },
    {
      itemName: "Himanshu2",
      itemDate: "12",
      itemMonth: "July",
      itemyear: "2000"
    }
  ];
  return (
    <div> 
    <Card>
    <Item name ={response[0].itemName}>React Project</Item>
    <ItemDate day ={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

    <Item name ={response[1].itemName}></Item>
    <ItemDate  day ={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>

    <Item name = {response[2].itemName}></Item>
    <ItemDate  day ={response[2].itemName} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>

    <div className="App"> Hello World</div>
    </Card>

    </div>
  );
}

export default App;
