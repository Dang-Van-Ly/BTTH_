import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import h1 from './assets/h1.png'

function App() {

  const [tg, setTG] = useState('');

  const [lai,setLai] =useState('');
  const [mt,setMT]= useState('');
  const [result, setResult] = useState([]);
const TinhToan=()=>{
  let tien= parseFloat(tg);
  const laisuat = parseFloat(lai)/100;
  const muctieu= parseFloat(mt);
  let nam= new Date().getFullYear();
  let ketqua=[];
  if(isNaN(tien) || isNaN(muctieu) || isNaN(laisuat) || tien <= 0 || laisuat <= 0 || muctieu <= 0) {
    alert("Vui lòng nhập đúng số hợp lệ !");
    return;
  }
  
  for(;tien<muctieu;){
    nam++;
    tien += tien*laisuat;
    ketqua.push({nam,tien: tien.toFixed(2)});
  }
  setResult(ketqua);
};
  
  return (
    <>
    <div className='container mt-4'>
    <h1 className="text-center text-primary" >Bảng Thời gian tiết kiêm</h1>
      <img src={h1} alt=""  />
      <br />
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="mb-3">
            <label className="form-label">Nhập tiền gốc:</label>
            <input className="form-control" type="text" value={tg} onChange={(e)=>setTG(e.target.value)}/>
          </div>
          
          <div className="mb-4">
            <label className="form-label">Nhập lãi suất :</label>
              <input className="form-control" type="text" value={lai} onChange={(e)=>setLai(e.target.value)}/>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Nhập số tiền muốn đạt được:</label>
            <input className="form-control" type="text" value={mt} onChange={(e)=>setMT(e.target.value)}/>
          </div>

          <button className="btn btn-primary w-100" onClick={TinhToan}>Tính toán</button>

          {result.length>0&&(
            <div className='mt-4'>
              <h3>Kết quả:</h3>
              <table className='table table-borderedbordered'>
                  <thead>
                    <tr>
                      <th>Năm</th>
                      <th>Số Tiền </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      result.map((item,index)=>(
                        <tr key={index}>
                          <td>{item.nam}</td>
                          <td>{item.tien}</td>
                        </tr>
                      ))
                    }
                  </tbody>
              </table>
            </div>
          )}
        </div>
      </div>


      </div>

    </>
  )
}

export default App
