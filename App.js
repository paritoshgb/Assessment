import { useState,useEffect } from "react";


export default function Assessment() {
  const [value, setValue] = useState("");
  const [detailPrint,setDetailPrint]=useState([])
  const [result, setresult] = useState(false);

  var data=[
    {"placename":"Sun Temple","city":"Gwalior","state":"Madhya Pradesh","description":"It is Hindu's Temple, Famous in Gwalior, Made in 1984"},
    
    {"placename":"Taj mahal","city":"Agra","state":"Uttar Pradesh","description":"The Taj Mahal is an ivory white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan reigned from 1628 to 1658, to house the tomb of his favourite wife, Mumtaz Mahal"},
  
    {"placename":"India Gate","city":"Delhi","state":"Delhi","description":"The iconic India Gate, an arch gate made using sandstone, is a war memorial situated in the Rajpath area, Delhi. It was built to commemorate the Undivided British Army (also known as British India Army) soldiers who laid down their lives during the First World War and the Third Anglo-Afghan War of 1919"},
  
    {"placename":"Golden Temple","city":"Amritsar","state":"Punjab","description":"The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure. Maharaja Ranjit Singh had the upper half of the building built with approximately 400 kg of gold leaf"},
  
    {"placename":"Gateway of India","city":"mumbai","state":"Maharashtra","description":"The Gateway of India is an arch monument built during the 20th century in Bombay, India. The monument was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911"},
  
    {"placename":"statue of unity","city":"Ahemdabad","state":"Gujrat","description":"The 182-metre (600 feet aprox.) statue is dedicated to Sardar Vallabhbhai Patel, the architect of independent India. The colossal monument towers over River Narmada, a tribute to India 'from the people of Gujarat' to the leader who placed people's welfare first"},
  
     {"placename":"Hawa Mahal","city":"jaipur","state":"Rajasthan","description":"The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. It has a curved architecture that leans at an 87 degree angle, and a pyramidal shape which has helped it stay erect for centuries. The Hawa Mahal is dedicated to Lord Krishna."},
  
     {"placename":"Jallianwala Bagh","city":"Amritsar","state":"Punjab","description":"Jallianwala Bagh is a historic garden and 'memorial of national importance' close to the Golden Temple complex in Amritsar, Punjab, India, preserved in the memory of those wounded and killed in the Jallianwala Bagh Massacre that occurred on the site on the festival of Baisakhi, 13 April 1919."},
  
     {"placename":"Great Stupa","city":"sanchi","state":"Madhya Pradesh","description":"The Great Stupa (also called stupa no. 1) was originally built in the 3rd century bce by the Mauryan emperor Ashoka and is believed to house ashes of the Buddha. The simple structure was damaged at some point during the 2nd century bc"},
  
     {"placename":"Pangong Lake","city":"Ladakh","state":"Ladakh","description":"Pangong Lake, situated at a height of almost 4,350m, is the world's highest saltwater lake. Its water, which seems to be dyed in blue, stand in stark contrast to the arid mountains surrounding it. Extending to almost 160km, one-third of the Pangong Lake lies in India and the other two-thirds in China"},
     
     {"placename":"Red fort","city":"Delhi","state":"Delhi","description":"Red Fort, also called Lal Qalah, also spelled Lal Kila or Lal Qila, Mughal fort in Old Delhi, India. It was built by Shah Jahan in the mid-17th century"},
  
     {"placename":"Ranthambore National Park","city":"Sawai Madhopur","state":"Rajasthan","description":"A Brilliant Place to experience the Indian Wildlife"},
  
     {"placename":"Jai Vilas Palace","city":"Gwalior","state":"Madhya Pradesh","description":"It was Built in 1874 by Jayajirao Scindia, the Maharaj of Gwalior in the British Raj"},
  
     {"placename":"Fatehpur Sikri","city":"Agra","state":"Uttar Pradesh","description":"It was Built in 1571"},

    ]

  const onChange = (event) => {
    setValue(event.target.value);
    setresult(false)
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    
  };

  const onClear = () => {
    setValue('');
  };

  useEffect(function(){
setDetailPrint('')
  },[])

  return (
    <div style={{display:'flex',fontFamily:'sans-serif',textAlign:'center',flexDirection:'column',alignItems:'center',background:' linear-gradient(90deg, rgba(229,242,172,1) 21%, rgba(231,225,230,1) 75%)',height:'100vh'}}>
      <h2>Search Your Data</h2>

      <div style={{width:'310px',display:'flex',flexDirection:'column',margin:2}}>
        <div style={{display:'flex',margin:2}}>
          <input type="text" value={value} onChange={onChange} style={{width:'180px'}} />
          <button onClick={() => {onSearch(value);setresult(true)}} style={{marginLeft:10}}> Search</button>
          <button onClick={() => {onClear(value);setDetailPrint('')}} style={{marginLeft:10}}> Clear </button>
        </div>
        <div style={{backgroundColor:'white',display:'flex',flexDirection:'column',border:value?'0.2px solid grey':''}}>
          {data.filter((item) => {const searchTerm = value.toLowerCase();
            const fullName = item.placename.toLowerCase();
                 return (
                searchTerm && fullName.includes(searchTerm) && fullName !== searchTerm);
            }).slice(0,6)
            .map((item) => (
              <div
                onClick={() => {onSearch(item.placename)
                          setDetailPrint(item)}}
                style={{cursor:'pointer',textAlign:'start',margin:'2px 0' }}>
                {item.placename}
              </div>
            ))}
        </div>
      </div>
      <div>
      
      </div>
    {result?<>{detailPrint?<><div style={{marginTop:50,marginLeft:'10%'}}>
      <table width="95%" heigth="35%" border="1" bgcolor="white"><caption><h2>SOME FAMOUS PLACES OF INDIA</h2></caption>
      <tr><th>S.no.</th><th>Places name</th><th>City</th><th>State/U.T.</th><th>Discription</th></tr>
      <tr><td>1</td><td><mark>{detailPrint.placename}</mark></td><td>{detailPrint.city}</td><td>{detailPrint.state}</td><td>{detailPrint.description}</td></tr>
      </table>
      </div></>:<></>}</>:<></>}
    </div>
  );
}