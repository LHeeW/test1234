import Epigram from "@/components/Epigram/epigram";
import FeedGrid from "./(feed-grid)/feed-grid";

export default function Page() {
  return (
    <FeedGrid>
      <Epigram />
      <Epigram
        content="이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야. 무언가를 바라는 마음은 곧 우주의 마음으로부터 비롯된 것이기 때문이지."
        author="파울로 코엘료1"
        tag="#나아가야할때 #꿈을이루고싶을떄 #나아가야할때 #꿈을이루고싶을떄 #나아가야할때 #꿈을이루고싶을떄"
      />
      <Epigram />
      <Epigram />
      <Epigram
        content="이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야. 무언가를 바라는 마음은 곧 우주의 마음으로부터 비롯된 것이기 때문이지."
        author="파울로 코엘료2"
        tag="#나아가야할때 #꿈을이루고싶을떄 #나아가야할때 #꿈을이루고싶을떄 #나아가야할때 #꿈을이루고싶을떄"
      />
      <Epigram />
      <Epigram />
      <Epigram />
      <Epigram
        content="이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야. 무언가를 바라는 마음은 곧 우주의 마음으로부터 비롯된 것이기 때문이지."
        author="파울로 코엘료3"
        tag="#나아가야할때 #꿈을이루고싶을떄 #나아가야할때 #꿈을이루고싶을떄 #나아가야할때 #꿈을이루고싶을떄"
      />
    </FeedGrid>
  );
}
