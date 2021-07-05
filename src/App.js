import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  const user = {
    name: "ヒレイ",
    image: "https://source.unsplash.com/xdshQfqb1mc",
    email: "1234@exsample.com",
    phone: "080-xxxx-xxxx",
    company: {
      name: "テスト会社"
    },
    website: "https://google.com"
  };
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
