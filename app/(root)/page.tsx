import HeaderBox from '@/components/HeaderBox'
import TotalBalancebox from '@/components/TotalBalancebox';

const Home = () => {

  const loggedIn = { firstName: 'Maithya' };

  return (
    <section className='home'>
      <div className='home-content no-scrollbar'>
        <header className='home-header' >
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your funds with ease."
          />

          <TotalBalancebox
            accounts={[1]}
            totalBanks={4}
            totalCurentBalance={1500}
          />
        </header>
      </div>
    </section>
  )
}

export default Home