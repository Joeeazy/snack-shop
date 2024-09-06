import { getAllSnack } from "../../services/snack";
import SnacksPage from "../SnacksPage/SnacksPage";

const AllSnacksPage = () => {
  return (
    <SnacksPage
      fetchSnacks={getAllSnack}
      pageTitle="Pick Your Yummy Snack"
      pageDescription="Snack combines passionate service with delicious, wholesale snacks and beverages. Available online, delivered across Australia."
    />
  );
};

export default AllSnacksPage;
