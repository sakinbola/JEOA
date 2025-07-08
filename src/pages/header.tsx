import Link from 'next/link'

function Header (){
    return (
        
        <div> 

            <div> 
                {/* <img> </img> */}
            </div>

            <div> 
                <Link href=""> </Link>
                <Link href=""> </Link>
                <Link href=""> </Link>
            </div>

            <div>
                <Link href="/login"> Login </Link>
            </div> 

        </div>

    )
}

export default Header