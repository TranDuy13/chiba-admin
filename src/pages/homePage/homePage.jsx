import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Bottom from "../../components/Bottom/Bottom";
import Category from "../../components/Category";
import Header from "../../components/Header/Header";
import HomePageSP from "../../components/HomePage/HomePage";
import ListProduct from "../../components/ListProduct";
import NavBottom from "../../components/NavBottom/navBottom";
import "../../components/Search/Search.scss";
function HomePage() {
const [value,getValue]= useSearchParams()
  console.log( value.get('errorCode'));
  return (
    <>
      <Header />
      <HomePageSP />
      <div className="bg-gray-09 min-h-[50rem] ml-auto mr-auto">
        <Category />
        <ListProduct/>
      </div>
      <NavBottom/>

    </>
  );
}
export default HomePage;
