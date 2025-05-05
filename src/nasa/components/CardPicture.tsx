import { Picture } from '../interfaces/pictureInterface'

interface Props {
  data: Picture
}

export const CardPicture=({ data }: Props) => {
  return (
    <div className="bg-base-100 shadow-sm mx-auto overflow-hidden p-0 border border-gray-400 rounded-2xl relative flex items-end">
      <div className="p-6 absolute text-white flex-grow flex flex-col max-h-[50%]">
        <h2 className="font-bold mb-2">{data?.title}</h2>
        <p className='overflow-hidden flex-1 flex-grow text-ellipsis leading-[1.5em] m-h-[6em]'>{data?.explanation}</p>
        <div className="flex w-full justify-end">
          <span >{data?.copyright}</span>
        </div>
      </div>
      <figure className='h-full'>
        <img className='h-full object-cover' src={data?.url} alt={data.title} />
      </figure>
    </div>
  )
}