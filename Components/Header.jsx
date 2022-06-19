
import {BadgeCheckIcon,CollectionIcon,HomeIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';


const Header = () => {
    return(
        <>
            <header className='flex flex-col sm:flex-row m-5  justify-between items-center h-auto'>
                <div className='flex flex-grow justify-evenly max-w-2xl'>
                    <HeaderItem title="HOME" Icon={HomeIcon } />
                    <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                    <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} /> 
                    <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                    <HeaderItem title="SEARCH" Icon={SearchIcon} />
                    <HeaderItem title="ACCOUNT" Icon={UserIcon} />
                </div>
                <div>
                    <h1 className='' style={{fontSize: '40px'}}>Hulu</h1>
                </div>
            </header>
        </>
    )
}

export default Header;