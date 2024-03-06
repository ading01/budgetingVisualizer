import { MyAreaChart } from "../../components/myAreaChart/myAreaChart";
import SectionContainer from "../../components/SectionContainer";
import SplitContainer from "../../components/SplitContainer";
function Home() {
  return (
    <div>
      <MyAreaChart />
      <SectionContainer sectionNameId="hello">
        <SplitContainer section_name="Skills" resume_content={<div>hi</div>} />
      </SectionContainer>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
