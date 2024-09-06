import { getHealthySnack } from "../../services/snack";
import SnacksPage from "../SnacksPage/SnacksPage";

const HealthySnacksPage = () => {
  return (
    <SnacksPage
      fetchSnacks={getHealthySnack}
      pageTitle="Healthy Snack Boxes"
      pageDescription="Snack Proud has curated healthy snack boxes full of delicious products that will keep you satiated between meals. Each box contains small batch of Aussie snacks that are free of common-allergens but big on flavour. Discover new snacks each month. Buy for yourself or your team, or give as a gift."
    />
  );
};

export default HealthySnacksPage;
