import HeaderBox from '@/components/HeaderBox'
import TotalBalancebox from '@/components/TotalBalancebox';

const Home = () => {

  const loggedIn = { firstName: 'Maithya' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header' >
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your funds with ease."
          />

          <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurentBalance={1500}
          />
        </header>
      </div>
    </section>
  )
}

export default Home