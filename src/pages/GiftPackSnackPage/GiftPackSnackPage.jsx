import { getGiftPackSnack } from "../../services/snack";
import SnacksPage from "../SnacksPage/SnacksPage";

const GiftPackSnackPage = () => {
  return (
    <SnacksPage
      fetchSnacks={getGiftPackSnack}
      pageTitle="Shop Snack Gift Boxes"
      pageDescription="Snack is delivering happiness across Australia via delicious care packages, healthy snack boxes, and corporate gifts that stand out from the crowd. Buy one-off gifts or order in bulk."
    />
  );
};

export default GiftPackSnackPage;
