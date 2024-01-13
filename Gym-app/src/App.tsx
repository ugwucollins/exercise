import Index from './Gym-folder/Home';
import Program from './Gym-folder/Program';
import Choose from './Gym-folder/Choose';
import Plans from './Gym-folder/Plans';
import Testimonials from './Gym-folder/Testimonials';
import './App.scss'

function App(){
  const menus = [
    {
        id: 1,
        title:'Home'
    },
    {
        id: 2,
        title:'Program'
    },
    {
        id: 3,
        title:'Choose'
    },
    {
        id: 4,
        title:'Plans'
    },
    {
        id: 5,
        title:'Testimonials'
    }
]

  return (
    <>
      <Index menus={menus} />
      <Program />
      <Choose />
      <Plans />
      <Testimonials />
    </>
  )
}

export default App;
