import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalancebox from '@/components/TotalBalancebox';

const Home = () => {

  const loggedIn = {
    firstName: 'Bonface',
    lastName: 'Maithya',
    email: 'maithya000@gmail.com',
  };

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

        RECENT TRANSCRTION

      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 2500 }, { currentBalance: 500 }]}
      />
    </section>
  )
}

export default Home