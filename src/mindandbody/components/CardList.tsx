import { Picture } from '../interfaces/pictureInterface'
import { CardPicture } from './CardPicture'
import johan from '../../assets/johan.jpg'
import sergio from '../../assets/sergio.jpg'
import andres from '../../assets/andres.jpg'
import kumar from '../../assets/kumar.jpeg'


const data: Picture[] = [
  { url: johan, title: 'Johan Garzón', description: 'CEO, Web Developer' },
  { url: sergio, title: 'Sergio Castro', description: 'DB Developer' },
  { url: andres, title: 'Andrés Marino', description: 'Web Designer' },
  { url: kumar, title: 'Andrés Marino', description: 'QA / Tester' },
]

export const CardList=() => {
  return (
    <div className='max-w-6xl mx-auto flex flex-col h-full px-9'>
      <div className='p-4 px-3'>
        <h1 className='text-black font-bold text-xl text-center lg:text-6xl'>
          Watch the MindAndBody's team!
        </h1>
      </div>
      <div className='mx-auto grid grid-col-2 md:grid-cols-2 gap-2.5 flex-1 flex-grow my-2'>
        {
          data?.map( picture => (
            <CardPicture key={picture.url} data={ picture }/>
          ))
        }
      </div>
    </div>
  )
}