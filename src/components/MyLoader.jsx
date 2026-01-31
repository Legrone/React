import { PacmanLoader as Loader } from 'react-spinners'

function MyLoader () {
    return (
        <div className='flex justify-center h-96 items-center'>
          <Loader color='yellow' />
        </div>
    )
  }

  export default MyLoader