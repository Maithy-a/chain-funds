import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalancebox from '@/components/TotalBalancebox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {

  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content no-scrollbar'>
        <header className='home-header' >
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your funds with ease."
          />

          <TotalBalancebox
            accounts={[1]}
            totalBanks={4}
            totalCurrentBalance={1500}
          />
        </header>

        RECENT TRANSACTIONS

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