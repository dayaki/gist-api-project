import styled from "styled-components";
import Octicon from "react-octicon";
import moment from "moment";

const Gist = ({ gist }) => (
  <Wrapper>
    <UserHeader>
      <UserProfile>
        <UserAvatar src={gist.owner?.avatar_url} />
        <UserName href={gist.owner?.html_url}>{gist.owner?.login}</UserName>
      </UserProfile>
      <QuickLinks>
        <QuickLink href={gist.commits_url}>
          <Octicon name="chevron-left" />
          <Octicon name="chevron-right" /> {gist.files?.length} Files
        </QuickLink>
        <QuickLink href={gist.forks_url}>
          <Octicon name="repo-forked" /> Forks
        </QuickLink>
        <QuickLink href={gist.comments_url}>
          <Octicon name="comment" /> Comments
        </QuickLink>
        <QuickLink href={gist.url}>
          <Octicon name="star" /> Stars
        </QuickLink>
      </QuickLinks>
    </UserHeader>
    <Status>
      <DateLabel>
        Created at: {moment(gist.created_at).format("DD/MM/YYYY")}
      </DateLabel>
      <DateLabel>
        Last updated: {moment(gist.updated_at).format("DD/MM/YYYY")}
      </DateLabel>
    </Status>
    <Content>
      <TextContent>{gist.description}</TextContent>
    </Content>
    <Files>
      {Object.keys(gist.files).map((keyName, i) => (
        <FileItem key={i} href={gist.files[keyName].raw_url}>
          <Octicon name="file-text" /> {gist.files[keyName].filename}
        </FileItem>
      ))}
    </Files>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 10px 20px;
  padding-bottom: 50px;
  margin-bottom: 0px;
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
const UserName = styled.a`
  font-size: 12px;
  color: #528aeb;
  font-weight: 500;
  text-decoration: none;
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
  text-decoration: none;
`;

export default Gist;
