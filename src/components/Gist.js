import styled from "styled-components";

const Gist = ({ gist }) => (
  <Wrapper>
    <UserHeader>
      <UserProfile>
        <UserAvatar src="https://api.lorem.space/image/face?w=150&h=150" />
        <UserName>Dayo Akins</UserName>
      </UserProfile>
      <QuickLinks>
        <QuickLink href="#">1 Files</QuickLink>
        <QuickLink href="#">Forks</QuickLink>
        <QuickLink href="#">Comments</QuickLink>
        <QuickLink href="#"> Stars</QuickLink>
      </QuickLinks>
    </UserHeader>
    <Status>
      <DateLabel>Created at: 11/20/2023</DateLabel>
      <DateLabel>Last updated: 11/20/2023</DateLabel>
    </Status>
    <Content>
      <TextContent>lorem </TextContent>
    </Content>
    <Files>
      <FileItem>Machine.js</FileItem>
      <FileItem>Output.js</FileItem>
    </Files>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 10px 20px;
  padding-bottom: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(212, 212, 212, 0.5);
`;
const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
`;
const UserName = styled.p`
  font-size: 12px;
  color: #528aeb;
  font-weight: 500;
`;
const QuickLinks = styled.div`
  display: flex;
  align-items: center;
`;
const QuickLink = styled.a`
  font-size: 13px;
  display: inline-block;
  margin-right: 20px;
  text-decoration: none;
  color: #528aeb;
`;
const Status = styled.div`
  display: flex;
`;
const DateLabel = styled.p`
  margin-right: 20px;
  font-size: 11px;
`;
const Content = styled.div`
  padding: 10px 0px;
`;
const TextContent = styled.p``;
const Files = styled.div`
  display: flex;
`;
const FileItem = styled.a`
  margin-right: 20px;
  color: #528aeb;
`;

export default Gist;
