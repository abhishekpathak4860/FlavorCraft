import { useEffect, useState } from 'react'
import Box from '../Box/Box'
import styles from './HeroSection.module.css'

const BASE_URL = "http://localhost:9000"

export default function HeroSection({ search, choice}) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL)
        const json = await response.json();
        setdata(json)
        setLoading(false);

      } catch (error) {
        setError("unable to fetch data")
      }
    }
    fetchData()
  }, [])
  if (error) {
    return <div>{error}</div>
  }
  if (loading) {
    return <div>Loading</div>
  }

  const filterFoodItems = data.filter((foodItems) => {
    if (choice !== "All" && foodItems.type.toLowerCase() !== choice.toLowerCase()) {
      return false;
    }
  if(search){
    return foodItems.type.toLowerCase().includes(search.toLowerCase())
  }
    return true;
  })


  return (
    <main className={styles.main_section}>
      <div className={styles.box_container} >
        {
          filterFoodItems.length > 0 ? (filterFoodItems.map((element) => (
            <Box
              key={element.name}
              name={element.name}
              price={element.price + ".00"}
              text={element.text}
              image={`${BASE_URL}${element.image}`}
              type={element.type}
            />
          ))) : ((<p>No food items
          </p>))
        }
      </div>
    </main>
  )
}
