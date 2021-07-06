import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map((value) => {
  return {
    id: value,
    name: `ヒレイ-${value}`,
    image: "https://source.unsplash.com/xdshQfqb1mc",
    email: "1234@exsample.com",
    phone: "080-xxxx-xxxx",
    company: {
      name: "テスト会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const location = useLocation();
  console.log(location);

  const { state } = useLocation();
  console.log(state);

  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      ユーザー一覧
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
