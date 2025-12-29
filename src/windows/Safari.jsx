import WindowWrapper from '#hoc/WindowWrapper'
import WindowControls from '#components/WindowControls'
import { blogPosts } from '#constants'

import { PanelLeft, ChevronLeft, ChevronRight, ShieldHalf, Search, Share, Plus, Copy, MoveRight } from 'lucide-react'

const Safari = ({ isMaximized, isMobile }) => {
  return (
    <div className='mx-auto'>
        <div id='window-header'>
            <WindowControls target="safari" />

            <PanelLeft className='ml-10 icon hidden sm-flex' />

            <div className='flex items-center gap-1 ml-5'>
                <ChevronLeft className='icon' />
                <ChevronRight className='icon' />
            </div>
            
            <div className='flex-1 flex-center gap-3'>
                <ShieldHalf className='icon hidden sm-flex' />
                
                <div className='search'>
                    <Search className='icon' />

                    <input type="text" placeholder='Search or enter website name' className='flex-1 w-[100%]' />
                </div>
            </div>
            
            <div className='items-center gap-5 hidden sm-flex'>
                <Share className='icon' />
                <Plus className='icon' />
                <Copy className='icon' />
            </div>
        </div>

        <div className={`overflow-y-auto ${!isMaximized ? 'max-h-[65vh]' : 'max-h-[90vh]'}`}>
            <div className='blog'>
                <h2>My Blog</h2>

                <div className='space-y-8'>
                    {blogPosts.map(({ id, date, title, image, link }) => (
                        <div key={id} className='blog-post'>
                            <div className='col-span-2'>
                                <img src={image} alt={title} />
                            </div>

                            <div className='content'>
                                <p>{date}</p>
                                <h3>{title}</h3>
                                <a href={link} target='_blank' rel='nooppener noreferrer'>
                                    Check out the full post <MoveRight className='icon-hover' />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

const SafariWindow = WindowWrapper(Safari, 'safari')
export default SafariWindow