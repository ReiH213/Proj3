import QuestPage from '../components/QuestMap'
import Hero from '../components/Hero'
const Main = () => {

  
  return (
    <div className='flex flex-col m-4 gap-y-5 justify-center items-center'>
      <h1 className='text-4xl font-bold'>MathQuest</h1>
      <div className='flex flex-row  justify-between min-w-full mr-[50px] ml-4'>
        <Hero/>
        <div className='flex max-w-[60vh] items-center justify-center'>
        <QuestPage/>

        </div>
      </div>
    </div>
  )
}

export default Main