import { useState, useEffect } from 'react'

function Panel({item}) {
    let [count, setCount] = useState(0);
    let [data, setData] = useState();


    useEffect(() => {
        count = parseInt(localStorage.getItem("count"));
        if(isNaN(count)) {
            count = 0;
        }

        console.log(count);

        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((data) => {
                
                setData(data);
                console.log(data);
            });


    }, []);


    useEffect(() => {
        document.title = count;
        localStorage.setItem("count", count);
        console.log(count);
    }, [count]);


  return (
    <>
    <br></br>
    <hr></hr>
      <div>Panel with use effect! {count}</div>
      <button onClick={() => setCount(count + 1)}>INCREMENTA</button>


      <div>
        {
            data && data.map((item) => (
            <div key={item.id}><b>{item.id} {item.title}!</b> {item.body}</div>
            ))
        }
      </div>
      
    </>
  )
}

export default Panel
