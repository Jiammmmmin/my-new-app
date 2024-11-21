import SharingConfig from '../components/SharingConfig';
import UserAccessList from '../components/UserAccessList';

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Emails & Calendar / julian@attio.com</h1>
        <p>Update your inbox permissions and settings.</p>
      </header>
      <main>
        <SharingConfig />
        <UserAccessList />
      </main>
    </div>
  );
}
