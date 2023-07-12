import Header from '../components/common/Header';
import Banner from '../components/v1/Banner';
import Products from '../components/v1/Products';
import Videos from '../components/v1/Videos';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header></Header>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Products Section */}
      <Products></Products>
      {/* Video Section */}
      <Videos></Videos>
    </div>
  );
}

export default App;
