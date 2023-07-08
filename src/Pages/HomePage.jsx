import Navbar from '../components/Navbar'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import Content from '../components/Content'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-[1fr_4fr] gap-2 my-2'>
                <div className='top-10 sticky h-[40vh] px-2'>
                    <LeftSidebar />
                </div>
                <div className='grid grid-cols-[2fr_1fr] gap-2 py-2 px-4'>
                    <Content />
                    <div className='top-10 sticky h-[40vh]'>
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage