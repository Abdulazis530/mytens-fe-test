import Header from "./components/Header";
import CardProfile from "./components/CardProfile";
import { useSelector } from 'react-redux';
import RepoBox from "./components/RepoBox";


function App() {
  const { profile,repositories } = useSelector(state => state.repos)
  return (
    <>
      <Header />
      {Object.keys(profile).length >0 && <CardProfile />}
      {repositories.length >0 &&  <RepoBox/>}
     
    </>
  );
}

export default App;
