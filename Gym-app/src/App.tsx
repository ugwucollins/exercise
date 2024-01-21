import Index from './Gym-folder/Home';
import Program from './Gym-folder/Program';
import Choose from './Gym-folder/Choose';
import Plans from './Gym-folder/Plans';
import Testimonials from './Gym-folder/Testimonials';
import './App.scss';
// import Image from './Gym-folder/Image';

// import Photos from './Gym-folder/imgs/gym.jpg';
// import Photos1 from './Gym-folder/imgs/gym1.jpg';
// import Photos2 from './Gym-folder/imgs/gym2.jpg';
// import Photos3 from './Gym-folder/imgs/gym3.jpg';
// import Photos4 from './Gym-folder/imgs/gym4.jpg';

const title ='I made the right choice by choosing the fitclub and by choosing the right plan and program I already achieved my ideal body!';

const title1 =' This is the right choice if you want to shape your body to your ideal shape come to fitclub and join the right plan and program That we have for You!';
const title2 =' I made the right choice by choosing the fitclub and by that i am happy to been in their club execrise and am going to achieved my ideal body!';
const title3 ='Thanks to the founder of Fitclub for bring out these great plans and program for us to achieve our body Aim!';

const Photos = 'gym.jpg';
const Photos1 = 'gym1.jpg';
const Photos2 = 'gym2.jpg';
const Photos3 = 'gym3.jpg';
const Photos4 = 'gym4.jpg';
const Photos5 = 'gym5.jpg';

const name = 'Mathew John';
const name1 = 'John Paul';
const name2 = 'Tony Collins';
const name3 = 'lucky Ben';
const name4 = 'Goodluck C';
const name5 = 'Ann Juilte';


const works = 'Entrepreneur';
const works1 = 'Customer';
const works2 = 'CEO The Manager';
const works3 = 'Customer';
const works4 = 'Customer';
const works5 = 'Customer';


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

const Texts = [title,title1,title2,title3,title1]
   // const Sliders = [
    //     {
    //         word:
    //         '  I made the right choice by choosing the fitclub and by choosing the right plan and program I already achieved my ideal body!',
    //         name:'Mathew John',
    //         work:'Entrepreneur'
    //     },
    //     {
    //         word:
    //         '  I made the right choice by choosing the fitclub and by choosing the right plan and program I already achieved my ideal body!',
    //         name:'Tony Collins',
    //         work:'CEO Manager'
    //     },
    //     {
    //         word:
    //         '  I made the right choice by choosing the fitclub and by choosing the right plan and program I already achieved my ideal body!',
    //         name:'Lucky  Ben',
    //         work:'Customer'
    //     },
    // ]


// const Image = [Photos,Photos1,Photos2,Photos3,Photos4];
const Image = [Photos,Photos1,Photos2,Photos3,Photos4,Photos5];

const Names =[name,name1,name2,name3,name4,name5];
const Works = [works,works1,works2,works3,works4,works5]

  return (
    <>
      <Index menus={menus} />
      <Program />
      <Choose />
      <Plans />

      <Testimonials 
        Texts={Texts}
        Images={Image}
        Names={Names}
        Works={Works}
      />
      
    </>
  )
}

export default App;
