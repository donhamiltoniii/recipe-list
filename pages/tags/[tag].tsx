import { useRouter } from 'next/router';
import { Container } from '../../components/container';
import { MarginBox } from '../../components/margin-box';

const TagPage = () => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <Container>
      <MarginBox bottom={5}>{tag}</MarginBox>
    </Container>
  );
};

export default TagPage;
