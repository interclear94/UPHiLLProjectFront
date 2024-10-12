
import Link from 'next/link'
import styles from './header.module.css'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import back from '../../../../public/back.png'

const Header = ({ showBackButton }: { showBackButton: boolean }) => {
  return (<>
    <div className={styles.headerBox}>
      {showBackButton && <Link href="/"><Image src={back} alt='뒤로가기 이미지' width={30} height={30} /></Link>}
      <div><Image src={logo} alt='logo 이미지' width={60} height={60} /> </div>
    </div>
  </>
  )
}

export default Header
